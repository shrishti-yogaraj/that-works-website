import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, AlertCircle, X } from "lucide-react";

interface ContactFormPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const WEBHOOK_URL = "https://shrishti-y.app.n8n.cloud/webhook/9a9acb36-360a-4478-8777-0c286ec64c8f";

const ContactFormPopup = ({ open, onOpenChange }: ContactFormPopupProps) => {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    challenge: "",
    urgency: "",
    details: "",
  });

  // Reset form when dialog closes
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          phone: "",
          challenge: "",
          urgency: "",
          details: "",
        });
      }, 300);
    }
  }, [open]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    const leadData = {
      timestamp: new Date().toISOString(),
      ...formData,
      source: window.location.href,
      userAgent: navigator.userAgent,
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error("Webhook submission failed");
      }

      setFormStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    }
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {formStatus === "idle" || formStatus === "submitting" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-gradient-hero">
                Let's Talk!
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="popup-name">Full Name *</Label>
                <Input
                  id="popup-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="popup-email">Work Email *</Label>
                <Input
                  id="popup-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="popup-company">Company *</Label>
                <Input
                  id="popup-company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="popup-role">Your Role *</Label>
                <Input
                  id="popup-role"
                  name="role"
                  placeholder="e.g. Sales Director, Founder, VP Sales"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="popup-phone">Phone Number *</Label>
                <Input
                  id="popup-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={formStatus === "submitting"}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="popup-challenge">Biggest Lead Gen Challenge *</Label>
                <Select
                  value={formData.challenge}
                  onValueChange={(value) => handleSelectChange("challenge", value)}
                  disabled={formStatus === "submitting"}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="What's your biggest challenge?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Takes too much time">Takes too much time</SelectItem>
                    <SelectItem value="Low quality prospects">Low quality prospects</SelectItem>
                    <SelectItem value="Generic outreach">Generic outreach</SelectItem>
                    <SelectItem value="Low response rates">Low response rates</SelectItem>
                    <SelectItem value="Hard to scale">Hard to scale</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="popup-urgency">How soon are you looking to implement? *</Label>
                <Select
                  value={formData.urgency}
                  onValueChange={(value) => handleSelectChange("urgency", value)}
                  disabled={formStatus === "submitting"}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ASAP - This week">ASAP - This week</SelectItem>
                    <SelectItem value="Within a month">Within a month</SelectItem>
                    <SelectItem value="Within 3 months">Within 3 months</SelectItem>
                    <SelectItem value="Just exploring options">Just exploring options</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="popup-details">Tell us more about your goals</Label>
                <Textarea
                  id="popup-details"
                  name="details"
                  placeholder="What specific results are you hoping to achieve? Any other details we should know?"
                  value={formData.details}
                  onChange={handleInputChange}
                  disabled={formStatus === "submitting"}
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full btn-glossy"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Submitting..." : "Book My Demo"}
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                You'll hear from us within 24 hours.
              </p>
            </form>
          </>
        ) : formStatus === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-green-600">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              We've received your request and will be in touch within 24 hours to schedule your demo.
            </p>
            <Button variant="accent" onClick={handleClose} className="btn-glossy">
              Close
            </Button>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-red-600">Oops!</h3>
            <p className="text-muted-foreground mb-6">
              Something went wrong submitting your form. Please try again or call us directly at{" "}
              <a href="tel:+919538686894" className="text-accent hover:underline">
                +91 9538 6868 94
              </a>
            </p>
            <Button
              variant="accent"
              onClick={() => setFormStatus("idle")}
              className="btn-glossy"
            >
              Try Again
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormPopup;
