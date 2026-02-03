import { useState } from "react";
import { Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";

/**
 * ReportWaitTime Component
 * 
 * Lets users report their actual wait time after calling a company.
 * This is the core of your crowdsourcing strategy - completely legal and user-driven!
 * 
 * Props:
 * - companyId: UUID of the company from your companies table
 * - companyName: Display name (e.g., "Netflix Support")
 * - onSuccess: Optional callback function after successful submission
 */

interface ReportWaitTimeProps {
  companyId: string;
  companyName: string;
  onSuccess?: () => void;
}

export default function ReportWaitTime({ companyId, companyName, onSuccess }: ReportWaitTimeProps) {
  const [waitMinutes, setWaitMinutes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Get current date/time info for analytics
      const now = new Date();
      const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
      const hourOfDay = now.getHours();

      // Insert wait time report into Supabase
      const { data, error: insertError } = await supabase
        .from('wait_time_reports')
        .insert({
          company_id: companyId,
          wait_minutes: parseInt(waitMinutes),
          day_of_week: dayOfWeek,
          hour_of_day: hourOfDay,
        })
        .select();

      if (insertError) throw insertError;

      console.log('Wait time report submitted:', data);

      setSubmitted(true);
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess();
      }

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setWaitMinutes('');
      }, 3000);

    } catch (err) {
      console.error('Error submitting wait time:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3 neon-glow-green" />
        <h3 className="text-lg font-semibold text-foreground mb-1">
          Thanks for helping!
        </h3>
        <p className="text-muted-foreground text-sm">
          Your report helps others know when to call {companyName}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Report Wait Time</h3>
          <p className="text-sm text-muted-foreground">Just called {companyName}?</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            How long did you wait? (minutes)
          </label>
          <Input
            type="number"
            min="0"
            max="180"
            value={waitMinutes}
            onChange={(e) => setWaitMinutes(e.target.value)}
            placeholder="e.g., 8"
            className="bg-cyber-surface border-primary/20 focus:border-primary"
            required
          />
          <p className="text-xs text-muted-foreground mt-1">
            Enter 0 if you got through immediately
          </p>
        </div>

        {error && (
          <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
            {error}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting || !waitMinutes}
          variant="hero"
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Report
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Anonymous and helps others save time
        </p>
      </form>
    </div>
  );
}


/**
 * USAGE EXAMPLE in your app:
 * 
 * import ReportWaitTime from '@/components/ReportWaitTime';
 * 
 * function CompanyDetailPage() {
 *   // Get this from your database query or route params
 *   const companyId = "uuid-from-your-database";
 *   const companyName = "Netflix Support";
 * 
 *   return (
 *     <div className="container mx-auto p-6">
 *       <h1 className="text-3xl font-bold mb-6">Netflix Support Wait Times</h1>
 *       
 *       <ReportWaitTime 
 *         companyId={companyId}
 *         companyName={companyName}
 *         onSuccess={() => {
 *           console.log('Wait time reported!');
 *           // Optionally refresh your analytics/charts
 *         }}
 *       />
 *     </div>
 *   );
 * }
 */