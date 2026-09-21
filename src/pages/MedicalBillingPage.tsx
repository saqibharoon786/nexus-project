import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  HeartPulse,
  Layers3,
  Lock,
  Mail,
  Phone,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
  UserRoundCheck,
  Wallet,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Seo } from "@/components/site/Seo";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const faqs = [
  {
    question: "What do medical billing services include?",
    answer:
      "Medical billing services cover the full revenue cycle: insurance eligibility verification, medical coding, claim submission, payment posting, denial management, A/R follow-up, patient billing, and reporting. HS Partners also includes credentialing and prior authorization support.",
  },
  {
    question: "How much do medical billing services cost?",
    answer:
      "Most companies charge between roughly 4% and 10% of monthly collections, depending on specialty, volume, and services included. Others use flat monthly or per-claim pricing. We state everything upfront so you can compare like for like, with no surprise setup, software, or reporting fees.",
  },
  {
    question: "Is outsourcing medical billing worth it?",
    answer:
      "For most practices, yes. Outsourcing removes the cost of salaries, benefits, training, and billing software, and it usually improves collections through specialized expertise and dedicated denial follow-up. It also gives you predictable costs and frees your staff to focus on patients.",
  },
  {
    question: "How long does it take to get paid after outsourcing?",
    answer:
      "Clean claims are typically submitted within 24–48 hours of service, and most payers pay within 14–45 days, depending on the payer and claim type. During onboarding, we also work existing A/R, so recoveries often begin in the first few weeks.",
  },
  {
    question: "How do you reduce claim denials?",
    answer:
      "We prevent denials at three points: before the visit (eligibility and authorization checks), before submission (coding review and claim scrubbing), and after denial (root-cause analysis and appeals). We also share denial trends with your team so the underlying issues get fixed.",
  },
  {
    question: "Do you work with my EHR or practice management software?",
    answer:
      "Yes. We work with major platforms such as Epic, Athenahealth, eClinicalWorks, NextGen, and Tebra, plus many others. We work inside your existing system, so you don't have to switch software or retrain staff.",
  },
  {
    question: "Are your medical billing services HIPAA compliant?",
    answer:
      "Yes. We follow HIPAA privacy and security requirements, sign a Business Associate Agreement (BAA), use encrypted systems, and limit data access by role. Our staff receive regular compliance training.",
  },
  {
    question: "Will I still have visibility and control over my billing?",
    answer:
      "Absolutely. You get access to real-time reports and monthly dashboards showing collections, denial rate, days in A/R, and aging. Your dedicated account manager is available for regular reviews, and you own your data at all times.",
  },
  {
    question: "What's the difference between medical billing and medical coding?",
    answer:
      "Medical coding converts diagnoses, procedures, and services into standardized codes (ICD-10, CPT, HCPCS). Medical billing uses those codes to create and submit claims and collect payment. They are closely connected, and errors in coding are one of the main causes of denied claims.",
  },
  {
    question: "How do I switch from my current billing company or in-house team?",
    answer:
      "Switching is simple. We start with a free audit, then handle system access, payer setup, and workflow migration, and we work outstanding A/R from your previous process. Our onboarding is designed to avoid gaps in billing, so your cash flow isn't interrupted.",
  },
];

const billingServices: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Patient Registration and Insurance Eligibility Verification",
    description: "We verify coverage, benefits, co-pays, deductibles, and prior authorization requirements before the patient is seen. Most preventable denials start at the front desk, and we stop them there.",
    icon: UserRoundCheck,
  },
  {
    title: "Medical Coding (ICD-10, CPT, HCPCS)",
    description: "Certified coders assign accurate diagnosis and procedure codes based on your clinical documentation. This protects you from undercoding, which loses revenue, and overcoding, which creates audit risk.",
    icon: ClipboardCheck,
  },
  {
    title: "Charge Entry and Clean Claim Submission",
    description: "Every claim is scrubbed against payer-specific edits before submission. Clean claims are paid faster and rejected less often.",
    icon: FileCheck2,
  },
  {
    title: "Denial Management and Appeals",
    description: "We don't just resubmit denied claims. We find the root cause, correct it, file strong appeals, and feed the findings back into your process so the same denial doesn't come back.",
    icon: RefreshCcw,
  },
  {
    title: "Accounts Receivable (A/R) Follow-Up",
    description: "Our team works aging buckets (30, 60, 90, 120+ days) systematically. No claim is left sitting, and no payer is left unchased.",
    icon: Wallet,
  },
  {
    title: "Payment Posting and Reconciliation",
    description: "We post insurance and patient payments accurately, reconcile them against your bank deposits, and flag underpayments against your contracted rates.",
    icon: CircleDollarSign,
  },
  {
    title: "Patient Billing and Collections",
    description: "Clear statements and a respectful, patient-friendly collections process improve your patient balance recovery without hurting your reputation.",
    icon: HeartPulse,
  },
  {
    title: "Provider Credentialing and Enrollment",
    description: "We handle payer enrollment, re-credentialing, and CAQH management so providers start billing sooner and stay in-network.",
    icon: BadgeCheck,
  },
  {
    title: "Reporting and Revenue Analytics",
    description: "You get transparent monthly dashboards covering collections, denial rate, days in A/R, and net collection rate. You always know where your money is.",
    icon: BarChart3,
  },
];

