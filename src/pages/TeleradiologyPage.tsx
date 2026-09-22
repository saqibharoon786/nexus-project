import {
  Activity,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  HeartPulse,
  Layers3,
  Lock,
  Mail,
  Monitor,
  Phone,
  Radio,
  ShieldCheck,
  Stethoscope,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { RadiologistAgent } from "@/components/site/RadiologistAgent";
import { Seo } from "@/components/site/Seo";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const pillars: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Optimized reporting workflow",
    description: "Studies can be read off-site so scanners stay free for new exams while reports still move on an agreed turnaround.",
    icon: Workflow,
  },
  {
    title: "Guideline-aligned reports",
    description: "Structured templates keep ultrasound, X-ray, and color Doppler language consistent with clinical standards.",
    icon: FileText,
  },
  {
    title: "Read from anywhere",
    description: "Credentialed radiologists issue reports wherever they are covering, including after-hours and multi-site overflow.",
    icon: Monitor,
  },
  {
    title: "Quiet PACS / RIS handoff",
    description: "Encrypted image flow and report return are designed to sit inside the systems your department already uses.",
    icon: Activity,
  },
];

const modalities = [
  {
    title: "Ultrasound reporting",
    description: "Abdomen, pelvis, obstetric, renal, thyroid, breast, scrotal, and musculoskeletal studies with organ-by-organ structure.",
    icon: HeartPulse,
  },
  {
    title: "X-ray reporting",
    description: "General radiography including chest, musculoskeletal, abdomen, and trauma lists for routine, overflow, and stat cover.",
    icon: Radio,
  },
  {
    title: "Color Doppler reporting",
    description: "Vascular studies such as DVT, carotid duplex, and arterial or venous limb mapping with clear hemodynamic impressions.",
    icon: Activity,
  },
];

const studies = [
  "Abdominal ultrasound — liver, gallbladder, pancreas, spleen, and kidneys",
  "Pelvic ultrasound — transabdominal and transvaginal female studies, prostate in males",
  "Obstetric ultrasound — dating, nuchal, morphology, and growth",
  "Renal and urinary tract ultrasound",
  "Thyroid, neck, breast, and scrotal ultrasound",
  "Musculoskeletal ultrasound — shoulder, knee, ankle, wrist, and soft tissue",
  "Color Doppler — DVT, carotid, and limb arterial / venous studies",
  "General X-ray — chest, bones, joints, abdomen, and trauma series",
];

const painPoints = [
  "Reporting queues grow faster than the in-house panel can clear them.",
  "Routine and time-sensitive studies miss the turnaround you promised referrers.",
  "Leave, recruitment gaps, or after-hours cover leave lists uncovered.",
  "Multi-site groups cannot shift ultrasound, X-ray, or Doppler workload between locations.",
  "Leaders need extra reporting capacity without adding a full-time headcount.",
];

const capabilities = [
  "24/7 remote reporting coverage across time zones",
  "Encrypted image transfer and confidentiality protocols",
  "Ultrasound, X-ray, and color Doppler on one reporting panel",
  "Priority worklists for urgent and critical-care cases",
  "Handoff into hospital PACS and RIS workflows",
  "Primary reads, overflow, backlog clearance, and leave cover",
];

const workflow = [
  { number: "01", title: "Study acquired on site", description: "Your sonographers and radiographers complete the ultrasound, X-ray, or Doppler examination locally." },
  { number: "02", title: "Encrypted transfer", description: "Images and clinical notes move over a secure channel into the reporting environment." },
  { number: "03", title: "Worklist and quality check", description: "Demographics, prior studies, and protocol completeness are checked before the case is assigned." },
  { number: "04", title: "Specialist interpretation", description: "A radiologist / sonologist issues a structured report tailored to the referrer and the clinical question." },
  { number: "05", title: "Report returned", description: "The authorised report lands back in PACS/RIS or your agreed delivery path so care can continue." },
];

