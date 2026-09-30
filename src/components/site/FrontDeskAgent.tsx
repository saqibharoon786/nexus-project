import { Headset, Send, Star, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ChatMessage = { role: "agent" | "user"; text: string };

const AGENT = {
  name: "Nadia Rahman",
  role: "Front desk lead",
  detail: "Calls, charts, and the schedule",
};

const OPENER =
  "Hi, I’m Nadia. I look after the remote front desk — calls, scheduling, EMR notes, faxes, and chart uploads. What do you want covered first?";

const prompts = ["Incoming calls", "Patient scheduling", "Chart uploads"];

function replyFor(input: string) {
  const q = input.toLowerCase();

  if (/(hello|hi|hey|salam|assalam)\b/.test(q)) {
    return "Hi. Tell me what is slowing the desk down — phones, the calendar, faxes, or charts — and I’ll say how we usually cover it.";
  }
  if (/(who are you|your name|agent)/.test(q)) {
    return "I’m Nadia Rahman, the front desk lead on this page. I can explain calls, scheduling, EMR documentation, faxes, medical records, and chart uploads. For a written quote, the form at the bottom is the faster path.";
  }
  if (/(call|phone|incoming|voicemail)/.test(q)) {
    return "Incoming calls are answered in your practice name. We take the reason, the callback number, and how urgent it is, then write that into the chart. Clinical questions go to your in-office team — we don’t give medical advice.";
  }
  if (/(schedul|appointment|book|calendar|reschedul)/.test(q)) {
    return "Scheduling follows your visit types and how long each provider actually needs. New visits, follow-ups, and reschedules go on the calendar you already use, with the reminder your patients expect.";
  }
  if (/(emr|ehr|document|note|chart comment)/.test(q)) {
    return "EMR notes are entered the same day: call outcomes, referrals, and chart comments in the fields your providers already open. Nothing is left as a sticky note for the morning.";
  }
  if (/(fax)/.test(q)) {
    return "Inbound faxes are matched to the patient and filed the same day. Outbound faxes are sent and checked so they don’t sit in a tray.";
  }
  if (/(record|release|roi)/.test(q)) {
    return "Medical-record requests are tracked until they’re closed. We pull only the documents your office approves and leave a clear status for the in-office team.";
  }
  if (/(upload|lab|referral|insurance card|scan)/.test(q)) {
    return "Labs, referrals, IDs, and insurance cards are uploaded into the chart before the visit, so the provider isn’t waiting on a missing document in the room.";
  }
  if (/(assistant|medical assistant|ma\b)/.test(q)) {
    return "The remote medical assistant prepares the visit: demographics, insurance, and the reason for coming in. If something clinical comes up, it is handed to your clinic, not answered on the phone.";
  }
  if (/(hipaa|privacy|baa|secure)/.test(q)) {
    return "The desk works under HIPAA, with access limited by role. We can sign a Business Associate Agreement. Please don’t put real patient names or record numbers in this chat.";
  }
  if (/(price|cost|quote|fee|how much)/.test(q)) {
    return "Front desk coverage is usually monthly, based on hours and call volume. I don’t quote a number here — use the enquiry form and we’ll send the scope in writing.";
  }
  if (/(start|onboard|how (do|long)|go live|begin)/.test(q)) {
    return "Most clinics start after EMR and phone access plus a short look at your scripts. Choose Front Desk Remote on the form and tell us which of the seven operations you want first.";
  }

  return "I can walk through calls, scheduling, EMR notes, faxes, medical records, or chart uploads. Ask about one of those, or jump to the form if you want us to cover the desk.";
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

export function FrontDeskAgent() {
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
    setMessages((current) => [...current, { role: "user", text: trimmed }, { role: "agent", text: replyFor(trimmed) }]);
    setInput("");
  };

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3">
      {open && (
        <section
          className="pointer-events-auto w-[min(100vw-2rem,24rem)] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          aria-label="Front desk assistant"
        >
          <header className="flex items-start gap-3 border-b border-border bg-about px-4 py-3">
            <span className="mt-0.5 flex size-11 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Headset className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-sm font-bold text-foreground">{AGENT.name}</p>
              <p className="text-[11px] font-semibold text-primary">{AGENT.role}</p>
              <p className="text-[11px] text-muted-foreground">{AGENT.detail}</p>
              <div className="mt-1.5">
                <Stars />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close front desk assistant"
            >
              <X className="size-4" />
            </button>
          </header>
          <div ref={listRef} className="max-h-80 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <p
                key={`${message.role}-${index}`}
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-6 ${
                  message.role === "agent" ? "bg-background text-foreground" : "ml-auto bg-secondary text-secondary-foreground"
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
            <label className="sr-only" htmlFor="front-desk-agent-input">
              Message the front desk lead
            </label>
            <input
              id="front-desk-agent-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about calls, scheduling, or charts…"
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
        </section>
      )}

      <div className="pointer-events-auto flex flex-col items-end gap-1.5">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-bold text-secondary-foreground shadow-xl transition-transform hover:-translate-y-0.5"
          aria-expanded={open}
        >
          <Headset className="size-4" aria-hidden="true" />
          {open ? "Close chat" : "Ask Nadia"}
        </button>
        <span className="rounded-full border border-border bg-card px-3 py-1 shadow-lg">
          <Stars />
        </span>
      </div>
    </div>
  );
}
