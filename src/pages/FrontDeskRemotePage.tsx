import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  ClipboardCheck,
  Droplets,
  FileText,
  FlaskConical,
  FolderOpen,
  Headset,
  LayoutDashboard,
  Lock,
  Mail,
  Phone,
  PhoneIncoming,
  Quote,
  ShieldCheck,
  Star,
  Stethoscope,
  Upload,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { FrontDeskAgent } from "@/components/site/FrontDeskAgent";
import { Seo } from "@/components/site/Seo";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import labcorpImg from "@/assets/software-labcorp.png";
import acuityImg from "@/assets/software-acuity.png";
import evexiaImg from "@/assets/software-evexia.png";
import practiceFusionImg from "@/assets/software-practice-fusion.png";
import oomaImg from "@/assets/software-ooma.png";
import agentImg from "@/assets/front-desk-agent.jpg";

const operations: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Medical Assistant",
    description:
      "Remote medical assistants prepare the visit before the patient arrives — demographics, insurance cards, chief complaint, and the chart details your clinicians expect to see.",
    icon: Stethoscope,
  },
  {
    title: "Incoming Calls",
    description:
      "Agents answer in your practice name, route clinical questions to the right person, and log every message so nothing sits in a voicemail box.",
    icon: PhoneIncoming,
  },
  {
    title: "EMR Documentation",
    description:
      "Call notes, encounter updates, referrals, and chart comments are entered in your EMR while the visit is still fresh, not reconstructed at the end of the day.",
    icon: FileText,
  },
  {
    title: "Patient Scheduling",
    description:
      "New visits, follow-ups, and reschedules are booked to your templates, visit lengths, and provider rules so the calendar stays accurate.",
    icon: CalendarCheck,
  },
  {
    title: "Faxes",
    description:
      "Inbound and outbound faxes are received, matched to the patient, and filed to the chart instead of stacking up in a tray.",
    icon: ClipboardCheck,
  },
  {
    title: "Medical Record",
    description:
      "Record requests and releases are tracked, the right documents are pulled, and the request is closed with a clear status for your office.",
    icon: FolderOpen,
  },
  {
    title: "Uploading Patient Charts",
    description:
      "Labs, referrals, IDs, insurance cards, and outside records are scanned and uploaded into the patient chart before the appointment.",
    icon: Upload,
  },
];

const trustPoints = [
  { value: "Live", label: "Calls answered in your practice name" },
  { value: "Same day", label: "Faxes and charts filed to the record" },
  { value: "Your EMR", label: "Scheduling and notes stay in your system" },
  { value: "HIPAA", label: "Role-based access and a BAA when required" },
];

const roles: { title: string; owns: string; duties: string[] }[] = [
  {
    title: "Remote Medical Assistant",
    owns: "Visit readiness",
    duties: [
      "Confirm demographics, insurance, and the reason for the visit",
      "Flag missing history, medications, or consents before the provider opens the chart",
      "Escalate clinical questions to your in-office team — agents do not give medical advice",
    ],
  },
  {
    title: "Call Specialist",
    owns: "The phone line",
    duties: [
      "Greet callers with your approved script and hours",
      "Take messages with callback number, reason, and urgency",
      "Route urgent symptoms using the rules your clinic writes",
    ],
  },
  {
    title: "EMR Documentation Specialist",
    owns: "The chart note",
    duties: [
      "Enter call outcomes, referrals, and chart comments in the encounter",
      "Keep documentation in the fields your providers already use",
      "Hand off incomplete items with a named owner, not a vague inbox",
    ],
  },
  {
    title: "Scheduling Coordinator",
    owns: "The calendar",
    duties: [
      "Book the correct visit type, provider, and duration",
      "Reschedule cancellations and offer the next open slot",
      "Send the reminder details your patients already expect",
    ],
  },
  {
    title: "Records & Fax Coordinator",
    owns: "Paper that still arrives",
    duties: [
      "Index inbound faxes to the right patient the same day",
      "Send outbound faxes and confirm they went through",
      "Process medical-record requests with the documents you approve",
    ],
  },
];

const dayFlow = [
  { time: "Open", title: "Line and schedule check", detail: "Agents confirm who is in clinic, which templates are open, and which messages carried over from the night before." },
  { time: "Morning", title: "Live calls and bookings", detail: "Incoming calls are answered, new visits are placed, and same-day changes are written into the EMR as they happen." },
  { time: "Midday", title: "Charts, faxes, and labs", detail: "Faxes, outside records, and uploads are matched to charts so the afternoon visits are not missing documents." },
  { time: "Close", title: "Handoff your office can read", detail: "Open callbacks, pending records, and tomorrow’s gaps are listed for the in-office team before the desk signs off." },
];

