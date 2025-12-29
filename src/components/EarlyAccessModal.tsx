import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EarlyAccessModalProps {
  open: boolean;
  onClose: () => void;
}

const EarlyAccessModal = ({ open, onClose }: EarlyAccessModalProps) => {
  const [email, setEmail] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early access email:", email);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md bg-background rounded-xl shadow-xl p-6">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <h2 className="text-2xl font-semibold mb-2">
          Get early access
        </h2>

        <p className="text-sm text-muted-foreground mb-6">
          Be the first to know when yairo launches.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <Button type="submit" className="w-full">
            Request early access
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EarlyAccessModal;