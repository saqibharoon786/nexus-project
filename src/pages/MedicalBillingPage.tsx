import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarCheck,
  ChevronDown,
  CircleDollarSign,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Headset,
  Layers3,
  Lock,
  Mail,
  Phone,
  PhoneIncoming,
  RefreshCcw,
  ShieldCheck,
  Stethoscope,
  Upload,
  UserRoundCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Seo } from "@/components/site/Seo";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const frontDeskOps: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Medical Assistant Support",
    description: "Remote medical assistants help your clinic stay organized — intake, follow-ups, and day-to-day clinical admin without adding in-office staff.",
    icon: Stethoscope,
  },
  {
    title: "Incoming Calls",
    description: "We answer, route, and document patient and payer calls so your front desk never loses a message during busy hours.",
    icon: PhoneIncoming,
  },
  {
    title: "EMR Documentation",
    description: "Notes, encounters, and chart updates are entered in your EMR so providers stay current without extra after-hours typing.",
    icon: FileText,
  },
  {
    title: "Patient Scheduling",
    description: "New visits, follow-ups, reschedules, and reminders are booked to your templates so the calendar stays full and accurate.",
    icon: CalendarCheck,
  },
  {
    title: "Faxes",
    description: "Inbound and outbound faxes are received, sorted, and filed to the right chart instead of sitting in a tray.",
    icon: FileCheck2,
  },
  {
    title: "Medical Records",
    description: "We request, release, and organize medical records with the documentation your team and payers actually need.",
    icon: ClipboardCheck,
  },
  {
    title: "Uploading Patient Charts",
    description: "Scans, labs, referrals, and outside records are uploaded into the patient chart so nothing is missing at the visit or at claim time.",
    icon: Upload,
  },
];

const billingCycle: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    number: "01",
    title: "Patient Info Verification",
    description: "Demographics, insurance cards, and contact details are verified before the claim is built so avoidable rejections never start.",
    icon: UserRoundCheck,
  },
  {
    number: "02",
    title: "Eligibility from Payor",
    description: "We check coverage, benefits, copays, and deductibles with the payor so you know what is billable before the visit closes.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Charge Entry",
    description: "Charges are entered from the encounter with the correct codes, modifiers, and units so the claim matches the visit.",
    icon: CircleDollarSign,
  },
  {
    number: "04",
    title: "Claim Submission",
    description: "Clean claims go out to the payor quickly, with edits caught before submission instead of after a denial.",
    icon: FileCheck2,
  },
  {
    number: "05",
    title: "Payment Posting",
    description: "ERAs and EOBs are posted accurately, underpayments are flagged, and the account stays reconciled.",
    icon: Wallet,
  },
  {
    number: "06",
    title: "Follow-Up and Denial Handling",
    description: "Unpaid and denied claims are worked, appealed, and tracked so aging does not sit untouched.",
    icon: RefreshCcw,
  },
  {
    number: "07",
    title: "Patient Statements and Patient Callings",
    description: "Clear statements go out, and patient-balance calls are handled professionally so collections stay respectful and consistent.",
    icon: Headset,
  },
  {
    number: "08",
    title: "Reporting",
    description: "You get transparent reporting on collections, denials, aging, and production so you always know where the money is.",
    icon: BarChart3,
  },
];

const reasons = [
  { title: "Front desk plus billing", description: "One team covers remote clinic operations and the full claim cycle, not just one isolated task.", icon: Layers3 },
  { title: "Works in your EMR", description: "Scheduling, charts, faxes, and charges stay inside the system you already use.", icon: FileText },
  { title: "Payor-ready claims", description: "Eligibility, verification, and charge entry happen before submission so denials drop.", icon: BadgeCheck },
  { title: "Patients still feel your brand", description: "Incoming calls, statements, and patient calling follow your scripts and tone.", icon: Phone },
  { title: "HIPAA-compliant operations", description: "Secure access, encrypted transfer, and role-based chart handling.", icon: Lock },
  { title: "Clear reporting", description: "You see what was scheduled, billed, paid, and still outstanding every month.", icon: BarChart3 },
];

const resultRows = [
  { metric: "Clean claim rate", average: "~90%", target: "95%+" },
  { metric: "Denial rate", average: "8–12%", target: "Under 5%" },
  { metric: "Days in A/R", average: "40–50 days", target: "30 days or less" },
  { metric: "Net collection rate", average: "90–93%", target: "95%+" },
];