const team = [
  { role: "Medical Assistant", focus: "Chart prep and visit readiness", coverage: "Clinic hours" },
  { role: "Incoming Calls", focus: "Greeting, routing, and message logs", coverage: "Live coverage" },
  { role: "EMR Documentation", focus: "Notes, referrals, and chart comments", coverage: "Same day" },
  { role: "Patient Scheduling", focus: "Templates, reschedules, reminders", coverage: "Your calendar" },
  { role: "Faxes & Records", focus: "Inbound, outbound, and releases", coverage: "Same-day filing" },
  { role: "Chart Uploads", focus: "Labs, IDs, referrals, outside records", coverage: "Before the visit" },
];

const software = [
  {
    name: "Labcorp",
    use: "Patient and provider portals for results, orders, and lab access.",
    image: labcorpImg,
    alt: "Labcorp logins and portals for patients and healthcare professionals",
  },
  {
    name: "Acuity Scheduling",
    use: "Week view for booking, moving, and checking patient appointments.",
    image: acuityImg,
    alt: "Acuity Scheduling week calendar with no appointments yet",
  },
  {
    name: "Evexia",
    use: "Order tests, view orders, lab results, and the test menu from one desk.",
    image: evexiaImg,
    alt: "Evexia diagnostics portal with order tests, lab results, and featured labs",
  },
  {
    name: "Practice Fusion",
    use: "Practice dashboard for schedule, charts, tasks, messages, and billing links.",
    image: practiceFusionImg,
    alt: "Practice Fusion practice dashboard with schedule, charts, and messages",
  },
  {
    name: "Ooma Office",
    use: "Incoming calls, contacts, voicemail, and messages for the front desk line.",
    image: oomaImg,
    alt: "Ooma Office contacts and call tools used for incoming clinic calls",
  },
];

const platforms: { name: string; icon: LucideIcon; badge: string }[] = [
  { name: "Labcorp", icon: FlaskConical, badge: "bg-[#1a56db] text-white" },
  { name: "Acuity Scheduling", icon: CalendarCheck, badge: "bg-[#111827] text-white" },
  { name: "Evexia", icon: Droplets, badge: "bg-[#0284c7] text-white" },
  { name: "Practice Fusion", icon: LayoutDashboard, badge: "bg-[#2563eb] text-white" },
  { name: "Ooma Office", icon: Phone, badge: "bg-[#0f2744] text-white" },
];

const testimonials = [
  {
    quote: "Our afternoon phones used to dump into voicemail. The remote desk answers in our practice name, and the message is already in the chart before I walk back to my office.",
    name: "Emily Hart",
    role: "Family physician",
    place: "Austin, Texas, USA",
    result: "Live answer coverage",
    rating: 5,
  },
  {
    quote: "Faxes and outside labs were a pile nobody owned. They now land on the right chart the same day. My coordinators finally stopped hunting for missing records.",
    name: "James O'Connor",
    role: "Practice manager",
    place: "Toronto, Canada",
    result: "Same-day chart filing",
    rating: 5,
  },
  {
    quote: "Scheduling follows our visit lengths. We stopped finding fifteen-minute slots booked as new-patient exams. The calendar finally matches how the clinic actually runs.",
    name: "Sophie Lang",
    role: "Clinic director",
    place: "Manchester, United Kingdom",
    result: "Templates held",
    rating: 5,
  },
  {
    quote: "Chart uploads used to happen after the patient was already in the room. Labs, referrals, and insurance cards are in the EMR before the visit starts.",
    name: "Michael Reyes",
    role: "Medical director",
    place: "Phoenix, Arizona, USA",
    result: "Charts ready on arrival",
    rating: 5,
  },
  {
    quote: "Incoming calls, EMR notes, and record requests feel like one desk, not three vendors. The handoff at close of day is something my in-office team can actually read.",
    name: "Claire Dubois",
    role: "Operations lead",
    place: "Montreal, Canada",
    result: "One desk, clear handoff",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What does Front Desk Remote include?",
    answer:
      "Medical assistant support, incoming calls, EMR documentation, patient scheduling, faxes, medical records, and uploading patient charts. You choose which of these run first.",
  },
  {
    question: "Do agents give clinical advice?",
    answer:
      "No. They follow your scripts for greeting, scheduling, and documentation. Clinical questions and urgent symptoms are routed the way your clinic defines.",
  },
  {
    question: "Will this work in our EMR and phone system?",
    answer:
      "Yes. The desk works inside the tools you already use — including practice EMRs, lab portals, scheduling calendars, and the phone system on your line.",
  },
  {
    question: "Is this HIPAA compliant?",
    answer:
      "Protected health information is handled under HIPAA. Access is limited by role, transfer is encrypted, and we can sign a Business Associate Agreement.",
  },
];

