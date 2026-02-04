import { useState, useEffect } from "react";
import { TrendingDown, TrendingUp, Clock, Users } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

/**
 * WaitTimeStats Component
 * 
 * Displays aggregated stats from crowdsourced wait time reports.
 * Shows: current average, best time to call, total reports
 * 
 * Props:
 * - companyId: UUID of the company to show stats for
 * - companyName: Display name for the company
 */

interface WaitTimeStatsProps {
  companyId: string;
  companyName: string;
}

interface Stats {
  averageWait: number;
  bestTimeStart: string;
  bestTimeEnd: string;
  worstTime: string;
  totalReports: number;
  last24Hours: number;
  percentFaster: number;
}

export default function WaitTimeStats({ companyId, companyName }: WaitTimeStatsProps) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWaitTimeStats();
  }, [companyId]);

  const fetchWaitTimeStats = async () => {
    setLoading(true);
    
    try {
      // Fetch all wait time reports for this company from the last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const { data: reports, error } = await supabase
        .from('wait_time_reports')
        .select('wait_minutes, hour_of_day, day_of_week, reported_at')
        .eq('company_id', companyId)
        .gte('reported_at', thirtyDaysAgo.toISOString())
        .order('reported_at', { ascending: false });
      
      if (error) throw error;
      
      if (!reports || reports.length === 0) {
        setStats(null);
        setLoading(false);
        return;
      }

      // Calculate statistics
      const calculatedStats = calculateStats(reports);
      setStats(calculatedStats);

    } catch (error) {
      console.error('Error fetching stats:', error);
      setStats(null);
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (reports: any[]): Stats => {
    // Calculate average wait time
    const avgWait = Math.round(
      reports.reduce((sum, r) => sum + r.wait_minutes, 0) / reports.length
    );

    // Find best time (lowest average by hour)
    const byHour: { [key: number]: number[] } = {};
    reports.forEach(r => {
      if (!byHour[r.hour_of_day]) {
        byHour[r.hour_of_day] = [];
      }
      byHour[r.hour_of_day].push(r.wait_minutes);
    });

    let bestHour = 0;
    let lowestAvg = Infinity;
    let worstHour = 0;
    let highestAvg = 0;
    
    Object.entries(byHour).forEach(([hour, waits]) => {
      const avg = waits.reduce((a, b) => a + b, 0) / waits.length;
      if (avg < lowestAvg) {
        lowestAvg = avg;
        bestHour = parseInt(hour);
      }
      if (avg > highestAvg) {
        highestAvg = avg;
        worstHour = parseInt(hour);
      }
    });

    // Format hours to readable time
    const formatHour = (h: number) => {
      const period = h >= 12 ? 'PM' : 'AM';
      const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
      return `${displayHour} ${period}`;
    };

    // Count reports in last 24 hours
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);
    const last24Hours = reports.filter(
      r => new Date(r.reported_at) > twentyFourHoursAgo
    ).length;

    // Calculate percentage faster
    const percentFaster = avgWait > 0 
      ? Math.round(((avgWait - lowestAvg) / avgWait) * 100)
      : 0;

    return {
      averageWait: avgWait,
      bestTimeStart: formatHour(bestHour),
      bestTimeEnd: formatHour((bestHour + 2) % 24),
      worstTime: formatHour(worstHour),
      totalReports: reports.length,
      last24Hours,
      percentFaster,
    };
  };

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-xl p-6 animate-pulse">
        <div className="h-8 bg-cyber-surface rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-cyber-surface rounded w-2/3"></div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="bg-card border border-border rounded-xl p-6 text-center">
        <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
        <h3 className="font-semibold text-foreground mb-1">No Data Yet</h3>
        <p className="text-muted-foreground text-sm">
          Be the first to report wait times for {companyName}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Company Header */}
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-foreground mb-1">
          {companyName}
        </h3>
        <p className="text-sm text-muted-foreground">
          Based on {stats.totalReports} community reports
        </p>
      </div>

      {/* Main Stats Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Current Average Wait */}
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-400">Average Wait</span>
            <Clock className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-4xl font-bold text-foreground mb-1">
            {stats.averageWait} min
          </div>
          <p className="text-xs text-muted-foreground">
            Last 30 days
          </p>
        </div>

        {/* Best Time to Call */}
        <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-400">Best Time to Call</span>
            <TrendingDown className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">
            {stats.bestTimeStart} - {stats.bestTimeEnd}
          </div>
          <p className="text-xs text-green-400 font-medium">
            {stats.percentFaster}% faster than average
          </p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{stats.last24Hours} reports in last 24 hours</span>
          </div>
          {stats.worstTime && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-orange-500" />
              <span>Avoid: {stats.worstTime}</span>
            </div>
          )}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 text-xs text-amber-200">
        <strong>Community-powered:</strong> Wait times are estimated based on user reports and may not reflect current conditions.
      </div>
    </div>
  );
}


/**
 * USAGE EXAMPLE:
 * 
 * import WaitTimeStats from '@/components/WaitTimeStats';
 * 
 * function CompanyPage() {
 *   const companyId = "51b71c31-4c7c-4316-aec9-a752fccb70e2";
 *   const companyName = "Netflix Support";
 * 
 *   return (
 *     <div className="container mx-auto p-6">
 *       <WaitTimeStats 
 *         companyId={companyId}
 *         companyName={companyName}
 *       />
 *     </div>
 *   );
 * }
 */