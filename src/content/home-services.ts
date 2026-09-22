import billingImg from "@/assets/service-billing.jpg";
import screeningImg from "@/assets/service-screening.jpg";
import ultrasoundImg from "@/assets/service-ultrasound.jpg";
import fastfoodImg from "@/assets/service-fastfood.jpg";
import leadsImg from "@/assets/service-leads.jpg";
import truckingImg from "@/assets/service-trucking.jpg";
import appointmentsImg from "@/assets/service-appointments.jpg";

export type HomeServiceDetail = {
  id: string;
  number: string;
  navLabel: string;
  kicker: string;
  title: string;
  titleAccent: string;
  href: string;
  summary: string;
  includedHeading: string;
  included: string[];
  image: string;
  imageAlt: string;
  cta: string;
};

export const homeServiceDetails: HomeServiceDetail[] = [
  {
    id: "medical-billing",
    number: "01",
    navLabel: "Medical Billing",
    kicker: "Healthcare operations",
    title: "Medical Billing",
    titleAccent: "& remote front desk",
    href: "/medical-billing-services",
    summary:
      "One team covers the clinic desk and the full claim cycle inside your EMR — so calls, charts, eligibility, and collections do not sit in two different places.",
    includedHeading: "What this service includes",
    included: [
      "Remote medical assistant support and incoming call handling",
      "EMR documentation, faxes, medical records, and chart uploads",
      "Patient scheduling to your visit templates",
      "Patient info verification and payor eligibility checks",
      "Charge entry, claim submission, and payment posting",
      "Denial follow-up, patient statements, and calling",
      "Clear monthly reporting on collections and aging",
    ],
    image: billingImg,
    imageAlt: "Medical billing workstation with claims and clinical records",
    cta: "See full billing details",
  },
  {
    id: "patient-screening",
    number: "02",
    navLabel: "Patient Screening",
    kicker: "Safer visits start earlier",
    title: "Patient Screening",
    titleAccent: "before every appointment",
    href: "/patient-screening-services",
    summary:
      "Pre-visit intake is completed, checked, and posted to the chart so clinicians are not reconstructing history in the room.",
    includedHeading: "What this service includes",
    included: [
      "Pre-visit history, medications, allergies, and chief complaint",
      "Insurance and eligibility checks during screening",
      "Risk and red-flag symptom routing",
      "Consent, HIPAA, and clinic form completion",
      "New-patient onboarding packets and ID collection",
      "Recall and follow-up questionnaires",
      "Specialty-specific scripts, not a generic form",
    ],
    image: screeningImg,
    imageAlt: "Clinician reviewing patient screening information on a tablet",
    cta: "See full screening details",
  },
  {
    id: "teleradiology",
    number: "03",
    navLabel: "Teleradiology",
    kicker: "Ultrasound · X-Ray · Color Doppler",
    title: "Teleradiology &",
    titleAccent: "Remote Radiology",
    href: "/teleradiology-remote-radiology",
    summary:
      "Your sonographers and radiographers acquire the studies. Credentialed radiologists return structured reports for ultrasound, general X-ray, and color Doppler — including overflow and after-hours lists.",
    includedHeading: "What this service includes",
    included: [
      "Ultrasound reporting — abdomen, pelvis, obstetric, renal, thyroid, breast, MSK",
      "X-ray reporting — chest, bones, joints, abdomen, and trauma series",
      "Color Doppler — DVT, carotid duplex, and limb arterial / venous studies",
      "Primary reads, overflow, backlog clearance, and leave cover",
      "Urgent / stat worklists with same-day priority when needed",
      "Encrypted image transfer and PACS / RIS report return",
      "Sample structured reports so you can see the output style",
    ],
    image: ultrasoundImg,
    imageAlt: "Diagnostic ultrasound workstation used for remote reporting",
    cta: "See full teleradiology details",
  },
  {
    id: "fast-food",
    number: "04",
    navLabel: "Fast Food",
    kicker: "Built for busy counters",
    title: "Fast Food",
    titleAccent: "Solutions",
    href: "/fast-food-solutions",
    summary:
      "The kitchen stays in the store. Overflow phones, app exceptions, and guest recovery come off the headset so tickets keep moving through the rush.",
    includedHeading: "What this service includes",
    included: [
      "Phone order support using your menu, modifiers, and 86 list",
      "Delivery-app exceptions — missing items, drivers, wrong addresses",
      "Complaint recovery to your refund and remake policy",
      "Catering and large-order capture with allergens and timing",
      "Hours, location, loyalty, and promo questions",
      "Multi-store overflow routing and after-hours coverage",
      "Store-level reporting on volume, issues, and themes",
    ],
    image: fastfoodImg,
    imageAlt: "Fast food counter during a busy service rush",
    cta: "See full QSR details",
  },
  {
    id: "lead-management",
    number: "05",
    navLabel: "Lead Management",
    kicker: "Every enquiry, handled",
    title: "Lead",
    titleAccent: "Management",
    href: "/lead-management-services",
    summary:
      "Speed-to-lead, qualification, and nurture sit with a dedicated response team so closers spend time on buyers instead of a cold inbox.",
    includedHeading: "What this service includes",
    included: [
      "Capture from web, ads, chat, phone, and marketplaces into one queue",
      "First response in minutes while intent is still high",
      "Qualification against your budget, timeline, and fit rules",
      "Appointment setting onto the right closer’s calendar",
      "Nurture and recycle for not-now leads",
      "CRM cleanup so stages and sources match reality",
      "After-hours coverage and weekly pipeline reporting",
    ],
    image: leadsImg,
    imageAlt: "Lead pipeline dashboard with follow-up activity",
    cta: "See full lead details",
  },
  {
    id: "truck-dispatching",
    number: "06",
    navLabel: "Truck Dispatching",
    kicker: "Every mile, coordinated",
    title: "Truck",
    titleAccent: "Dispatching",
    href: "/truck-dispatching-services",
    summary:
      "Owner-operators and small fleets get load search, rate push, paperwork, and 24/7 driver support without giving up control of what they haul.",
    includedHeading: "What this service includes",
    included: [
      "Load search and booking to your equipment, lanes, and rate floor",
      "Rate negotiation including detention and layover language",
      "Deadhead planning before you empty",
      "Broker, shipper, and appointment communication",
      "Rate con, BOL, and POD follow-up",
      "24/7 driver support for breakdowns and refused loads",
      "HOS-aware dispatching and weekly RPM / deadhead reporting",
    ],
    image: truckingImg,
    imageAlt: "Fleet dispatcher coordinating loads and routes",
    cta: "See full dispatch details",
  },
  {
    id: "appointments",
    number: "07",
    navLabel: "Appointments",
    kicker: "Less waiting. More care.",
    title: "Doctor–Patient",
    titleAccent: "Appointments",
    href: "/appointment-scheduling-services",
    summary:
      "Booking, reminders, waitlist fill, and reschedules run to your calendar rules so empty slots are a rare exception, not the afternoon.",
    includedHeading: "What this service includes",
    included: [
      "Inbound booking to the correct visit type, provider, and duration",
      "Outbound recall and waitlist backfill when someone cancels",
      "SMS, phone, and email reminders with prep and location",
      "Referral and coverage flags before the slot is confirmed",
      "New-patient scheduling with longer first-visit blocks",
      "Reschedule handling and same-day no-show recovery",
      "Multi-provider calendars and fill-rate reporting",
    ],
    image: appointmentsImg,
    imageAlt: "Patient booking a doctor appointment at a clinic desk",
    cta: "See full scheduling details",
  },
];