const audiences = [
  "Independent imaging centres needing overflow reads",
  "Radiology groups covering several sites",
  "Hospital departments with variable ultrasound and X-ray volume",
  "Health services managing after-hours and weekend lists",
  "Regional providers that need consistent reporting continuity",
  "Clinics referring color Doppler and general ultrasound studies",
];

const faqs = [
  {
    question: "What does this teleradiology service include?",
    answer:
      "HS Partners provides remote reporting for ultrasound, X-ray, and color Doppler. That can mean primary reads, overflow support, backlog clearance, after-hours cover, and leave cover — without replacing your local acquisition team.",
  },
  {
    question: "Do you perform the scans?",
    answer:
      "No. Images are acquired by your credentialed sonographers and radiographers. Our radiologists interpret studies remotely and return structured reports.",
  },
  {
    question: "How fast are reports returned?",
    answer:
      "Routine studies follow an agreed window, typically within 48 hours. Urgent and time-sensitive cases can be prioritised for same-day reporting.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Most clients use a per-study model that reflects volume and modality mix. We quote after we understand your ultrasound, X-ray, and Doppler caseload.",
  },
  {
    question: "Can you connect to our PACS and RIS?",
    answer:
      "Yes. The reporting path is designed to sit alongside existing PACS/RIS tools so your team does not change how studies are performed.",
  },
  {
    question: "Are sample reports on this page real patients?",
    answer:
      "No. The two ultrasound abdomen examples are anonymised teaching formats that show report structure. They are not live records and must not be used as clinical advice.",
  },
  {
    question: "Is image transfer secure?",
    answer:
      "Studies move over encrypted channels with role-limited access. We can operate under a BAA and the confidentiality rules your facility requires.",
  },
  {
    question: "Who can start this service?",
    answer:
      "Imaging centres, hospital radiology departments, multi-site groups, and referring clinics that need dependable remote reads for ultrasound, X-ray, and color Doppler.",
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
    },
    {
      "@type": "Service",
      name: "Teleradiology & Remote Radiology — Ultrasound, X-Ray & Color Doppler Reporting",
      serviceType: "Remote ultrasound, X-ray, and color Doppler reporting",
      provider: { "@type": "Organization", name: "HS Partners" },
      description:
        "Remote radiology reporting for ultrasound, X-ray, and color Doppler with structured reports, encrypted transfer, and PACS/RIS handoff.",
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

type SampleReport = {
  id: string;
  label: string;
  exam: string;
  patient: { name: string; age: string; reg: string; physician: string; date: string };
  body: { heading: string; text: string }[];
  impression: string[];
};

const reports: SampleReport[] = [
  {
    id: "unremarkable",
    label: "Study A — Unremarkable abdomen",
    exam: "ULTRASOUND ABDOMEN",
    patient: { name: "ABC", age: "XX Yrs / M", reg: "MR-09031", physician: "Self", date: "01 – 01 – 2026" },
    body: [
      {
        heading: "Liver",
        text: "Contours are smooth and sharp with a glistening reflective surface. Size is normal in CC span measuring 14.5 cm. Parenchymal echogenicity is normal. Echotexture is smooth and fine. No scarring, nodulation, or mass seen. Peri-portal echoes are attenuated. Intrahepatic biliary ducts are normal. PV is normal in caliber.",
      },
      {
        heading: "Gallbladder",
        text: "Normal in outline with smooth walls measuring 3 mm. No calculus, mass, or other lesion identified in the lumen. CBD is normal. No peri-cholecystic edema or fluid seen.",
      },
      { heading: "Pancreas", text: "Head and visible portion of the body appear unremarkable." },
      { heading: "Spleen", text: "Normal in size (10.3 x 4.1 cm) and echotexture. No focal lesion seen." },
      {
        heading: "Right kidney",
        text: "Normal in size, shape, and echotexture. Measures 10.1 x 4.3 cm with parenchymal thickness of 1.5 cm. Contours are smooth and sharp. Cortical thickness and echogenicity are normal. No solid or cystic mass. Pelvicalyceal system is normal. No calculus or obstruction. Proximal ureter is not dilated. Perirenal areas are normal.",
      },
      {
        heading: "Left kidney",
        text: "Normal in size, shape, and echotexture. Measures 10.3 x 4.5 cm with parenchymal thickness of 1.7 cm. Contours are smooth and sharp. Cortical thickness and echogenicity are normal. No solid or cystic mass. Pelvicalyceal system is normal. No calculus or obstruction. Proximal ureter is not dilated. Perirenal areas are normal.",
      },
      {
        heading: "Urinary bladder",
        text: "Well distended with normal outline. Walls are normal in thickness. No calculus, mass, or other lesion seen.",
      },
      {
        heading: "Other findings",
        text: "Stomach and bowel loops are distended with gas shadows. No free fluid is seen in abdomino-pelvic spaces.",
      },
    ],
    impression: ["Unremarkable study."],
  },
  {
    id: "abdomen-pelvis",
    label: "Study B — Abdomen / pelvis findings",
    exam: "ULTRASOUND ABDOMEN / PELVIS",
    patient: { name: "Mrs XYZ", age: "35 Yrs / F", reg: "MR0110-03", physician: "Self", date: "01 – 01 – 2026" },
    body: [
      {
        heading: "Liver",
        text: "Measures 17.9 cm approx in cranio-caudal length and shows moderately increased parenchymal echogenicity. Echotexture is smooth and unremarkable. No focal lesion or dilated intrahepatic biliary channels. Right dome of diaphragm moves freely. Portal vein caliber 9 mm and is clear.",
      },
      {
        heading: "Gallbladder",
        text: "Moderately distended with normal outline. Wall thickness is normal. No calculus, polyp, or other lesion. No fluid collection around it. CBD is normal.",
      },
      { heading: "Pancreas", text: "Obscured by exuberant gas shadows." },
      { heading: "Spleen", text: "Normal in size (9.9 cm bipolar length) and echotexture." },
      {
        heading: "Right kidney",
        text: "Normal in size, shape, and echotexture. Measures 11.7 x 4.9 cm with parenchymal thickness of 1.5 cm. Cortical thickness and echogenicity appear unremarkable. CM outline is clear. Pelvicalyceal system is mildly dilated. No calculus, mass, or obstruction. Ureter is not dilated.",
      },
      {
        heading: "Left kidney",
        text: "Normal in size, shape, and echotexture. Measures 12.1 x 5.3 cm with parenchymal thickness of 1.7 cm. Cortical thickness and echogenicity appear unremarkable. CM outline is clear. Pelvicalyceal system is moderately dilated. A tiny echogenic focus of 4.7 mm in the mid-pole region appears related to a renal papilla. No solid or cystic lesion. Ureter is not dilated.",
      },
      {
        heading: "Urinary bladder",
        text: "Moderately distended with smooth wall thickness and pre-void volume of 235 ml approx. No focal mass, trabeculation / diverticulation, or calculus.",
      },
      {
        heading: "Uterus",
        text: "Anteverted and bulky measuring 8.1 x 4.7 x 5.3 cm (L x AP x trans). Myometrium shows homogenous echotexture. No mass. Endometrial stripe is 3 mm. No distortion of the endometrial echo. No free fluid, debris, or mass within or around the endometrial cavity.",
      },
      {
        heading: "Ovaries",
        text: "Right ovary volume 8.5 ml with a few small cysts of less than 5 mm. Left ovary volume 11.1 ml with a fairly large anechoic cyst of 5.1 x 4.3 cm. Postero-lateral wall of the cyst is slightly thick (5 mm) uniformly; no septae, debris, or calcification. Ovarian parenchyma appears compressed peripherally.",
      },
      {
        heading: "Others",
        text: "Stomach and bowel loops are distended with gas shadows. No free fluid in abdomino-pelvic spaces or pouch of Douglas.",
      },
    ],
    impression: [
      "Diffuse hepatic change — fatty liver (Grade-I) with hepatomegaly.",
      "PV, intra- and extra-hepatic biliary channels are normal.",
      "Hydronephrosis bilateral — Grade-I (VUR / UTI to be considered clinically).",
      "Left ovarian cyst (appears simple; needs follow-up). PCOS to be excluded by follow-up and hormonal assay.",
    ],
  },
];

function SampleReportCard({ report }: { report: SampleReport }) {
  return (
    <article className="overflow-hidden border border-border bg-card">
      <div className="border-b border-border bg-about px-5 py-5 sm:px-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">Patient details</p>
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <p><span className="text-muted-foreground">Name</span> · <strong className="text-foreground">{report.patient.name}</strong></p>
          <p><span className="text-muted-foreground">Age / Gender</span> · <strong className="text-foreground">{report.patient.age}</strong></p>
          <p><span className="text-muted-foreground">Reg No</span> · <strong className="text-foreground">{report.patient.reg}</strong></p>
          <p><span className="text-muted-foreground">Att. physician</span> · <strong className="text-foreground">{report.patient.physician}</strong></p>
          <p className="sm:col-span-2"><span className="text-muted-foreground">Report date</span> · <strong className="text-foreground">{report.patient.date}</strong></p>
        </div>
      </div>
      <div className="px-5 py-8 sm:px-8">
        <h3 className="font-display text-xl font-black tracking-[0.08em] text-foreground">{report.exam}</h3>
        <div className="mt-6 space-y-5">
          {report.body.map((section) => (
            <div key={section.heading}>
              <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{section.heading}</h4>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{section.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Impression</h4>
          <ul className="mt-3 space-y-2">
            {report.impression.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-7 text-foreground">
                <span aria-hidden="true">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 grid gap-8 border-t border-dashed border-border pt-8 sm:grid-cols-2">
          <div>
            <p className="font-display text-lg font-bold text-foreground">Dr XYZ</p>
            <p className="text-xs text-muted-foreground">MBBS, DMRD</p>
            <p className="text-xs text-muted-foreground">Radiologist / Sonologist</p>
          </div>
          <div className="sm:text-right">
            <p className="font-display text-lg font-bold text-foreground">Dr ABS</p>
            <p className="text-xs text-muted-foreground">MBBS, MCPS, FCPS</p>
            <p className="text-xs text-muted-foreground">Radiologist / Sonologist</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export function TeleradiologyPage() {
  const [activeReport, setActiveReport] = useState(reports[0].id);
  const current = reports.find((report) => report.id === activeReport) ?? reports[0];

  return (
    <main className="relative bg-background">
      <Seo
        title="Teleradiology & Remote Radiology | Ultrasound, X-Ray & Color Doppler | HS Partners"
        description="Remote radiology reporting for ultrasound, X-ray, and color Doppler. Structured reports, encrypted transfer, PACS/RIS handoff, and overflow or after-hours cover from HS Partners."
        keywords="teleradiology, remote radiology reporting, ultrasound reporting, x-ray reporting, color doppler reporting, off-site radiology, PACS RIS reporting"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader ctaHref="#contact" />

      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:pb-28 sm:pt-20" aria-labelledby="telerad-hero-title">
        <div className="hero-aura pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Services</span>
            <span aria-hidden="true">/</span>
            <span className="text-primary">Teleradiology</span>
          </p>
          <p className="text-xs font-bold uppercase text-primary">Ultrasound · X-Ray · Color Doppler reporting</p>
          <h1 id="telerad-hero-title" className="mt-5 max-w-5xl font-display text-4xl font-black leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Teleradiology &amp; <span className="text-electric">Remote Radiology</span>
          </h1>
          <p className="mt-4 max-w-3xl font-display text-lg font-bold text-foreground sm:text-2xl">
            Ultrasound, X-Ray &amp; Color Doppler Reporting
          </p>
          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            When in-house reads fall behind, HS Partners supplies a remote radiology panel for ultrasound, general X-ray, and color Doppler. Reports are structured, clinically useful, and delivered back into the workflow your referrers already trust.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#workflow" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
              See reporting workflow <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#sample-reports" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary">
              View sample reports
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-30 border-y border-border bg-card px-5 py-16 sm:py-20" aria-labelledby="telerad-pillars-title">
        <div className="mx-auto w-full max-w-7xl">
          <h2 id="telerad-pillars-title" className="sr-only">How remote reporting supports your imaging list</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title}>
                  <span className="service-icon-badge static mb-6" aria-hidden="true">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="telerad-about-title">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Off-site reads, on-site care</p>
            <h2 id="telerad-about-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
              Remote reporting that keeps <span className="text-electric">lists moving</span>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              HS Partners provides accurate remote interpretation for clinics, imaging providers, and hospital groups that need extra radiology capacity. We cover a wide ultrasound list, general X-ray, and color Doppler so one reporting partner can absorb mixed caseloads.
            </p>
            <p>
              Every report is written for the clinical question and the referring clinician — not a generic dump of measurements. Quality, turnaround, and data security sit inside your existing imaging rhythm rather than beside it.
            </p>
            <p>
              Off-site reporting is useful when demand spikes, staff take leave, or one site in a network is busier than another. The aim is continuity: scanners keep scanning, referrers keep receiving clear reports, and you do not have to hire a permanent panel for a temporary queue.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="telerad-modalities-title">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-bold uppercase text-primary">One service, three modalities</p>
          <h2 id="telerad-modalities-title" className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
            Ultrasound, X-Ray &amp; <span className="text-electric">Color Doppler</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            Teleradiology &amp; Remote Radiology is the full service name. Acquisition stays with your team; interpretation and structured reporting sit with our radiologists.
          </p>
          <div className="mt-14 grid gap-px border border-border/50 bg-border md:grid-cols-3">
            {modalities.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-card p-8 sm:p-10">
                  <span className="service-icon-badge static mb-7" aria-hidden="true">
                    <Icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {studies.map((study) => (
              <li key={study} className="flex items-start gap-3 border border-border bg-background px-4 py-3 text-sm leading-6 text-foreground">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {study}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="workflow" className="relative z-30 bg-about px-5 py-24 sm:py-32" aria-labelledby="telerad-workflow-title">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-bold uppercase text-primary">Reporting pathway</p>
          <h2 id="telerad-workflow-title" className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
            From scanner to signed <span className="text-electric">report</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            A five-stage path so ultrasound, X-ray, and Doppler studies do not stall between acquisition and the referring clinician.
          </p>

          <ol className="mt-14 hidden lg:grid lg:grid-cols-5 lg:gap-4">
            {workflow.map((step, index) => (
              <li key={step.number} className="relative">
                {index < workflow.length - 1 && (
                  <span className="pointer-events-none absolute left-[calc(50%+1.6rem)] top-6 h-px w-[calc(100%-1.2rem)] bg-primary/40" aria-hidden="true" />
                )}
                <div className="flex size-12 items-center justify-center rounded-full border border-primary bg-card font-display text-sm font-bold text-primary">
                  {step.number}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>

          <ol className="mt-12 space-y-4 lg:hidden">
            {workflow.map((step) => (
              <li key={step.number} className="flex gap-4 border border-border bg-card p-5">
                <span className="font-display text-sm font-bold text-primary">{step.number}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative z-30 border-y border-border bg-background px-5 py-24 sm:py-32" aria-labelledby="telerad-pain-title">
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Why centres add remote reads</p>
            <h2 id="telerad-pain-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
              Pressure we take off <span className="text-electric">your panel</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {painPoints.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <Clock3 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase text-primary">Core capabilities</p>
            <h3 className="mt-5 font-display text-3xl font-black text-foreground">Built for high-demand diagnostic lists</h3>
            <ul className="mt-8 space-y-3">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-3 border border-border bg-card px-4 py-3 text-sm leading-6 text-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="sample-reports" className="relative z-30 bg-card px-5 py-24 sm:py-32" aria-labelledby="telerad-reports-title">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">Demonstration output</p>
          <h2 id="telerad-reports-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
            Sample structured <span className="text-electric">reports</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            Anonymised teaching examples that show how an ultrasound abdomen (and abdomen/pelvis) report is organised. These are not live patient records.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {reports.map((report) => (
              <button
                key={report.id}
                type="button"
                onClick={() => setActiveReport(report.id)}
                className={`rounded-lg border px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors ${
                  activeReport === report.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {report.label}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <SampleReportCard report={current} />
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-about px-5 py-24 sm:py-32" aria-labelledby="telerad-why-title">
        <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Why HS Partners</p>
            <h2 id="telerad-why-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
              A reporting partner, <span className="text-electric">not a black box</span>
            </h2>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              Your acquisition team stays local. We absorb overflow, nights, and mixed-modality lists with a named radiology contact.
            </p>
          </div>
          <div className="grid gap-px border border-border/50 bg-border sm:grid-cols-2">
            {[
              { title: "Teleradiology technology", description: "Secure, timely image movement designed to sit beside RIS and PACS rather than replace them.", icon: Layers3 },
              { title: "Quality review", description: "Peer review and template discipline so report language stays consistent across sites.", icon: ShieldCheck },
              { title: "Experienced radiologists", description: "Including consultant sonologists such as Dr. Amina Shah, MBBS, FCPS-I, with 35 years in diagnostic imaging.", icon: Stethoscope },
              { title: "Direct clinical discussion", description: "Referring clinicians and technologists can discuss cases instead of chasing an anonymous inbox.", icon: BadgeCheck },
              { title: "Encrypted handling", description: "Role-limited access and encrypted transfer for imaging and report text.", icon: Lock },
              { title: "Flexible coverage", description: "Overflow, backlog, leave, and after-hours — without a permanent local hire for a temporary spike.", icon: Clock3 },
            ].map((reason) => {
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
      </section>

      <section className="relative z-30 border-t border-border bg-background px-5 py-24 sm:py-32" aria-labelledby="telerad-audience-title">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-bold uppercase text-primary">Who we report for</p>
          <h2 id="telerad-audience-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
            Built for imaging <span className="text-electric">operations</span>
          </h2>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((item) => (
              <div key={item} className="flex items-center gap-3 border border-border bg-card px-5 py-4">
                <Stethoscope className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-display text-sm font-bold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 border-y border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="telerad-pricing-title">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">Clear pricing</p>
          <h2 id="telerad-pricing-title" className="mt-5 max-w-3xl font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
            Per-study reporting that scales with <span className="text-electric">your volume</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            Fees usually follow study volume and modality mix. Overflow, backlog, and after-hours cover are quoted so you are not paying a full-time panel for a part-time queue.
          </p>
          <a href="#contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
            Request a reporting quote <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="relative z-30 overflow-hidden bg-background px-5 py-24 sm:py-32" aria-labelledby="telerad-faq-title">
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Frequently asked</p>
            <h2 id="telerad-faq-title" className="mt-5 font-display text-4xl font-black leading-none text-foreground sm:text-6xl">
              Questions about <span className="text-electric">remote radiology.</span>
            </h2>
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

      <section className="relative z-30 border-t border-border bg-card px-5 py-16 sm:py-20" aria-label="Related services">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">Related services</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/medical-billing-services" className="border border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/60 hover:text-primary">Medical Billing</Link>
            <Link to="/patient-screening-services" className="border border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/60 hover:text-primary">Patient Screening</Link>
            <Link to="/appointment-scheduling-services" className="border border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/60 hover:text-primary">Appointments</Link>
          </div>
          <a href="tel:+14316683854" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-primary">
            <Phone className="size-4" aria-hidden="true" /> +1 431 668 3854
          </a>
        </div>
      </section>

      <EnquiryForm defaultService="Teleradiology & Remote Radiology" />
      <SiteFooter />
      <RadiologistAgent />
    </main>
  );
}
