import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, TrendingDown } from "lucide-react";


const CheckWaitTime = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<any | null>(null);

  // Temporary demo function
  const handleSearch = () => {
    if (!search.trim()) return;

    // Demo dataset (replace later with API)
    const demo = {
      company: search,
      currentWait: "6 minutes",
      bestTime: "1–3 PM",
      worstTime: "6–9 PM",
      trend: "decreasing",
      average: "4.8 minutes",
      data: [12, 9, 6, 5, 8, 14, 11],
    };

    setResult(demo);
  };

  return (
    <section className="py-20 container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">Check Wait Time</h1>

      {/* Search bar */}
      <div className="relative max-w-xl mb-10">
        <Input
          placeholder="Enter a company (ex: IRS, Amazon, Netflix...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-14 text-lg"
        />
        <Button className="absolute right-2 top-2 h-10" onClick={handleSearch}>
          Search
        </Button>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-card rounded-lg p-8 border border-border shadow-cyber">
          <h2 className="text-2xl font-semibold mb-4">{result.company}</h2>

          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <span className="text-lg">Current wait:</span>
            <span className="text-2xl font-bold text-primary">
              {result.currentWait}
            </span>
            {result.trend === "decreasing" ? (
              <TrendingDown className="w-6 h-6 text-green-400" />
            ) : (
              <TrendingUp className="w-6 h-6 text-red-400" />
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-cyber-surface rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Best time to call</p>
              <p className="text-lg font-semibold text-green-400">
                {result.bestTime}
              </p>
            </div>

            <div className="bg-cyber-surface rounded-lg p-4">
              <p className="text-sm text-muted-foreground">Avoid calling</p>
              <p className="text-lg font-semibold text-red-400">
                {result.worstTime}
              </p>
            </div>
          </div>

          {/* Mini bar chart */}
          <h3 className="font-semibold mb-3">Trend Today</h3>
          <div className="flex items-end gap-2 h-40">
            {result.data.map((val: number, i: number) => {
              const max = Math.max(...result.data);
              const height = (val / max) * 130;

              const barColor =
                val <= 8 ? "bg-green-500" :
                val <= 12 ? "bg-yellow-500" :
                "bg-red-500";

              return (
                <div key={i} className="flex flex-col items-center relative group">
                  <div
                    className={`${barColor} w-6 rounded-t-md transition-all`}
                    style={{ height }}
                  />
                  <span className="text-xs text-muted-foreground mt-1">
                    {i + 9}am
                  </span>

                  {/* Hover bubble */}
                  <div className="absolute -top-6 px-2 py-1 text-xs bg-background border border-border rounded opacity-0 group-hover:opacity-100 transition">
                    {val}m
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default CheckWaitTime;