const processSteps = [
  { number: "01", title: "Free revenue audit", description: "We review your current claims, denials, and A/R to find leaks." },
  { number: "02", title: "Onboarding and setup", description: "We connect to your EHR/PM system, payer portals, and clearinghouse, usually within 7 days." },
  { number: "03", title: "Eligibility and prior authorization", description: "We verify coverage and obtain approvals before the visit." },
  { number: "04", title: "Coding and charge capture", description: "Certified coders review documentation and assign accurate codes." },
  { number: "05", title: "Claim scrubbing and submission", description: "Claims go out clean, within 24–48 hours of the visit." },
  { number: "06", title: "Payment posting", description: "ERAs and EOBs are posted, and variances are flagged." },
  { number: "07", title: "Denial and A/R recovery", description: "Every rejected, denied, or aging claim gets worked." },
  { number: "08", title: "Patient billing", description: "Statements are sent, and payment plans and support are offered." },
  { number: "09", title: "Reporting and optimization", description: "Monthly reviews with a dedicated account manager." },
];

const reasons = [
  { title: "Dedicated account manager", description: "You get a named contact, not a ticket number.", icon: Layers3 },
  { title: "Certified billers and coders", description: "Our team holds credentials such as CPC, CCS, and CPB.", icon: BadgeCheck },
  { title: "Transparent pricing", description: "No hidden setup fees or surprise charges.", icon: Wallet },
  { title: "Technology-driven accuracy", description: "Automated claim scrubbing, real-time eligibility checks, and denial analytics.", icon: BarChart3 },
  { title: "HIPAA-compliant operations", description: "Secure systems, encrypted data, and strict access controls.", icon: Lock },
  { title: "Works with your software", description: "We work inside your existing EHR and PM platform. You don't have to switch systems.", icon: ShieldCheck },
];

const specialties = [
  "Internal Medicine Billing",
  "Cardiology Billing",
  "Orthopedic Billing",
  "Mental Health and Behavioral Billing",
  "Urgent Care Billing",
  "Radiology Billing",
  "Pain Management Billing",
  "Dermatology Billing",
  "Pediatrics Billing",
  "Physical Therapy Billing",
  "Anesthesia Billing",
  "OB/GYN Billing",
];

const integrations = ["Epic", "Athenahealth", "eClinicalWorks", "NextGen", "Kareo/Tebra", "AdvancedMD", "Practice Fusion", "DrChrono", "CureMD"];

const resultRows = [
  { metric: "Clean claim rate", average: "~90%", target: "95%+" },
  { metric: "Denial rate", average: "8–12%", target: "Under 5%" },
  { metric: "Days in A/R", average: "40–50 days", target: "30 days or less" },
  { metric: "Net collection rate", average: "90–93%", target: "95%+" },
];

