import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  return (
    <main className="pt-24 pb-20 min-h-screen" data-ocid="contact.page">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-display text-xs font-black uppercase tracking-[0.4em] text-neon-cyan mb-3">
            Get In Touch
          </p>
          <h1 className="font-display text-5xl font-extrabold uppercase tracking-tight mb-4">
            Contact <span className="neon-text-lime">Us</span>
          </h1>
          <p className="font-body text-base text-muted-foreground">
            Questions, collabs, or just saying hi — we're here for it.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="card-neon-border rounded-sm bg-card p-12 text-center"
              data-ocid="contact.success_state"
            >
              <CheckCircle2 className="w-16 h-16 text-neon-cyan mx-auto mb-6 neon-glow-cyan" />
              <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight mb-3">
                Message Sent!
              </h2>
              <p className="font-body text-muted-foreground">
                Thanks for reaching out. We'll get back to you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="card-neon-border rounded-sm bg-card p-8 md:p-10 flex flex-col gap-6"
              noValidate
              data-ocid="contact.modal"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="contact-name"
                  className="font-display text-xs font-black uppercase tracking-widest"
                >
                  Name
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  data-ocid="contact.input"
                  className={`bg-input border-border focus:border-neon-cyan font-body ${
                    errors.name ? "border-destructive" : ""
                  }`}
                />
                {errors.name && (
                  <p
                    className="text-xs text-destructive font-body"
                    data-ocid="contact.error_state"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="contact-email"
                  className="font-display text-xs font-black uppercase tracking-widest"
                >
                  Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  data-ocid="contact.input"
                  className={`bg-input border-border focus:border-neon-cyan font-body ${
                    errors.email ? "border-destructive" : ""
                  }`}
                />
                {errors.email && (
                  <p
                    className="text-xs text-destructive font-body"
                    data-ocid="contact.error_state"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <Label
                  htmlFor="contact-message"
                  className="font-display text-xs font-black uppercase tracking-widest"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  data-ocid="contact.textarea"
                  className={`bg-input border-border focus:border-neon-cyan font-body resize-none ${
                    errors.message ? "border-destructive" : ""
                  }`}
                />
                {errors.message && (
                  <p
                    className="text-xs text-destructive font-body"
                    data-ocid="contact.error_state"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                data-ocid="contact.submit_button"
                className="btn-neon-cyan flex items-center justify-center gap-2 text-sm font-display font-black uppercase tracking-widest px-8 py-4 rounded-sm w-full mt-2"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