const integrations = ["Epic", "Athenahealth", "eClinicalWorks", "NextGen", "Kareo/Tebra", "AdvancedMD", "Practice Fusion", "DrChrono", "CureMD"];

const startSteps = [
  { number: "01", title: "Share your workflow", description: "Tell us which front-desk tasks and billing steps you want covered first." },
  { number: "02", title: "Get an operations review", description: "We map calls, EMR, scheduling, eligibility, claims, and follow-up around your clinic." },
  { number: "03", title: "Go live", description: "Your remote desk and billing cycle start inside your existing EMR, usually within 7 days." },
];

const faqs = [
  {
    question: "What is included with HS Partners medical billing?",
    answer:
      "The billing cycle includes patient info verification, eligibility from the payor, charge entry, claim submission, payment posting, follow-up and denial handling, patient statements and patient calling, and reporting. You can also add remote front desk operations.",
  },
  {
    question: "What does remote front desk cover?",
    answer:
      "Remote front desk includes medical assistant support, incoming calls, EMR documentation, patient scheduling, faxes, medical records, and uploading patient charts.",
  },
  {
    question: "Do you work inside our EMR?",
    answer:
      "Yes. Scheduling, documentation, chart uploads, charge entry, and payment posting are done in your existing EMR or practice management system. You do not have to switch software.",
  },
  {
    question: "Can we start with only billing or only front desk?",
    answer:
      "Yes. Many practices start with the 8-step billing cycle, then add incoming calls, scheduling, or chart work. Others start with remote front desk and add billing once the workflow is stable.",
  },
  {
    question: "How do you handle denials?",
    answer:
      "Denied and unpaid claims are followed up, corrected, and appealed. We also feed denial reasons back into verification, eligibility, and charge entry so the same error is less likely to repeat.",
  },
  {
    question: "Who calls patients about balances?",
    answer:
      "Our team sends patient statements and makes patient-balance calls using your approved tone and scripts, so collections stay consistent without burdening your in-office staff.",
  },
  {
    question: "Are these services HIPAA compliant?",
    answer:
      "Yes. We follow HIPAA privacy and security requirements, use role-based EMR access, encrypt data in transfer, and can sign a Business Associate Agreement.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "After EMR access and a short workflow review, most clinics go live within about 7 days.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      name: "HS Partners",
      telephone: "+1-431-668-3854",
      email: "hello@agenci.com",
      areaServed: "US",
    },
    {
      "@type": "Service",
      name: "Medical Billing and Remote Front Desk",
      serviceType: "Remote front desk operations and medical billing",
      provider: { "@type": "Organization", name: "HS Partners" },
      description: "Remote front desk and medical billing: scheduling, EMR, eligibility, claims, payment posting, denials, patient statements, and reporting.",
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
        title="Medical Billing & Remote Front Desk | HS Partners"
        description="Remote front desk and medical billing from HS Partners: incoming calls, EMR, scheduling, eligibility, claims, payment posting, denials, patient statements, and reporting."
        keywords="medical billing services, remote front desk, patient scheduling, EMR documentation, eligibility verification, claim submission, payment posting, denial handling, patient statements"
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
          <p className="text-xs font-bold uppercase text-primary">Remote front desk + medical billing</p>
          <h1 id="billing-hero-title" className="mt-5 max-w-4xl font-display text-4xl font-black leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Front Desk Remote and Medical Billing That <span className="text-electric">Keep the Clinic Moving</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            HS Partners runs your <strong className="font-semibold text-foreground">remote front desk</strong> and the full <strong className="font-semibold text-foreground">medical billing cycle</strong> — from incoming calls and EMR charts to eligibility, claims, payment posting, denials, patient statements, and reporting.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#front-desk" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
              See Front Desk Ops <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#billing-cycle" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary">
              See Billing Cycle
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-30 border-y border-border bg-card px-5 py-16 sm:py-20">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          <a href="#front-desk" className="group border border-border bg-background p-8 transition-colors hover:border-primary/50">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">01 — Operations</p>
            <h2 className="mt-4 font-display text-3xl font-black text-foreground">Front Desk Remote</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">Medical assistant support, calls, EMR, scheduling, faxes, records, and chart uploads.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-foreground group-hover:text-primary">View operations <ArrowRight className="size-3.5" /></span>
          </a>
          <a href="#billing-cycle" className="group border border-border bg-background p-8 transition-colors hover:border-primary/50">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-primary">02 — Revenue</p>
            <h2 className="mt-4 font-display text-3xl font-black text-foreground">Medical Billing</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">Verification, eligibility, charge entry, claims, posting, denials, patient calling, and reporting.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-foreground group-hover:text-primary">View billing cycle <ArrowRight className="size-3.5" /></span>
          </a>
        </div>
      </section>

      <section id="front-desk" className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="front-desk-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">All operations</p>
            <h2 id="front-desk-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              Front Desk <span className="text-electric">Remote</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Your clinic still sees patients in person. The phones, charts, faxes, and schedule can run remotely — cleanly, and inside your EMR.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px border border-border/50 bg-border md:grid-cols-2 lg:grid-cols-3">
            {frontDeskOps.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group relative bg-card p-8 transition-colors hover:bg-card/80 sm:p-10">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="service-icon-badge static" aria-hidden="true">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-display text-xs font-bold text-primary">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="billing-cycle" className="relative z-30 border-t border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="billing-cycle-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">Related to medical billing</p>
            <h2 id="billing-cycle-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              Medical Billing <span className="text-electric">Cycle</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Eight steps from patient information to reporting. This is the work we actually do — nothing extra piled on.
            </p>
          </div>
          <ol className="mt-16 grid gap-px border border-border/50 bg-border md:grid-cols-2 xl:grid-cols-4">
            {billingCycle.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.number} className="relative bg-background p-7 sm:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-primary">{step.number}</span>
                    <Icon className="size-5 text-primary" strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 font-display text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="relative z-30 bg-about px-5 py-24 sm:py-32" aria-labelledby="why-billing-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase text-primary">Why HS Partners</p>
              <h2 id="why-billing-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
                One Team for the Desk and the <span className="text-electric">Claim</span>
              </h2>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">Front desk work and billing stay connected, so a missed eligibility check does not become a denial two weeks later.</p>
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
            <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">Results We Work Toward</h3>
            <div className="mt-8 overflow-x-auto border border-border">
              <table className="w-full min-w-[32rem] text-left text-sm">
                <caption className="sr-only">Industry benchmarks versus HS Partners billing targets</caption>
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

      <section className="relative z-30 border-t border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="integrations-title">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">Works with your EMR</p>
          <h2 id="integrations-title" className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
            Documentation, Scheduling, and Billing in <span className="text-electric">Your System</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            We work inside the EMR and practice tools you already use for charts, faxes, eligibility, and claims.
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
              Charts, Calls, and Claims You Can <span className="text-electric">Trust</span>
            </h2>
          </div>
          <p className="text-base leading-8 text-muted-foreground">
            Remote front desk and billing both touch protected health information. HS Partners follows <strong className="font-semibold text-foreground">HIPAA</strong> requirements, uses encrypted transfer, limits EMR access by role, and can sign a Business Associate Agreement (BAA).
          </p>
        </div>
      </section>

      <section className="relative z-30 border-y border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="pricing-title">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">Clear pricing</p>
          <h2 id="pricing-title" className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
            How Much Do These Services <span className="text-electric">Cost?</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            Billing is typically a <strong className="font-semibold text-foreground">percentage of collections</strong>. Remote front desk can be monthly or hybrid, depending on call volume and hours. HS Partners states the scope in writing — no surprise setup fees.
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
            <h3 className="font-display text-3xl font-black text-foreground">Ready for a Remote Desk and a Cleaner Claim Cycle?</h3>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
                Book a Workflow Review <ArrowRight className="size-4" aria-hidden="true" />
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
            <h2 id="billing-faq-title" className="mt-5 font-display text-4xl font-black leading-none text-foreground sm:text-6xl">
              Questions about <span className="text-electric">front desk and billing.</span>
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-muted-foreground">Need something more specific? Start a conversation and we’ll point you in the right direction.</p>
            <a href="mailto:hello@agenci.com" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary">
              <Mail className="size-4" aria-hidden="true" /> hello@agenci.com
            </a>
          </div>
          <div className="border-t border-border">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group border-b border-border py-1">
                <summary className="flex min-h-20 cursor-pointer list-none items-start gap-3 py-5 text-left sm:min-h-24 sm:items-center sm:gap-5 [&::-webkit-details-marker]:hidden">
                  <span className="mt-1 font-display text-xs font-bold text-primary sm:mt-0">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-base font-bold text-foreground sm:text-xl">{faq.question}</span>
                  <ChevronDown className="ml-auto mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 group-open:text-primary sm:mt-0" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-8 pl-8 pr-4 text-sm leading-7 text-muted-foreground sm:pl-10 sm:pr-8">{faq.answer}</p>
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
