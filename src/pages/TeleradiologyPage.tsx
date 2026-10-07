import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Clock3,
  FileText,
  HeartPulse,
  Lock,
  Mail,
  Monitor,
  Phone,
  Quote,
  Radio,
  ShieldCheck,
  Star,
  Stethoscope,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { RadiologistAgent } from "@/components/site/RadiologistAgent";
import { Seo } from "@/components/site/Seo";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import ultrasoundImg from "@/assets/service-ultrasound.jpg";
import xrayImg from "@/assets/service-xray.jpg";

const trustPoints = [
  { value: "3 lines", label: "X-ray, ultrasound, and color Doppler" },
  { value: "Same day", label: "Stat and time-critical reads when agreed" },
  { value: "Your PACS", label: "Reports return into the system you already use" },
  { value: "HIPAA", label: "Encrypted transfer and a BAA when required" },
];

const operations: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "X-ray reporting",
    description:
      "Chest, bones, joints, abdomen, and trauma series. A chest PA report covers lungs, cardiac shadow, mediastinum and hilum, pleura, bony cage, and both hemidiaphragms — then a clear impression.",
    icon: Radio,
  },
  {
    title: "Ultrasound reporting",
    description:
      "Abdomen, pelvis, obstetric, renal, thyroid, breast, scrotal, and musculoskeletal studies. Each organ is described on its own so the referrer can act without rereading the whole study.",
    icon: HeartPulse,
  },
  {
    title: "Color Doppler reporting",
    description:
      "DVT, carotid duplex, and arterial or venous limb mapping. Compression, color fill, and spectral findings are written vessel by vessel, with a hemodynamic impression.",
    icon: Activity,
  },
  {
    title: "Worklist and priors",
    description:
      "Demographics, the clinical question, and relevant prior studies are checked before a case is assigned, so the reader is not starting from a blank folder.",
    icon: FileText,
  },
  {
    title: "Critical results",
    description:
      "Unexpected or urgent findings are called through the path your department already uses. The report still lands in the chart, with the call noted.",
    icon: Clock3,
  },
  {
    title: "Report return",
    description:
      "The signed report goes back to PACS or RIS, or the delivery route you agree. Referrers see the same structure whether the list was routine, overflow, or after hours.",
    icon: Monitor,
  },
];

const dayFlow = [
  { time: "List open", title: "Studies land on the worklist", detail: "Ultrasound, X-ray, and Doppler cases arrive with the clinical note. Incomplete studies are flagged before they are read." },
  { time: "Assign", title: "The right reader takes the case", detail: "Chest and general X-ray, organ ultrasound, and vascular Doppler are routed to the radiologist covering that list." },
  { time: "Read", title: "Structured report is written", detail: "Findings follow the template for that study. Measurements, negatives that matter, and the impression stay in a fixed order." },
  { time: "Sign-out", title: "Report and any urgent call", detail: "The authorised report returns to your system. Critical results are communicated before the shift hands off." },
];

const roles: { title: string; owns: string; duties: string[] }[] = [
  {
    title: "X-ray radiologist",
    owns: "General radiography",
    duties: [
      "Read chest PA, musculoskeletal, abdomen, and trauma series",
      "Keep lungs, heart, mediastinum, pleura, bones, and diaphragm in the same order on every chest report",
      "Flag a fracture, pneumothorax, or other urgent finding for the critical-result path",
    ],
  },
  {
    title: "Consultant sonologist",
    owns: "Ultrasound",
    duties: [
      "Report abdomen, pelvis, obstetric, small parts, and MSK studies organ by organ",
      "Include the measurements your referrers expect, and say when a structure was not seen",
      "Write an impression a clinician can act on, not a second copy of the findings",
    ],
  },
  {
    title: "Vascular reader",
    owns: "Color Doppler",
    duties: [
      "Report DVT, carotid, and limb arterial or venous studies with compression and spectral notes",
      "State which segments were examined and which were not",
      "Separate a normal study from one that needs same-day clinical follow-up",
    ],
  },
  {
    title: "Reporting coordinator",
    owns: "The worklist",
    duties: [
      "Watch turnaround on routine, overflow, and stat cases",
      "Match priors and the referrer’s question before the study is opened",
      "Confirm the signed report has returned to PACS or RIS",
    ],
  },
];

