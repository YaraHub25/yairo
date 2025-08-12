import { Button } from "@/components/ui/button";
import { BarChart3, Users, Clock, TrendingUp } from "lucide-react";

const BusinessSection = () => {
  return (
    <section id="for-businesses" className="py-20 bg-gradient-cyber">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            For <span className="gradient-text">Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Use Waitly's anonymized wait-time reports to optimize your customer service staffing 
            and improve customer satisfaction.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border shadow-cyber hover-scale">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-muted-foreground text-sm">
                Track your wait time patterns and identify peak hours
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border shadow-cyber hover-scale">
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mx-auto mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Staffing Insights</h3>
              <p className="text-muted-foreground text-sm">
                Optimize staffing levels based on historical data
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border shadow-cyber hover-scale">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
              <p className="text-muted-foreground text-sm">
                Monitor improvements in customer satisfaction
              </p>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-8 border border-border shadow-cyber">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Clock className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">
                Reduce customer wait times by up to{" "}
                <span className="gradient-text">40%</span>
              </h3>
            </div>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join forward-thinking companies using Waitly's insights to provide 
              better customer experiences and optimize their support operations.
            </p>
            <Button variant="hero" size="lg" className="text-lg">
              Get Business Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;