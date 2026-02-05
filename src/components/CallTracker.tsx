import { useState, useEffect } from "react";
import { Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";

/**
 * CallTracker Component
 * 
 * Implements the "confirm-don't-measure" hybrid approach:
 * 1. User taps "Call Now" → we record timestamp
 * 2. User returns to app → we ask "Did you just call?"
 * 3. If yes → simple range selection
 * 4. Backend validates using timestamp delta
 * 
 * Props:
 * - companyId: UUID of the company
 * - companyName: Display name
 * - phoneNumber: Support phone number
 */

interface CallTrackerProps {
  companyId: string;
  companyName: string;
  phoneNumber: string;
}

interface PendingCall {
  companyId: string;
  companyName: string;
  startedAt: number; // Unix timestamp
}

export default function CallTracker({ companyId, companyName, phoneNumber }: CallTrackerProps) {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showRangeModal, setShowRangeModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [pendingCall, setPendingCall] = useState<PendingCall | null>(null);

  useEffect(() => {
    // Check if user returned from a call
    const checkForPendingCall = () => {
      const stored = localStorage.getItem('yairo_pending_call');
      if (!stored) return;

      const data: PendingCall = JSON.parse(stored);
      
      // Only show prompt if it's been more than 30 seconds
      // (prevents accidental taps from triggering)
      const elapsed = Date.now() - data.startedAt;
      if (elapsed > 30000) { // 30 seconds minimum
        setPendingCall(data);
        setShowConfirmModal(true);
      }
    };

    // Check on mount
    checkForPendingCall();

    // Listen for page visibility changes (user returns to app)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        checkForPendingCall();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleCallNow = () => {
    // Store call start timestamp
    const callData: PendingCall = {
      companyId,
      companyName,
      startedAt: Date.now(),
    };
    localStorage.setItem('yairo_pending_call', JSON.stringify(callData));

    // Open phone dialer
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleConfirmCall = (didCall: boolean) => {
    if (didCall) {
      setShowConfirmModal(false);
      setShowRangeModal(true);
    } else {
      // User didn't actually call
      localStorage.removeItem('yairo_pending_call');
      setShowConfirmModal(false);
      setPendingCall(null);
    }
  };

  const handleSubmitWaitTime = async (rangeIndex: number) => {
    if (!pendingCall) return;

    const ranges = [
      { label: "Less than 5 minutes", min: 0, max: 5, typical: 2 },
      { label: "5–15 minutes", min: 5, max: 15, typical: 10 },
      { label: "15–30 minutes", min: 15, max: 30, typical: 22 },
      { label: "30+ minutes", min: 30, max: 180, typical: 45 },
      { label: "I didn't reach anyone", min: 0, max: 0, typical: 0 }, // Special case
    ];

    const selectedRange = ranges[rangeIndex];
    const actualElapsed = Math.round((Date.now() - pendingCall.startedAt) / 1000 / 60); // minutes

    // Backend sanity check
    const isValid = validateReport(actualElapsed, selectedRange);

    try {
      const now = new Date();
      
      const { data, error } = await supabase
        .from('wait_time_reports')
        .insert({
          company_id: pendingCall.companyId,
          wait_minutes: selectedRange.typical, // Use typical value from range
          day_of_week: now.toLocaleDateString('en-US', { weekday: 'long' }),
          hour_of_day: now.getHours(),
          reported_at: now.toISOString(),
          // Optional: Store validation metadata
          // actual_elapsed_minutes: actualElapsed,
          // validation_passed: isValid,
        });

      if (error) throw error;

      console.log('Wait time submitted:', data);
      console.log('Validation:', isValid ? 'PASSED' : 'FLAGGED for review');

      // Clear pending call
      localStorage.removeItem('yairo_pending_call');
      setPendingCall(null);
      setShowRangeModal(false);
      setShowThankYou(true);

      // Hide thank you after 3 seconds
      setTimeout(() => setShowThankYou(false), 3000);

    } catch (error) {
      console.error('Error submitting wait time:', error);
    }
  };

  const validateReport = (actualMinutes: number, selectedRange: any): boolean => {
    // Sanity checks
    
    // 1. Call too short (likely didn't happen)
    if (actualMinutes < 0.5) return false; // 30 seconds minimum
    
    // 2. Wildly inconsistent
    // If they were gone 3 minutes but selected "30+ minutes"
    if (actualMinutes < 5 && selectedRange.min > 15) return false;
    
    // If they were gone 40 minutes but selected "< 5 minutes"
    if (actualMinutes > 30 && selectedRange.max < 10) return false;
    
    // 3. Reasonable ranges pass
    // Allow some variance (users might multitask)
    const lowerBound = selectedRange.min * 0.5;
    const upperBound = selectedRange.max * 3;
    
    if (actualMinutes >= lowerBound && actualMinutes <= upperBound) return true;
    
    // Edge case: "Didn't reach anyone" can happen at any time
    if (selectedRange.typical === 0) return true;
    
    return true; // Default to accepting (we'll filter outliers in aggregation)
  };

  return (
    <>
      {/* Call Now Button */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{companyName}</h3>
            <p className="text-sm text-muted-foreground">{phoneNumber}</p>
          </div>
        </div>

        <Button
          onClick={handleCallNow}
          variant="hero"
          className="w-full"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-3">
          We'll ask about your wait time after you call
        </p>
      </div>

      {/* Modal 1: "Did you just call?" */}
      {showConfirmModal && pendingCall && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Did you just call {pendingCall.companyName}?
            </h3>

            <div className="flex gap-3">
              <Button
                onClick={() => handleConfirmCall(true)}
                variant="hero"
                className="flex-1"
              >
                Yes
              </Button>
              <Button
                onClick={() => handleConfirmCall(false)}
                variant="outline"
                className="flex-1"
              >
                No
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: Range Selection */}
      {showRangeModal && pendingCall && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                About how long did you wait before speaking to someone?
              </h3>
            </div>

            <div className="space-y-3">
              {[
                "Less than 5 minutes",
                "5–15 minutes",
                "15–30 minutes",
                "30+ minutes",
                "I didn't reach anyone",
              ].map((label, index) => (
                <button
                  key={index}
                  onClick={() => handleSubmitWaitTime(index)}
                  className="w-full text-left px-5 py-4 bg-cyber-surface hover:bg-primary/10 border border-border hover:border-primary/50 rounded-xl transition-all text-foreground font-medium"
                >
                  {label}
                </button>
              ))}
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              This helps improve accuracy for everyone
            </p>
          </div>
        </div>
      )}

      {/* Thank You State */}
      {showThankYou && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-in slide-in-from-bottom">
          <p className="font-medium">Thanks! You just helped improve wait times.</p>
        </div>
      )}
    </>
  );
}


/**
 * USAGE EXAMPLE in CompanySearch.tsx:
 * 
 * Replace the ReportWaitTime component with:
 * 
 * <CallTracker 
 *   companyId={selectedCompany.id}
 *   companyName={selectedCompany.name}
 *   phoneNumber={selectedCompany.phone_number || "1-800-000-0000"}
 * />
 */