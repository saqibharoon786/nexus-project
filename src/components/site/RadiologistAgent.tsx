import { Send, Star, Stethoscope, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ChatMessage = { role: "agent" | "user"; text: string };

const DOCTOR = {
  name: "Dr. Amina Shah",
  credentials: "MBBS, FCPS-I",
  role: "Consultant Radiologist / Sonologist",
  experience: "35 years of diagnostic imaging experience",
};

const OPENER =
  "Assalam-o-Alaikum. I am Dr. Amina Shah. I cover X-ray, ultrasound, and color Doppler reporting. Which list do you want to talk through?";

const prompts = ["X-ray reporting", "Ultrasound reporting", "Color Doppler"];

function replyFor(input: string) {
  const q = input.toLowerCase();

  if (/(hello|hi|salam|assalam|hey)\b/.test(q)) {
    return `Hello. I am ${DOCTOR.name}, ${DOCTOR.credentials}, ${DOCTOR.role}, with ${DOCTOR.experience}. Ask me about X-ray, ultrasound, color Doppler, turnaround, or the sample reports on this page.`;
  }
  if (/(who are you|your name|experience|qualification|fcps|mbbs)/.test(q)) {
    return `I am ${DOCTOR.name}, ${DOCTOR.credentials}. I have practised diagnostic radiology and sonology for 35 years. This assistant explains how HS Partners delivers remote reporting — it does not replace an in-person clinical consultation.`;
  }
  if (/(color doppler|doppler|dvt|carotid)/.test(q)) {
    return "Color Doppler sits on the same panel as ultrasound and X-ray. We report DVT, carotid duplex, and limb arterial or venous studies vessel by vessel — compression, color fill, and the spectral note — then a short impression. The sample on this page is a right lower-limb venous study (MR-10442). It is a teaching format, not a live record.";
  }
  if (/(x-?ray|xray|radiograph|chest|pa view)/.test(q)) {
    return "X-ray reporting covers chest, bones, joints, abdomen, and trauma. A chest PA report is written in a fixed order: lungs, cardiac shadow, mediastinum and hilum, pleura, bony cage and soft tissues, then both hemidiaphragms. The sample chest PA (MR-087502) is a normal study. Your technologists acquire the film; we interpret and return it to your RIS.";
  }
  if (/(ultrasound|usg|sonograph|abdomen)/.test(q)) {
    return "Ultrasound reporting covers abdomen, pelvis, obstetric, renal, thyroid, breast, scrotal, and MSK studies, organ by organ. The page shows an unremarkable abdomen (MR-09031) and an abdomen/pelvis study (MR0110-03) with grade-I fatty liver, bilateral grade-I hydronephrosis, and a left ovarian cyst for follow-up. Those are teaching examples, not live records.";
  }
  if (/(sample|report|fatty|ovarian|impression|mr-09031|mr0110|mr-087502)/.test(q)) {
    return "Four demonstration reports are on this page. Chest X-ray PA (MR-087502) is normal. Ultrasound abdomen (MR-09031) is unremarkable. Color Doppler (MR-10442) shows no DVT in the examined right leg. Ultrasound abdomen/pelvis (MR0110-03) describes fatty liver, mild hydronephrosis, and a left ovarian cyst. None of these are live patient records, and none is a diagnosis for a real person.";
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

  return "I can help with X-ray, ultrasound, and color Doppler reporting, turnaround, PACS/RIS workflow, security, or the sample reports. Ask about one of those, or use the enquiry form if you want a coverage quote. I do not provide a diagnosis from this chat.";
}

function Stars() {
  return (
    <span className="inline-flex items-center gap-1" aria-label="Rated 5 out of 5">
      <span className="inline-flex text-primary">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-3 fill-current" aria-hidden="true" />
        ))}
      </span>
      <span className="text-[11px] font-bold text-foreground">5.0</span>
    </span>
  );
}

export function RadiologistAgent() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: "agent", text: OPENER }]);
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
              <div className="mt-1.5">
                <Stars />
              </div>
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
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {prompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => send(prompt)}
                    className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
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

      <div className="pointer-events-auto flex flex-col items-end gap-1.5">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-bold text-secondary-foreground shadow-xl transition-transform hover:-translate-y-0.5"
          aria-expanded={open}
        >
          <Stethoscope className="size-4" aria-hidden="true" />
          {open ? "Close chat" : "Ask Dr. Amina"}
        </button>
        <span className="rounded-full border border-border bg-card px-3 py-1 shadow-lg">
          <Stars />
        </span>
      </div>
    </div>
  );
}