const team = [
  { role: "X-ray reporting", focus: "Chest, bones, joints, abdomen, trauma", coverage: "Routine and stat" },
  { role: "Ultrasound reporting", focus: "Abdomen, pelvis, OB, small parts, MSK", coverage: "Structured reads" },
  { role: "Color Doppler", focus: "DVT, carotid, limb arterial and venous", coverage: "Vascular list" },
  { role: "Worklist", focus: "Assignment, priors, and protocol check", coverage: "Before the read" },
  { role: "Critical results", focus: "Urgent calls on unexpected findings", coverage: "Same shift" },
  { role: "PACS / RIS handoff", focus: "Signed report back into your system", coverage: "Every study" },
];

const studies = [
  "Chest X-ray PA — lungs, heart, mediastinum, pleura, bones, and diaphragm",
  "General X-ray — bones, joints, abdomen, and trauma series",
  "Abdominal ultrasound — liver, gallbladder, pancreas, spleen, and kidneys",
  "Pelvic and obstetric ultrasound",
  "Renal, thyroid, breast, scrotal, and musculoskeletal ultrasound",
  "Color Doppler — DVT, carotid duplex, and limb arterial or venous mapping",
];

const platforms: { name: string; icon: LucideIcon; badge: string }[] = [
  { name: "PACS worklist", icon: Monitor, badge: "bg-[#1a56db] text-white" },
  { name: "RIS", icon: FileText, badge: "bg-[#111827] text-white" },
  { name: "DICOM transfer", icon: Activity, badge: "bg-[#0284c7] text-white" },
  { name: "Structured templates", icon: Workflow, badge: "bg-[#2563eb] text-white" },
  { name: "Critical-result log", icon: ShieldCheck, badge: "bg-[#0f2744] text-white" },
];

