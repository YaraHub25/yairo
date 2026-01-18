import { Clock, Users, TrendingUp, Calendar } from "lucide-react";


const InsightsSection = () => {
  return (
    <section className="py-14">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold">
            See the wait before you <span className="gradient-text">dial</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* Best Times Card */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-primary/10 rounded-lg">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Best times to call</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-sm text-muted-foreground">Weekdays</span>
                <span className="text-sm font-medium text-green-400">
                  10 AM – 2 PM
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-sm text-muted-foreground">Weekends</span>
                <span className="text-sm font-medium text-green-400">
                  11 AM – 3 PM
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-sm text-muted-foreground">Average wait</span>
                <span className="text-sm font-medium text-primary">
                  4.2 minutes
                </span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-muted/40 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-muted-foreground">
                  23% faster than average
                </span>
              </div>
            </div>
          </div>

          {/* Peak Volumes Card */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-secondary/10 rounded-lg">
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-medium">Busy hours to avoid</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-sm text-muted-foreground">
                  Monday mornings
                </span>
                <span className="text-sm font-medium text-red-400">
                  High volume
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-sm text-muted-foreground">
                  Friday afternoons
                </span>
                <span className="text-sm font-medium text-yellow-400">
                  Medium volume
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-sm text-muted-foreground">
                  Late evenings
                </span>
                <span className="text-sm font-medium text-green-400">
                  Low volume
                </span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-muted/40 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Updated every 15 minutes
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
