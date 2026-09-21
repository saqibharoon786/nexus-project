import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
  "Medical Billing",
  "Patient Screening",
  "Ultrasound Services",
  "X-Ray Services",
  "Fast Food Solutions",
  "Lead Management",
  "Truck Dispatching",
  "Doctor–Patient Appointments",
];

export function EnquiryForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="relative z-30 overflow-hidden border-t border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="enquiry-title">
      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase text-primary">Start a conversation</p>
          <h2 id="enquiry-title" className="mt-5 max-w-xl font-display text-4xl font-black leading-[1.02] text-foreground sm:text-6xl">
            Tell us what your team <span className="text-electric">needs next.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground">
            Share a few details and our team will connect you with the right specialist.
          </p>
          <div className="mt-10 space-y-4 border-t border-border pt-8">
            <a href="mailto:hello@agenci.com" className="flex items-center gap-3 text-sm font-bold text-foreground transition-colors hover:text-primary">
              <Mail className="size-4 text-primary" aria-hidden="true" /> hello@agenci.com
            </a>
            <a href="tel:+923711513954" className="flex items-center gap-3 text-sm font-bold text-foreground transition-colors hover:text-primary">
              <Phone className="size-4 text-primary" aria-hidden="true" /> 🇵🇰 +92 371 1513954
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border border-border bg-background p-6 shadow-2xl sm:p-9" noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="service-field">
              <span>Full name</span>
              <input name="name" type="text" placeholder="Your name" autoComplete="name" required minLength={2} maxLength={100} />
            </label>
            <label className="service-field">
              <span>Email address</span>
              <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required maxLength={255} />
            </label>
            <label className="service-field">
              <span>Phone number</span>
              <input name="phone" type="tel" placeholder="Your contact number" autoComplete="tel" maxLength={24} pattern="[+0-9()\-\s]{7,24}" />
            </label>
            <label className="service-field">
              <span>Service needed</span>
              <select name="service" defaultValue={defaultService ?? ""} required>
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service} value={service}>{service}</option>)}
              </select>
            </label>
          </div>
          <label className="service-field mt-6">
            <span>How can we help?</span>
            <textarea name="message" placeholder="Tell us about your goals or current challenge" rows={5} required minLength={10} maxLength={1000} />
          </label>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-muted-foreground">We’ll review your enquiry and get back to you shortly.</p>
            <Button type="submit" variant="secondary" className="h-12 w-full shrink-0 px-6 font-bold sm:w-auto">
              Send enquiry <ArrowRight aria-hidden="true" />
            </Button>
          </div>
          {submitted && (
            <div className="mt-6 flex items-center gap-3 border border-primary/40 bg-accent/40 p-4 text-sm font-semibold text-foreground" role="status">
              <CheckCircle2 className="size-5 shrink-0 text-primary" aria-hidden="true" />
              Thank you — your details are ready for our team.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}