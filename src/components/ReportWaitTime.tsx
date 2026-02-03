import React, { useState } from 'react';
import { Clock, Send, CheckCircle } from 'lucide-react';

// Import your Supabase client (you already have @supabase/supabase-js installed)
// Make sure you have this file set up in your project:
// import { supabase } from '@/lib/supabaseClient';

/**
 * ReportWaitTime Component
 * 
 * This component lets users report their actual wait time after calling a company.
 * It's the core of your crowdsourcing strategy - completely legal and user-driven!
 * 
 * Props:
 * - companyId: UUID of the company from your companies table
 * - companyName: Display name (e.g., "Netflix Support")
 * - onSuccess: Callback function after successful submission
 */

export default function ReportWaitTime({ companyId, companyName, onSuccess }) {
  const [waitMinutes, setWaitMinutes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Get current date/time info for analytics
      const now = new Date();
      const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
      const hourOfDay = now.getHours();

      // TODO: Replace this with your actual Supabase client
      // Example:
      // const { data, error: insertError } = await supabase
      //   .from('wait_time_reports')
      //   .insert({
      //     company_id: companyId,
      //     wait_minutes: parseInt(waitMinutes),
      //     day_of_week: dayOfWeek,
      //     hour_of_day: hourOfDay,
      //   });

      // For now, we'll simulate the API call
      console.log('Submitting wait time report:', {
        company_id: companyId,
        wait_minutes: parseInt(waitMinutes),
        day_of_week: dayOfWeek,
        hour_of_day: hourOfDay,
      });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Uncomment this when you integrate Supabase:
      // if (insertError) throw insertError;

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
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-green-900 mb-1">
          Thanks for helping!
        </h3>
        <p className="text-green-700 text-sm">
          Your report helps others know when to call {companyName}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-cyan-100 p-2 rounded-lg">
          <Clock className="w-5 h-5 text-cyan-600" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-900">Report Wait Time</h3>
          <p className="text-sm text-slate-600">Just called {companyName}?</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            How long did you wait? (minutes)
          </label>
          <input
            type="number"
            min="0"
            max="180"
            value={waitMinutes}
            onChange={(e) => setWaitMinutes(e.target.value)}
            placeholder="e.g., 8"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none"
            required
          />
          <p className="text-xs text-slate-500 mt-1">
            Enter 0 if you got through immediately
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !waitMinutes}
          className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Report
            </>
          )}
        </button>

        <p className="text-xs text-slate-500 mt-3 text-center">
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
 *   const companyId = "uuid-from-your-database";
 *   const companyName = "Netflix Support";
 * 
 *   return (
 *     <div>
 *       <h1>Netflix Support Wait Times</h1>
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