const startSteps = [
  { number: "01", title: "Book a free consultation", description: "Tell us about your practice, specialty, and current billing bottlenecks." },
  { number: "02", title: "Receive your revenue audit", description: "We show you exactly where claims, denials, and A/R are leaking money." },
  { number: "03", title: "Go live", description: "We onboard you in about 7 days, and you start seeing cleaner claims and faster follow-up." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "HS Partners",
      url: "https://hspartners.com/medical-billing-services",
      telephone: "+1-431-668-3854",
      email: "hello@agenci.com",
      areaServed: "US",
    },
    {
      "@type": "Service",
      name: "Medical Billing Services",
      serviceType: "Revenue cycle management and outsourced medical billing",
      provider: { "@type": "Organization", name: "HS Partners" },
      areaServed: "US",
      description: "HIPAA-compliant medical billing services that cut denials, speed up reimbursements, and boost collections.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export function MedicalBillingPage() {
  return (
    <main className="relative bg-background">
      <Seo
        title="Medical Billing Services | Get Paid Faster | HS Partners"
        description="HIPAA-compliant medical billing services that cut denials, speed up reimbursements, and boost collections. Get a free revenue audit from HS Partners."
        keywords="medical billing services, medical billing company, outsourced medical billing, revenue cycle management, medical billing and coding, claim denial management, medical billing for physicians"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader ctaHref="#contact" />

      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:pb-28 sm:pt-20" aria-labelledby="billing-hero-title">
        <div className="hero-aura pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">Home</a>
            <span aria-hidden="true">/</span>
            <span>Services</span>
            <span aria-hidden="true">/</span>
            <span className="text-primary">Medical Billing</span>
          </p>
          <p className="text-xs font-bold uppercase text-primary">Medical billing services</p>
          <h1 id="billing-hero-title" className="mt-5 max-w-4xl font-display text-4xl font-black leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Medical Billing Services That Maximize Your Revenue and <span className="text-electric">Minimize Denials</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Every unpaid claim is revenue your practice has already earned but hasn't received. <strong className="font-semibold text-foreground">HS Partners</strong> provides end-to-end <strong className="font-semibold text-foreground">medical billing services</strong> for physicians, group practices, clinics, and healthcare organizations. Our certified billers and coders manage the entire revenue cycle, from eligibility verification to final payment posting, so you can focus on patients while we focus on your cash flow.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
              Get Your Free Revenue Audit <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary">
              Talk to a Billing Expert
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-30 border-y border-border bg-card px-5 py-20 sm:py-28" aria-labelledby="what-is-billing-title">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase text-primary">The financial backbone</p>
            <h2 id="what-is-billing-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
              What Is <span className="text-electric">Medical Billing?</span>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              <strong className="font-semibold text-foreground">Medical billing</strong> is the process of translating healthcare services into insurance claims, submitting them to payers, following up on unpaid or denied claims, and collecting patient balances. Accurate coding, clean claim submission, and persistent follow-up decide whether you are paid in full, paid late, or not paid at all.
            </p>
            <p>
              Managing this in-house is expensive and complicated. Payer rules change constantly, coding updates arrive every year, and one small error can trigger a denial. Professional <strong className="font-semibold text-foreground">medical billing outsourcing</strong> gives you a dedicated team, proven workflows, and advanced technology without the overhead of hiring and training staff.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="billing-services-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">Full revenue cycle</p>
            <h2 id="billing-services-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              Our Medical Billing <span className="text-electric">Services</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">We cover the full revenue cycle, not just claim submission.</p>
          </div>
          <div className="grid grid-cols-1 gap-px border border-border/50 bg-border md:grid-cols-2 lg:grid-cols-3">
            {billingServices.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group relative bg-card p-8 transition-colors hover:bg-card/80 sm:p-10">
                  <span className="service-icon-badge static mb-7" aria-hidden="true">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="billing-process-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">How we work</p>
            <h2 id="billing-process-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              Our Medical Billing Process: <span className="text-electric">Step by Step</span>
            </h2>
          </div>
          <ol className="mt-16 grid gap-px border border-border/50 bg-border md:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.number} className="bg-card p-7 sm:p-8">
                <span className="font-display text-sm font-bold text-primary">{step.number}</span>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative z-30 bg-about px-5 py-24 sm:py-32" aria-labelledby="why-billing-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase text-primary">Why HS Partners</p>
              <h2 id="why-billing-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
                Why Practices Choose <span className="text-electric">HS Partners</span>
              </h2>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">No long lock-in. We earn your business every month.</p>
            </div>
            <div className="grid gap-px border border-border/50 bg-border sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="bg-card p-7">
                    <Icon className="size-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Results That Speak for Themselves</h3>
            <div className="mt-8 overflow-hidden border border-border">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Industry benchmarks versus HS Partners targets for medical billing performance</caption>
                <thead className="bg-card text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  <tr>
                    <th className="px-5 py-4">Metric</th>
                    <th className="px-5 py-4">Industry Average</th>
                    <th className="px-5 py-4 text-primary">Our Target for Your Practice</th>
                  </tr>
                </thead>
                <tbody>
                  {resultRows.map((row) => (
                    <tr key={row.metric} className="border-t border-border">
                      <td className="px-5 py-4 font-semibold text-foreground">{row.metric}</td>
                      <td className="px-5 py-4 text-muted-foreground">{row.average}</td>
                      <td className="px-5 py-4 font-bold text-foreground">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-6 text-muted-foreground">Targets are based on industry benchmarks and vary by specialty, payer mix, and practice size.</p>
          </div>
        </div>
      </section>

      <section id="specialties" className="relative z-30 border-t border-border bg-background px-5 py-24 sm:py-32" aria-labelledby="specialties-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">Specialty workflows</p>
            <h2 id="specialties-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              Medical Billing Services <span className="text-electric">by Specialty</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Different specialties have different coding rules, payer requirements, and denial patterns. We build specialty-specific workflows for:
            </p>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((specialty) => (
              <div key={specialty} className="flex items-center gap-3 border border-border bg-card px-5 py-4">
                <Stethoscope className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-display text-sm font-bold text-foreground">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="integrations-title">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">Works with your stack</p>
          <h2 id="integrations-title" className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
            EHR, PM Software, and Clearinghouse <span className="text-electric">Integrations</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            We work with the most widely used systems. If your system isn't listed, ask us. Chances are we already work with it.
          </p>
          <div className="mt-12 flex flex-wrap gap-3">
            {integrations.map((name) => (
              <span key={name} className="border border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="compliance-title">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Trust and compliance</p>
            <h2 id="compliance-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
              Security and Compliance You Can <span className="text-electric">Trust</span>
            </h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Protecting patient data is not optional. Our operations follow <strong className="font-semibold text-foreground">HIPAA</strong> requirements, with encrypted data transfer, role-based access, regular staff training, and signed Business Associate Agreements (BAA). Our coding practices follow current <strong className="font-semibold text-foreground">CMS, AMA, and payer guidelines</strong> to keep you audit-ready.
          </p>
        </div>
      </section>

      <section className="relative z-30 border-y border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="pricing-title">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">Clear pricing</p>
          <h2 id="pricing-title" className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
            How Much Do Medical Billing Services <span className="text-electric">Cost?</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            Most medical billing companies charge a <strong className="font-semibold text-foreground">percentage of collections</strong>, and the rate depends on specialty, claim volume, and service scope. Some offer flat-fee or per-claim pricing. At HS Partners, we offer <strong className="font-semibold text-foreground">hybrid pricing</strong> tailored to your practice, with everything clearly stated upfront.
          </p>
          <a href="#contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
            Request a Custom Quote <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="relative z-30 bg-about px-5 py-24 sm:py-32" aria-labelledby="get-started-title">
        <div className="mx-auto w-full max-w-7xl">
          <h2 id="get-started-title" className="font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
            Get Started in <span className="text-electric">3 Simple Steps</span>
          </h2>
          <ol className="mt-14 grid gap-px border border-border/50 bg-border md:grid-cols-3">
            {startSteps.map((step) => (
              <li key={step.number} className="bg-card p-8">
                <span className="font-display text-sm font-bold text-primary">{step.number}</span>
                <h3 className="mt-8 font-display text-2xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16 border border-border bg-card px-6 py-10 sm:px-10">
            <h3 className="font-display text-3xl font-black text-foreground">Ready to Stop Losing Revenue?</h3>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
                Schedule Your Free Billing Audit <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a href="tel:+14316683854" className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary">
                <Phone className="size-4" aria-hidden="true" /> +1 431 668 3854
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-30 overflow-hidden bg-card px-5 py-24 sm:py-32" aria-labelledby="billing-faq-title">
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Frequently asked</p>
            <h2 id="billing-faq-title" className="mt-5 font-display text-5xl font-black leading-none text-foreground sm:text-6xl">
              Questions about <span className="text-electric">medical billing.</span>
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">Need something more specific? Start a conversation and we’ll point you in the right direction.</p>
            <a href="mailto:hello@agenci.com" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary">
              <Mail className="size-4" aria-hidden="true" /> hello@agenci.com
            </a>
          </div>
          <div className="border-t border-border">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group border-b border-border py-1">
                <summary className="flex min-h-24 cursor-pointer list-none items-center gap-5 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg font-bold text-foreground sm:text-xl">{faq.question}</span>
                  <ChevronDown className="ml-auto size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 group-open:text-primary" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-8 pl-10 pr-8 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm defaultService="Medical Billing" />
      <SiteFooter />
    </main>
  );
}