export function FrontDeskRemotePage() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [quote, setQuote] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);

  const goSlide = useCallback((next: number) => {
    setSlide((next + software.length) % software.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % software.length), 5000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const goQuote = useCallback((next: number) => {
    setQuote((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (reviewsPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setQuote((value) => (value + 1) % testimonials.length), 6500);
    return () => window.clearInterval(timer);
  }, [reviewsPaused]);

  const activeSoftware = software[slide]!;
  const activeQuote = testimonials[quote]!;

  return (
    <main className="relative bg-background">
      <Seo
        title="Front Desk Remote | Clinic Operations | HS Partners"
        description="Remote front desk for medical practices: medical assistant support, incoming calls, EMR documentation, patient scheduling, faxes, medical records, and chart uploads."
        keywords="front desk remote, virtual medical receptionist, remote medical assistant, EMR documentation, patient scheduling, medical records, fax management, chart upload"
      />
      <SiteHeader ctaHref="#contact" />

      <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:pb-20 sm:pt-20" aria-labelledby="front-desk-hero">
        <div className="hero-aura pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
            <a href="/" className="transition-colors hover:text-foreground">Home</a>
            <span aria-hidden="true">/</span>
            <span>Services</span>
            <span aria-hidden="true">/</span>
            <span className="text-primary">Front Desk Remote</span>
          </p>
          <p className="text-xs font-bold uppercase text-primary">All operations</p>
          <h1 id="front-desk-hero" className="mt-5 max-w-4xl font-display text-5xl font-black leading-[0.98] text-foreground sm:text-7xl">
            Front Desk <span className="text-electric">Remote</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Your patients still walk into the clinic. The phones, the schedule, the faxes, and the chart work run with a remote front desk that uses your scripts and your software.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#operations" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
              See all operations <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary">
              Talk to the desk team
            </a>
          </div>
        </div>
      </section>

      <section className="trust-band relative z-30 overflow-hidden border-y border-border bg-card" aria-label="How the remote front desk is run">
        <div className="trust-signal" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-2 md:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.label} className="flex min-h-32 flex-col items-center justify-center px-4 py-8 text-center md:min-h-40">
              <p className="font-display text-2xl font-black text-primary sm:text-3xl">{point.value}</p>
              <p className="mt-2 max-w-[12rem] text-xs leading-5 text-muted-foreground">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="operations" className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="operations-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">All operations</p>
            <h2 id="operations-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              What the desk <span className="text-electric">actually covers</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Seven operations, each with a clear job. You can start with calls and scheduling, then add charts, faxes, and records when the workflow is stable.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-px border border-border/50 bg-border md:grid-cols-2 lg:grid-cols-3">
            {operations.map((item, index) => {
              const Icon = item.icon;
              const wide = index === operations.length - 1;
              return (
                <article key={item.title} className={`bg-card p-8 sm:p-10 ${wide ? "md:col-span-2 lg:col-span-3" : ""}`}>
                  <div className={wide ? "md:flex md:items-start md:gap-10" : ""}>
                    <div className="mb-7 flex items-center justify-between md:mb-0">
                      <span className="service-icon-badge static" aria-hidden="true">
                        <Icon className="size-5" strokeWidth={1.6} />
                      </span>
                      <span className={`font-display text-xs font-bold text-primary ${wide ? "md:hidden" : ""}`}>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="md:flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                        {wide ? <span className="hidden font-display text-xs font-bold text-primary md:inline">{String(index + 1).padStart(2, "0")}</span> : null}
                      </div>
                      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-about px-5 py-24 sm:py-32" aria-labelledby="experience-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">Experience</p>
            <h2 id="experience-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              Agent duties <span className="text-electric">and roles</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              A remote front desk is not one person answering a shared inbox. Each role owns a slice of the day, and the handoff is written down before the clinic closes.
            </p>
          </div>

          <ol className="mt-14 grid gap-px border border-border/50 bg-border md:grid-cols-2 xl:grid-cols-4">
            {dayFlow.map((step) => (
              <li key={step.time} className="bg-card p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{step.time}</p>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.detail}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-px border border-border/50 bg-border lg:grid-cols-2">
            {roles.map((role) => (
              <article key={role.title} className="bg-background p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold text-foreground">{role.title}</h3>
                  <span className="rounded-full border border-primary/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{role.owns}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {role.duties.map((duty) => (
                    <li key={duty} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <Headset className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {duty}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-about px-5 py-16 sm:py-20" aria-labelledby="agent-spotlight-title">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
          <figure className="w-36 shrink-0 sm:w-44">
            <img
              src={agentImg}
              alt="Nadia Rahman, front desk lead"
              width={768}
              height={1024}
              className="aspect-[3/4] w-full rounded-2xl object-cover object-top shadow-xl"
            />
            <figcaption className="mt-3 flex flex-col items-center gap-1">
              <span className="inline-flex items-center gap-0.5 text-primary" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3.5 fill-current" aria-hidden="true" />
                ))}
              </span>
              <span className="text-xs font-bold tracking-wide text-foreground">5.0</span>
            </figcaption>
          </figure>
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold uppercase text-primary">Your front desk lead</p>
            <h2 id="agent-spotlight-title" className="mt-3 font-display text-2xl font-black leading-tight text-foreground sm:text-3xl">
              Nadia <span className="text-electric">Rahman</span>
            </h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Front desk lead</p>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Nadia is the person clinics hear first. She keeps incoming calls, the schedule, EMR notes, faxes, and chart uploads moving in your practice name — then hands the day back with a list your office can actually read.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Clinics rate the desk she runs five stars. Ask her anything from the chat, or send the enquiry form if you want this coverage on your line.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="team-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">The people on your line</p>
            <h2 id="team-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              Meet our current <span className="text-electric">front desk team</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Coverage is split by the work, not by a rotating queue. These are the seats that stay on your clinic — calls, charts, schedule, faxes, and uploads.
            </p>
          </div>
          <div className="mt-14 grid gap-px border border-border/50 bg-border sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.role} className="bg-card p-8">
                <div className="flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-secondary-foreground" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">{member.role}</h3>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{member.coverage}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-muted-foreground">{member.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative z-30 border-y border-border bg-card px-5 py-24 sm:py-32"
        id="software"
        aria-labelledby="software-title"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase text-primary">Software the desk already uses</p>
              <h2 id="software-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
                Inside the tools <span className="text-electric">your clinic runs</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => goSlide(slide - 1)} aria-label="Previous software" className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary">
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => goSlide(slide + 1)} aria-label="Next software" className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary">
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="font-display text-3xl font-black text-foreground">{activeSoftware.name}</p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">{activeSoftware.use}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {String(slide + 1).padStart(2, "0")} / {String(software.length).padStart(2, "0")}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2.5 rounded-full bg-primary/70" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-muted-foreground/40" aria-hidden="true" />
                <span className="size-2.5 rounded-full bg-muted-foreground/25" aria-hidden="true" />
                <span className="ml-3 truncate text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{activeSoftware.name}</span>
              </div>
              <img
                key={activeSoftware.name}
                src={activeSoftware.image}
                alt={activeSoftware.alt}
                className="h-[18rem] w-full bg-white object-contain object-top sm:h-[26rem]"
              />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {software.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => goSlide(index)}
                aria-label={`Show ${item.name}`}
                aria-current={index === slide ? "true" : undefined}
                className={`overflow-hidden rounded-xl border bg-background text-left transition-colors ${index === slide ? "border-primary" : "border-border hover:border-primary/50"}`}
              >
                <img src={item.image} alt="" className="h-16 w-full bg-white object-cover object-top" />
                <span className="block px-3 py-2 text-[11px] font-bold text-foreground">{item.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="mx-auto max-w-3xl text-center font-display text-3xl font-black leading-[1.15] text-foreground sm:text-4xl">
              Platforms our Remote Front Desk Operations Specialists are <span className="text-electric">currently using</span>
            </h3>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-[#071633] px-4 py-10 sm:px-8 sm:py-12">
            <div className="marquee" aria-hidden="true">
              <div className="marquee-track items-stretch">
                {[...platforms, ...platforms].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={`${item.name}-${index}`}
                      className="flex h-52 w-60 shrink-0 flex-col items-center justify-center rounded-2xl bg-white px-6 text-center shadow-lg"
                    >
                      <span className={`flex size-14 items-center justify-center rounded-2xl ${item.badge}`} aria-hidden="true">
                        <Icon className="size-7" strokeWidth={1.7} />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-bold text-slate-900">{item.name}</h3>
                    </article>
                  );
                })}
              </div>
            </div>
            <ul className="sr-only">
              {platforms.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative z-30 bg-background px-5 py-24 sm:py-32"
        aria-labelledby="desk-testimonials-title"
        onMouseEnter={() => setReviewsPaused(true)}
        onMouseLeave={() => setReviewsPaused(false)}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-primary">5.0 from clinics abroad</p>
              <h2 id="desk-testimonials-title" className="mt-5 font-display text-4xl font-black leading-none text-foreground sm:text-6xl">
                Five-star reviews from <span className="text-electric">the front desk.</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => goQuote(quote - 1)} aria-label="Previous review" className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary">
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => goQuote(quote + 1)} aria-label="Next review" className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary">
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-14">
            <Quote className="absolute right-6 top-6 size-12 text-primary/15" aria-hidden="true" />
            <div key={activeQuote.name} className="testimonial-slide relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-primary" aria-label={`${activeQuote.rating} out of 5 stars`}>
                  {Array.from({ length: activeQuote.rating }).map((_, star) => (
                    <Star key={star} className="size-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">{activeQuote.rating}.0</span>
              </div>
              <blockquote className="mt-7 max-w-3xl font-display text-xl font-semibold leading-[1.35] text-foreground sm:text-3xl">
                “{activeQuote.quote}”
              </blockquote>
              <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-border pt-7">
                <span className="flex size-12 items-center justify-center rounded-full bg-secondary font-display text-sm font-bold text-secondary-foreground" aria-hidden="true">
                  {activeQuote.name.split(" ").map((part) => part[0]).join("")}
                </span>
                <div>
                  <p className="font-display text-base font-bold text-foreground">{activeQuote.name}</p>
                  <p className="text-xs text-muted-foreground">{activeQuote.role} · {activeQuote.place}</p>
                </div>
                <p className="rounded-full border border-primary/40 px-4 py-2 text-xs font-bold text-primary sm:ml-auto">{activeQuote.result}</p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => goQuote(index)}
                aria-label={`Show review from ${item.name}`}
                aria-current={index === quote ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${index === quote ? "w-8 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="desk-trust-title">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Trust</p>
            <h2 id="desk-trust-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
              Calls and charts you can <span className="text-electric">hand over</span>
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Front desk work touches protected health information. Agents use role-based access, follow your scripts, and document in the system you already trust. HS Partners can sign a <strong className="font-semibold text-foreground">Business Associate Agreement</strong>.
            </p>
            <p className="flex items-start gap-3">
              <Lock className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              Clinical decisions stay with your providers. The remote desk schedules, documents, files, and uploads.
            </p>
            <p className="flex items-start gap-3">
              <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              Urgent symptoms follow the escalation rules you write. Agents do not diagnose or advise.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="desk-faq-title">
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Frequently asked</p>
            <h2 id="desk-faq-title" className="mt-5 font-display text-4xl font-black leading-none text-foreground sm:text-6xl">
              Questions about the <span className="text-electric">remote desk.</span>
            </h2>
            <a href="mailto:hello@agenci.com" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary">
              <Mail className="size-4" aria-hidden="true" /> hello@agenci.com
            </a>
            <a href="tel:+14316683854" className="mt-4 flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary">
              <Phone className="size-4" aria-hidden="true" /> +1 431 668 3854
            </a>
          </div>
          <div className="border-t border-border">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group border-b border-border py-1">
                <summary className="flex min-h-20 cursor-pointer list-none items-start gap-3 py-5 text-left sm:items-center sm:gap-5 [&::-webkit-details-marker]:hidden">
                  <span className="mt-1 font-display text-xs font-bold text-primary sm:mt-0">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-display text-base font-bold text-foreground sm:text-xl">{faq.question}</span>
                  <ChevronDown className="ml-auto mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 group-open:text-primary sm:mt-0" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-8 pl-8 pr-4 text-sm leading-7 text-muted-foreground sm:pl-10">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm defaultService="Front Desk Remote" />
      <SiteFooter />
      <FrontDeskAgent />
    </main>
  );
}
