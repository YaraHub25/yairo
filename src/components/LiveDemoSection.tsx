import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, TrendingUp, TrendingDown } from "lucide-react";

const LiveDemoSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const hourLabels = [
    "9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm",
  ];

  const demoData = {
    company: "Netflix Support",
    currentWait: "8 minutes",
    trend: "decreasing",
    bestTime: "2-4 PM",
    worstTime: "7-9 PM",
    chartData: [12, 8, 15, 22, 18, 6, 9, 14, 8],
  };

  return (
    <section id="live-demo" className="py-16 bg-gradient-cyber">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-3">
            Try Our <span className="gradient-text">Live Demo</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Search a company
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search a company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-20 h-12 text-base bg-cyber-surface border-primary/20 focus:border-primary"
            />
            <Button variant="hero" className="absolute right-2 top-1/2 -translate-y-1/2 h-9 px-4 text-sm">
              Search
            </Button>
          </div>

          {/* Demo Result */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">

              {/* Left */}
              <div className="space-y-5">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {demoData.company}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Current wait
                    </span>
                    <span className="text-xl font-semibold text-primary">
                      {demoData.currentWait}
                    </span>
                    {demoData.trend === "decreasing" ? (
                      <TrendingDown className="w-4 h-4 text-green-500" />
                    ) : (
                      <TrendingUp className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cyber-surface rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-1">
                      Best time to call
                    </div>
                    <div className="text-base font-medium text-green-400">
                      {demoData.bestTime}
                    </div>
                  </div>
                  <div className="bg-cyber-surface rounded-lg p-4">
                    <div className="text-xs text-muted-foreground mb-1">
                      Avoid calling
                    </div>
                    <div className="text-base font-medium text-red-400">
                      {demoData.worstTime}
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Wait Time Trends (Today)
                </h4>

                <div className="bg-cyber-surface rounded-lg p-5">
                  <div className="flex items-end justify-between h-36 gap-2">
                    {demoData.chartData.map((value, index) => {
                      const getBarColor = (val: number) => {
                        if (val <= 8) return "bg-green-500";
                        if (val <= 15) return "bg-yellow-500";
                        return "bg-red-500";
                      };

                      return (
                        <div key={index} className="flex flex-col items-center gap-1">
                          <div
                            className={`${getBarColor(value)} w-7 rounded-t-md`}
                            style={{ height: `${(value / 22) * 120}px` }}
                          />
                          <span className="text-[11px] text-muted-foreground">
                            {hourLabels[index]}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LiveDemoSection;
