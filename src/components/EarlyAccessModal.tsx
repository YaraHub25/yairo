import { useEffect, useState } from "react";
import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { Alert } from "./ui/alert";

interface EarlyAccessModalProps {
  open: boolean;
  onClose: () => void;
}

const EarlyAccessModal = ({ open, onClose }: EarlyAccessModalProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mount animation trigger
  useEffect(() => {
    if (open) {
      setMounted(true);
      setSubmitted(false);
      setEmail("");
    }
  }, [open]);

  // Auto-close after success
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!email || loading) return;

  setLoading(true);

  const { data, error } = await supabase.rpc(
    "request_early_access",
     {email_input: email }
    );

  setLoading(false);

if (error) {
  console.error(error);
  alert("Server error. Please try again.");
  return;
}

const result = data?.[0];

if (!result?.success) {
  alert(result?.message ?? "Signup failed");
  return;
}

setSubmitted(true);
};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`
          relative z-10 w-full max-w-md rounded-xl bg-background p-6 shadow-xl
          transition-all duration-200 ease-out
          ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-[0.98]"}
        `}
      >
        {/* Close */}
        {!submitted && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* CONTENT */}
        {!submitted ? (
          <>
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
                autoFocus
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Request early access"}
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-6 space-y-3">
            <CheckCircle className="w-10 h-10 text-primary" />
            <h3 className="text-lg font-semibold">
              You’re on the list
            </h3>
            <p className="text-sm text-muted-foreground">
              We’ll be in touch soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EarlyAccessModal;