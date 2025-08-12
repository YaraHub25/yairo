import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, TrendingUp, TrendingDown } from "lucide-react";

const LiveDemoSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const demoData = {
    company: "Netflix Support",
    currentWait: "8 minutes",
    trend: "decreasing",
    bestTime: "2-4 PM",
    worstTime: "7-9 PM",
    chartData: [12, 8, 15, 22, 18, 6, 9, 14, 8]
  };

  return (
    <section id="live-demo" className="py-20 bg-gradient-cyber">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Try Our <span className="gradient-text">Live Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Search any company and see real-time wait times, peak hours, and smart recommendations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Search Bar */}
          <div className="relative">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search a company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-20 h-14 text-lg bg-cyber-surface border-primary/30 focus:border-primary neon-glow"
              />
              <Button 
                variant="hero" 
                className="absolute right-2 h-10"
              >
                Search
              </Button>
            </div>
          </div>
          
          {/* Demo Result */}
          <div className="bg-card rounded-lg p-8 border border-border shadow-cyber hover-scale">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{demoData.company}</h3>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-lg">Current wait: </span>
                    <span className="text-2xl font-bold text-primary">{demoData.currentWait}</span>
                    {demoData.trend === "decreasing" ? (
                      <TrendingDown className="w-5 h-5 text-green-500" />
                    ) : (
                      <TrendingUp className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cyber-surface rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Best time to call</div>
                    <div className="text-lg font-semibold text-green-400">{demoData.bestTime}</div>
                  </div>
                  <div className="bg-cyber-surface rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Avoid calling</div>
                    <div className="text-lg font-semibold text-red-400">{demoData.worstTime}</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Wait Time Trends (Today)</h4>
                <div className="bg-cyber-surface rounded-lg p-6">
                  <div className="flex items-end justify-between h-40 gap-2">
                    {demoData.chartData.map((value, index) => {
                      const getBarColor = (val: number) => {
                        if (val <= 8) return 'bg-green-500';
                        if (val <= 15) return 'bg-yellow-500';
                        return 'bg-red-500';
                      };
                      
                      return (
                        <div key={index} className="flex flex-col items-center gap-2 relative group">
                          <div className="relative">
                            <div 
                              className={`${getBarColor(value)} rounded-t-md w-8 transition-all duration-300 hover:brightness-110 relative`}
                              style={{ height: `${(value / 22) * 140}px` }}
                            />
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium bg-background border border-border rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              {value}m
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground font-medium">
                            {9 + index}am
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                        <span className="text-muted-foreground">Good (≤8m)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                        <span className="text-muted-foreground">Fair (9-15m)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                        <span className="text-muted-foreground">Poor (&gt;15m)</span>
                      </div>
                    </div>
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