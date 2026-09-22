import { MessageCircle, Send, Stethoscope, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ChatMessage = { role: "agent" | "user"; text: string };

const DOCTOR = {
  name: "Dr. Amina Shah",
  credentials: "MBBS, FCPS-I",
  role: "Consultant Radiologist / Sonologist",
  experience: "35 years of diagnostic imaging experience",
};

const OPENERS = [
  "Assalam-o-Alaikum. I am Dr. Amina Shah, consultant radiologist. How can I help with ultrasound, X-ray, or color Doppler reporting today?",
  "Hello — this is Dr. Amina Shah. Ask me about our remote reporting workflow, turnaround, sample reports, or a modality we cover.",
];

function replyFor(input: string) {
  const q = input.toLowerCase();

  if (/(hello|hi|salam|assalam|hey)\b/.test(q)) {
    return `Hello. I am ${DOCTOR.name}, ${DOCTOR.credentials}, ${DOCTOR.role}, with ${DOCTOR.experience}. I can walk you through teleradiology, ultrasound, X-ray, color Doppler, or the sample abdomen reports on this page.`;
  }
  if (/(who are you|your name|experience|qualification|fcps|mbbs)/.test(q)) {
    return `I am ${DOCTOR.name}, ${DOCTOR.credentials}. I have practised diagnostic radiology and sonology for 35 years. This assistant explains how HS Partners delivers remote reporting — it does not replace an in-person clinical consultation.`;
  }
  if (/(color doppler|doppler)/.test(q)) {
    return "Color Doppler is reported alongside ultrasound as part of the same teleradiology service. Typical studies include DVT, carotid duplex, and arterial or venous limb mapping. Images transfer securely from your scanner or PACS; a radiologist issues a structured vascular report with velocities and impression where the protocol requires them.";
  }
  if (/(x-?ray|xray|radiograph)/.test(q)) {
    return "Remote X-ray reporting covers general radiography — chest, musculoskeletal, abdomen, and trauma lists. We support primary reads, overflow, after-hours cover, and urgent add-ons. Your technologists acquire the images; our radiologists interpret and return the report into your RIS or agreed channel.";
  }
  if (/(ultrasound|usg|sonograph)/.test(q)) {
    return "Remote ultrasound reporting includes abdomen, pelvis, obstetric, renal, thyroid, breast, scrotal, MSK, and vascular studies. Reports follow a structured organ-by-organ format so referring clinicians can act quickly. See the two sample abdomen reports on this page for the style of output.";
  }
  if (/(sample|report|abdomen|fatty|ovarian|impression|mr-09031|mr0110)/.test(q)) {
    return "The page shows two demonstration reports. Study A (MR-09031) is an unremarkable ultrasound abdomen. Study B (MR0110-03) describes grade-I fatty liver with hepatomegaly, bilateral grade-I hydronephrosis, and a left ovarian cyst that needs follow-up. These are anonymised teaching examples — not live patient records and not a diagnosis for any real person.";
  }
  if (/(workflow|process|how (it|you) work|pacs|ris|integrat)/.test(q)) {
    return "Typical flow: 1) your site performs the ultrasound, X-ray, or Doppler study; 2) images move over encrypted transfer into PACS/RIS; 3) the case lands on a radiologist worklist with clinical details; 4) a structured report is authorised; 5) the report returns to your system and the referring clinician. Urgent cases can be prioritised the same day.";
  }
  if (/(price|cost|charg|quote|fee)/.test(q)) {
    return "Pricing is usually per-study and depends on volume, modality mix (ultrasound, X-ray, color Doppler), and whether you need overflow, backlog, or after-hours cover. Use the enquiry form and a coordinator will send a written quote — I do not issue commercial rates in chat.";
  }
  if (/(turnaround|tat|how long|urgent|stat|24\/7|after.?hours)/.test(q)) {
    return "Routine studies are typically reported within an agreed window (often up to 48 hours). Time-critical and stat cases can be escalated for same-day reporting. After-hours and weekend coverage is available so lists do not stall when local radiologists are off shift.";
  }
  if (/(hipaa|privacy|encrypt|secure|confidential)/.test(q)) {
    return "Studies travel over encrypted channels. Access is limited to assigned reporting radiologists and coordinators. We can work under a BAA and follow the confidentiality rules your facility requires. Never paste real patient identifiers into this chat.";
  }
  if (/(who (do you|we) serve|hospital|clinic|imaging)/.test(q)) {
    return "The service is built for imaging centres, radiology groups, hospital departments, and multi-site networks that need overflow reporting, leave cover, backlog clearance, or a standing remote panel for ultrasound, X-ray, and color Doppler.";
  }
  if (/(book|demo|contact|start|onboard)/.test(q)) {
    return "Scroll to the enquiry form, choose Teleradiology & Remote Radiology, and share your monthly study volume. A specialist will map PACS/RIS access and a go-live plan — most teams can start after a short connectivity check.";
  }

  return "I can help with ultrasound, X-ray, and color Doppler remote reporting, turnaround, PACS/RIS workflow, security, or the sample reports. Ask a specific question, or open the enquiry form if you want a coverage quote. I do not provide a diagnosis from this chat alone.";
}

export function RadiologistAgent() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: "agent", text: OPENERS[0] }]);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = (text = input) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const answer = replyFor(trimmed);
    setMessages((current) => [...current, { role: "user", text: trimmed }, { role: "agent", text: answer }]);
    setInput("");
  };

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3">
      {open && (
        <section
          className="pointer-events-auto w-[min(100vw-2rem,24rem)] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          aria-label="Radiologist doctor assistant"
        >
          <header className="flex items-start gap-3 border-b border-border bg-about px-4 py-3">
            <span className="mt-0.5 flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Stethoscope className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-bold text-foreground">{DOCTOR.name}</p>
              <p className="text-[11px] font-semibold text-primary">{DOCTOR.credentials} · {DOCTOR.role}</p>
              <p className="text-[11px] text-muted-foreground">{DOCTOR.experience}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close radiologist assistant"
            >
              <X className="size-4" />
            </button>
          </header>
          <div ref={listRef} className="max-h-80 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <p
                key={`${message.role}-${index}`}
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                  message.role === "agent"
                    ? "bg-background text-foreground"
                    : "ml-auto bg-secondary text-secondary-foreground"
                }`}
              >
                {message.text}
              </p>
            ))}
          </div>
          <form
            className="flex gap-2 border-t border-border p-3"
            onSubmit={(event) => {
              event.preventDefault();
              send();
            }}
          >
            <label className="sr-only" htmlFor="radiologist-agent-input">
              Message the radiologist
            </label>
            <input
              id="radiologist-agent-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about reporting, TAT, or sample studies…"
              className="h-10 flex-1 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none ring-primary/40 focus:ring-2"
            />
            <button
              type="submit"
              className="inline-flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground"
              aria-label="Send message"
            >
              <Send className="size-4" />
            </button>
          </form>
          <p className="px-4 pb-3 text-[10px] leading-4 text-muted-foreground">
            Educational assistant only. Do not share real patient identifiers.
          </p>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-bold text-secondary-foreground shadow-xl transition-transform hover:-translate-y-0.5"
        aria-expanded={open}
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        Talk to radiologist
      </button>
    </div>
  );
}
