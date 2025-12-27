import { Clock, Users, TrendingUp, Calendar } from "lucide-react";

const InsightsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Smart <span className="gradient-text">Analytics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how long the wait is.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Best Times Card */}
          <div className="bg-card rounded-lg p-8 border border-border shadow-cyber hover-scale group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Best Times to Call</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-muted-foreground">Weekdays</span>
                <span className="font-semibold text-green-400">10 AM - 2 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-muted-foreground">Weekends</span>
                <span className="font-semibold text-green-400">11 AM - 3 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-muted-foreground">Average wait</span>
                <span className="font-semibold text-primary">4.2 minutes</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-cyber rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400">23% faster than average</span>
              </div>
            </div>
          </div>
          
          {/* Peak Volumes Card */}
          <div className="bg-card rounded-lg p-8 border border-border shadow-cyber hover-scale group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Peak Call Volumes</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-muted-foreground">Monday mornings</span>
                <span className="font-semibold text-red-400">High volume</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-muted-foreground">Friday afternoons</span>
                <span className="font-semibold text-yellow-400">Medium volume</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyber-surface rounded-lg">
                <span className="text-muted-foreground">Late evenings</span>
                <span className="font-semibold text-green-400">Low volume</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-cyber rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-secondary" />
                <span className="text-secondary">Updated every 15 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;