const testimonials = [
  {
    quote: "Chest films used to sit until the next in-house session. The PA reports now come back in the same order every time — lungs, heart, pleura, bones — and our referrers stopped calling to ask what was left out.",
    name: "Helen Cho",
    role: "Imaging centre director",
    place: "Vancouver, Canada",
    result: "Chest list cleared",
    rating: 5,
  },
  {
    quote: "Abdomen ultrasound reports used to read like a paragraph. Organ-by-organ structure means the gastroenterologist can find the liver and the kidneys without scrolling.",
    name: "Omar Farooq",
    role: "Radiology group lead",
    place: "Dubai, UAE",
    result: "Reports referrers can scan",
    rating: 5,
  },
  {
    quote: "Weekend DVT studies were the gap. Color Doppler is on the same panel as ultrasound and X-ray, so we are not calling a second vendor at 9 p.m.",
    name: "Laura Bennett",
    role: "Hospital imaging manager",
    place: "Manchester, United Kingdom",
    result: "One panel, three modalities",
    rating: 5,
  },
  {
    quote: "Overflow no longer means a different voice on every report. The impression is short, the negatives that matter are written, and the file is back in our PACS.",
    name: "Daniel Okonkwo",
    role: "Chief technologist",
    place: "Austin, Texas, USA",
    result: "Same structure, every site",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What does this teleradiology service include?",
    answer:
      "Remote reporting for X-ray, ultrasound, and color Doppler. That can mean primary reads, overflow, backlog clearance, after-hours cover, and leave cover. Your team still acquires the images.",
  },
  {
    question: "Do you perform the scans?",
    answer:
      "No. Sonographers and radiographers at your site perform the study. Our radiologists interpret it remotely and return a structured report.",
  },
  {
    question: "What does a chest X-ray PA report contain?",
    answer:
      "Technique, then lungs, cardiac shadow, mediastinum and hilum, pleura, bony cage and soft tissues, and both hemidiaphragms, followed by a one-line impression. The sample on this page shows that order.",
  },
  {
    question: "How fast are reports returned?",
    answer:
      "Routine studies follow an agreed window, often within 48 hours. Urgent and time-sensitive cases can be prioritised for same-day reporting.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Most clients use a per-study model based on volume and the mix of X-ray, ultrasound, and color Doppler. A written quote follows a short look at your list.",
  },
  {
    question: "Can you connect to our PACS and RIS?",
    answer:
      "Yes. Reporting is meant to sit beside the PACS and RIS you already use. Your team does not change how the study is performed.",
  },
  {
    question: "Are the sample reports real patients?",
    answer:
      "No. The chest X-ray, ultrasound abdomen, ultrasound abdomen/pelvis, and lower-limb color Doppler examples are anonymised teaching formats. They are not live records and must not be used as clinical advice.",
  },
  {
    question: "Who can start this service?",
    answer:
      "Imaging centres, hospital radiology departments, multi-site groups, and clinics that need remote reads for X-ray, ultrasound, and color Doppler.",
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
      name: "Teleradiology & Remote Radiology — X-Ray, Ultrasound & Color Doppler Reporting",
      serviceType: "Remote X-ray, ultrasound, and color Doppler reporting",
      provider: { "@type": "Organization", name: "HS Partners" },
      description:
        "Remote radiology reporting for X-ray, ultrasound, and color Doppler with structured reports, encrypted transfer, and PACS/RIS handoff.",
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
  modality: string;
  exam: string;
  technique?: string;
  patient: { name: string; age: string; reg: string; physician: string; date: string; studyNo?: string };
  body: { heading: string; text: string }[];
  impression: string[];
  signOff: { name: string; lines: string[] }[];
};

const reports: SampleReport[] = [
  {
    id: "chest-pa",
    label: "X-ray — Chest PA",
    modality: "X-ray reporting",
    exam: "CHEST X-RAY (PA)",
    technique: "PA view of the chest obtained in full inspiration, using CR digital technology.",
    patient: { name: "Mr ABC", age: "33 yrs / M", reg: "MR-087502", physician: "Self", date: "22 – 09 – 2026", studyNo: "XR-087502" },
    body: [
      {
        heading: "Lungs",
        text: "Both lung fields are clear. No focal parenchymal lesion, consolidation, or collapse seen. No pleural effusion or pneumothorax.",
      },
      {
        heading: "Cardiac shadow",
        text: "Cardiac size and shape appear normal. Cardiothoracic ratio is within normal limits.",
      },
      {
        heading: "Mediastinum and hilum",
        text: "Mediastinum is central in position. Both hilar shadows are normal. Trachea is central.",
      },
      {
        heading: "Pleura",
        text: "Bilateral costophrenic and cardiophrenic angles are clear and sharp.",
      },
      {
        heading: "Bony cage and soft tissues",
        text: "Visualized bony thoracic cage appears normal. No fracture or lytic lesion seen. Soft tissues are unremarkable.",
      },
      {
        heading: "Diaphragm",
        text: "Both hemidiaphragms are normal in position and contour.",
      },
    ],
    impression: ["Normal Chest X-Ray PA view. No significant abnormality detected."],
    signOff: [{ name: "Dr XYZ", lines: ["Consultant Radiologist"] }],
  },
  {
    id: "us-abdomen",
    label: "Ultrasound — Abdomen",
    modality: "Ultrasound reporting",
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
        text: "Normal in size, shape, and echotexture. It measures 10.1 x 4.3 cm with parenchymal thickness of 1.5 cm. Contours are smooth and sharp. Cortical thickness and echogenicity are normal. No solid or cystic mass seen. Pelvicalyceal system is normal. No calculus or obstruction seen in renal areas. Proximal ureter is not dilated. Perirenal areas are normal.",
      },
      {
        heading: "Left kidney",
        text: "Normal in size, shape, and echotexture. It measures 10.3 x 4.5 cm with parenchymal thickness of 1.7 cm. Contours are smooth and sharp. Cortical thickness and echogenicity are normal. No solid or cystic mass seen. Pelvicalyceal system is normal. No calculus or obstruction seen in renal areas. Proximal ureter is not dilated. Perirenal areas are normal.",
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
    signOff: [
      { name: "Dr XYZ", lines: ["MBBS, DMRD", "Radiologist / Sonologist"] },
      { name: "Dr ABS", lines: ["MBBS, MCPS, FCPS", "Radiologist / Sonologist"] },
    ],
  },
  {
    id: "doppler-dvt",
    label: "Color Doppler — Lower limb",
    modality: "Color Doppler reporting",
    exam: "COLOR DOPPLER — RIGHT LOWER LIMB VENOUS",
    technique: "Gray-scale, color, and spectral Doppler of the right lower limb veins, with compression at each segment.",
    patient: { name: "Mr DEF", age: "XX Yrs / M", reg: "MR-10442", physician: "Self", date: "01 – 01 – 2026", studyNo: "CD-10442" },
    body: [
      {
        heading: "Common femoral vein",
        text: "Patent and fully compressible. Spontaneous flow is present, phasic with respiration, and augments on distal compression. No intraluminal filling defect.",
      },
      {
        heading: "Femoral vein",
        text: "Patent and compressible through the thigh. Color fill is complete. Spectral waveform is spontaneous and phasic. No thrombus seen.",
      },
      {
        heading: "Popliteal vein",
        text: "Patent and compressible. Color flow fills the lumen. Augmentation is preserved. No filling defect.",
      },
      {
        heading: "Calf veins",
        text: "Posterior tibial and peroneal veins are compressible where examined. No thrombus identified in the visualized segments.",
      },
      {
        heading: "Great saphenous vein",
        text: "Patent at the saphenofemoral junction. The examined segment shows no thrombus. No significant reflux demonstrated on the segment assessed.",
      },
      {
        heading: "Other findings",
        text: "No Baker’s cyst and no perivascular collection seen. The contralateral limb was not examined.",
      },
    ],
    impression: [
      "No sonographic evidence of deep vein thrombosis in the examined right lower limb.",
      "Examined superficial venous segment is patent.",
    ],
    signOff: [
      { name: "Dr XYZ", lines: ["MBBS, DMRD", "Radiologist / Sonologist"] },
      { name: "Dr ABS", lines: ["MBBS, MCPS, FCPS", "Radiologist / Sonologist"] },
    ],
  },
  {
    id: "us-pelvis",
    label: "Ultrasound — Abdomen / pelvis",
    modality: "Ultrasound reporting",
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
    signOff: [
      { name: "Dr XYZ", lines: ["MBBS, DMRD", "Radiologist / Sonologist"] },
      { name: "Dr ABS", lines: ["MBBS, MCPS, FCPS", "Radiologist / Sonologist"] },
    ],
  },
];

function SampleReportCard({ report }: { report: SampleReport }) {
  return (
    <article className="overflow-hidden border border-border bg-card">
      <div className="border-b border-border bg-about px-5 py-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{report.modality}</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">Demonstration report</p>
        </div>
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <p><span className="text-muted-foreground">Name</span> · <strong className="text-foreground">{report.patient.name}</strong></p>
          <p><span className="text-muted-foreground">Age / Sex</span> · <strong className="text-foreground">{report.patient.age}</strong></p>
          <p><span className="text-muted-foreground">MRN</span> · <strong className="text-foreground">{report.patient.reg}</strong></p>
          <p><span className="text-muted-foreground">Ref. by</span> · <strong className="text-foreground">{report.patient.physician}</strong></p>
          <p><span className="text-muted-foreground">Date</span> · <strong className="text-foreground">{report.patient.date}</strong></p>
          {report.patient.studyNo ? (
            <p><span className="text-muted-foreground">Study no.</span> · <strong className="text-foreground">{report.patient.studyNo}</strong></p>
          ) : null}
        </div>
      </div>
      <div className="px-5 py-8 sm:px-8">
        <h3 className="font-display text-xl font-black tracking-[0.08em] text-foreground">{report.exam}</h3>
        {report.technique ? (
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            <span className="font-bold text-foreground">Technique. </span>
            {report.technique}
          </p>
        ) : null}
        <div className="mt-6 space-y-5">
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Findings</h4>
          {report.body.map((section) => (
            <div key={section.heading}>
              <h5 className="text-sm font-bold text-foreground">{section.heading}</h5>
              <p className="mt-1.5 text-sm leading-7 text-muted-foreground">{section.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 border border-primary/30 bg-primary/5 px-5 py-5">
          <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Impression</h4>
          <ul className="mt-3 space-y-2">
            {report.impression.map((item) => (
              <li key={item} className="text-sm font-semibold leading-7 text-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={`mt-10 grid gap-8 border-t border-dashed border-border pt-8 ${report.signOff.length > 1 ? "sm:grid-cols-2" : ""}`}>
          {report.signOff.map((doctor, index) => (
            <div key={doctor.name} className={index === 1 ? "sm:text-right" : ""}>
              <p className="font-display text-lg font-bold text-foreground">{doctor.name}</p>
              {doctor.lines.map((line) => (
                <p key={line} className="text-xs text-muted-foreground">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function TeleradiologyPage() {
  const [activeReport, setActiveReport] = useState(reports[0].id);
  const [quote, setQuote] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const current = reports.find((report) => report.id === activeReport) ?? reports[0];

  const goQuote = useCallback((next: number) => {
    setQuote((next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (reviewsPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setQuote((value) => (value + 1) % testimonials.length), 6500);
    return () => window.clearInterval(timer);
  }, [reviewsPaused]);

  const activeQuote = testimonials[quote]!;

  return (
    <main className="relative bg-background">
      <Seo
        title="Teleradiology & Remote Radiology | X-Ray, Ultrasound & Color Doppler | HS Partners"
        description="Remote reporting for X-ray, ultrasound, and color Doppler. Structured chest, abdomen, and vascular reports, encrypted transfer, and PACS/RIS handoff from HS Partners."
        keywords="teleradiology, remote radiology, x-ray reporting, chest x-ray PA report, ultrasound reporting, color doppler reporting, PACS RIS"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader ctaHref="#contact" />

      <section className="relative overflow-hidden px-5 pb-16 pt-16 sm:pb-20 sm:pt-20" aria-labelledby="telerad-hero-title">
        <div className="hero-aura pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <p className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Services</span>
            <span aria-hidden="true">/</span>
            <span className="text-primary">Teleradiology</span>
          </p>
          <p className="text-xs font-bold uppercase text-primary">X-ray · Ultrasound · Color Doppler</p>
          <h1 id="telerad-hero-title" className="mt-5 max-w-5xl font-display text-5xl font-black leading-[0.98] text-foreground sm:text-7xl">
            Teleradiology &amp; <span className="text-electric">Remote Radiology</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Your scanners stay on site. X-ray, ultrasound, and color Doppler are read remotely, written to a fixed template, and sent back into the PACS or RIS your referrers already open.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#reporting" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
              See the three reporting lines <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#sample-reports" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:text-primary">
              View sample reports
            </a>
          </div>
        </div>
      </section>

      <section className="trust-band relative z-30 overflow-hidden border-y border-border bg-card" aria-label="How remote reporting is run">
        <div className="trust-signal" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-2 md:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.label} className="flex min-h-32 flex-col items-center justify-center px-4 py-8 text-center md:min-h-40">
              <p className="font-display text-2xl font-black text-primary sm:text-3xl">{point.value}</p>
              <p className="mt-2 max-w-[14rem] text-xs leading-5 text-muted-foreground">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reporting" className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="telerad-ops-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">Reporting lines</p>
            <h2 id="telerad-ops-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              What the panel <span className="text-electric">actually reads</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Three modalities, one worklist. X-ray, ultrasound, and color Doppler share the same turnaround rules, the same handoff, and a named radiologist your team can reach.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-px border border-border/50 bg-border md:grid-cols-2 lg:grid-cols-3">
            {operations.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-card p-8 sm:p-10">
                  <div className="mb-7 flex items-center justify-between">
                    <span className="service-icon-badge static" aria-hidden="true">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <span className="font-display text-xs font-bold text-primary">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              );
            })}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {studies.map((study) => (
              <li key={study} className="flex items-start gap-3 border border-border bg-card px-4 py-3 text-sm leading-6 text-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {study}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-about px-5 py-24 sm:py-32" aria-labelledby="telerad-roles-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">The reporting day</p>
            <h2 id="telerad-roles-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              Who reads, and <span className="text-electric">what they own</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Remote reporting is not a shared inbox. Chest films, ultrasound, and Doppler each have an owner, and the signed report is confirmed back in your system before the list closes.
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
                      <Stethoscope className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {duty}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-30 border-t border-border bg-about px-5 py-16 sm:py-20" aria-labelledby="radiologist-spotlight-title">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
          <div className="w-36 shrink-0 sm:w-44">
            <div className="flex aspect-[3/4] w-full flex-col items-center justify-center rounded-2xl bg-secondary px-4 text-center shadow-xl">
              <Stethoscope className="size-8 text-primary" aria-hidden="true" />
              <p className="mt-4 font-display text-3xl font-black text-secondary-foreground">AS</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-primary">MBBS, FCPS-I</p>
            </div>
            <p className="mt-3 flex flex-col items-center gap-1">
              <span className="inline-flex items-center gap-0.5 text-primary" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-3.5 fill-current" aria-hidden="true" />
                ))}
              </span>
              <span className="text-xs font-bold tracking-wide text-foreground">5.0</span>
            </p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold uppercase text-primary">Your reporting lead</p>
            <h2 id="radiologist-spotlight-title" className="mt-3 font-display text-2xl font-black leading-tight text-foreground sm:text-3xl">
              Dr. Amina <span className="text-electric">Shah</span>
            </h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-primary">Consultant radiologist / sonologist</p>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Dr. Shah has 35 years in diagnostic imaging. She is the person centres ask when a chest PA, an abdomen ultrasound, or a Doppler study needs a straight answer on structure, turnaround, or what the sample reports on this page are showing.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Ask her from the chat, or send the enquiry form if you want this panel on your worklist. The chat does not issue a diagnosis.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="telerad-team-title">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-primary">Seats on the list</p>
            <h2 id="telerad-team-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
              The reporting <span className="text-electric">panel</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Coverage is split by modality. X-ray, ultrasound, and color Doppler stay with the reader for that study, and the coordinator watches the clock.
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

      <section id="sample-reports" className="relative z-30 border-y border-border bg-card px-5 py-24 sm:py-32" aria-labelledby="telerad-reports-title">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-xs font-bold uppercase text-primary">Demonstration output</p>
          <h2 id="telerad-reports-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-6xl">
            Sample reports, <span className="text-electric">one structure</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
            Anonymised teaching formats for a chest X-ray PA, an ultrasound abdomen, a lower-limb color Doppler, and an abdomen/pelvis ultrasound. These are not live records.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-border">
              <img src={xrayImg} alt="Chest radiograph displayed beside an X-ray suite" className="h-52 w-full object-cover sm:h-64" />
              <figcaption className="bg-background px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">X-ray reporting</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-border">
              <img src={ultrasoundImg} alt="Ultrasound console used for abdomen and Doppler studies" className="h-52 w-full object-cover sm:h-64" />
              <figcaption className="bg-background px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Ultrasound and color Doppler</figcaption>
            </figure>
          </div>
          <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Sample reports">
            {reports.map((report) => (
              <button
                key={report.id}
                type="button"
                role="tab"
                aria-selected={activeReport === report.id}
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
          <div className="mt-8" role="tabpanel">
            <SampleReportCard report={current} />
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-background px-5 py-24 sm:py-32" aria-labelledby="telerad-platforms-title">
        <div className="mx-auto w-full max-w-7xl">
          <h2 id="telerad-platforms-title" className="mx-auto max-w-3xl text-center font-display text-3xl font-black leading-[1.15] text-foreground sm:text-4xl">
            Where the report <span className="text-electric">goes back</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-7 text-muted-foreground">
            The panel reads off your images and returns the signed report into the systems your department already runs.
          </p>
          <div className="mt-10 overflow-hidden rounded-[1.75rem] bg-[#071633] px-4 py-10 sm:px-8 sm:py-12">
            <div className="marquee" aria-hidden="true">
              <div className="marquee-track items-stretch">
                {[...platforms, ...platforms].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <article key={`${item.name}-${index}`} className="flex h-52 w-60 shrink-0 flex-col items-center justify-center rounded-2xl bg-white px-6 text-center shadow-lg">
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
      </section>

      <section
        className="relative z-30 border-t border-border bg-card px-5 py-24 sm:py-32"
        aria-labelledby="telerad-reviews-title"
        onMouseEnter={() => setReviewsPaused(true)}
        onMouseLeave={() => setReviewsPaused(false)}
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-primary">5.0 from imaging teams</p>
              <h2 id="telerad-reviews-title" className="mt-5 font-display text-4xl font-black leading-none text-foreground sm:text-6xl">
                Five-star reviews from <span className="text-electric">the reporting panel.</span>
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
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-border bg-background p-6 sm:p-14">
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

      <section className="relative z-30 border-t border-border bg-background px-5 py-24 sm:py-32" aria-labelledby="telerad-trust-title">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Trust</p>
            <h2 id="telerad-trust-title" className="mt-5 font-display text-4xl font-black leading-[1.05] text-foreground sm:text-5xl">
              Images and reports you can <span className="text-electric">hand over</span>
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Studies move on encrypted channels. Access is limited to the radiologist assigned to the case and the coordinator watching the list. HS Partners can sign a <strong className="font-semibold text-foreground">Business Associate Agreement</strong>.
            </p>
            <p className="flex items-start gap-3">
              <Lock className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              Acquisition stays with your credentialed sonographers and radiographers. We interpret and report.
            </p>
            <p className="flex items-start gap-3">
              <ShieldCheck className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              The samples on this page are teaching formats. Do not paste real patient names or MRNs into the chat.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-card px-5 py-24 sm:py-32" aria-labelledby="telerad-faq-title">
        <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase text-primary">Frequently asked</p>
            <h2 id="telerad-faq-title" className="mt-5 font-display text-4xl font-black leading-none text-foreground sm:text-6xl">
              Questions about <span className="text-electric">remote radiology.</span>
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

      <section className="relative z-30 border-t border-border bg-background px-5 py-16 sm:py-20" aria-label="Related services">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap gap-3">
          <Link to="/medical-billing-services" className="border border-border bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/60 hover:text-primary">Medical Billing</Link>
          <Link to="/front-desk-remote" className="border border-border bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/60 hover:text-primary">Front Desk Remote</Link>
          <Link to="/appointment-scheduling-services" className="border border-border bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary/60 hover:text-primary">Appointments</Link>
        </div>
      </section>

      <EnquiryForm defaultService="Teleradiology & Remote Radiology" />
      <SiteFooter />
      <RadiologistAgent />
    </main>
  );
}
