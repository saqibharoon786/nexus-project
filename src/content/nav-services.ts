import {
  CalendarCheck,
  CircleDollarSign,
  ClipboardCheck,
  HeartPulse,
  Radio,
  Target,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export type NavServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const serviceGroups: { label: string; items: NavServiceItem[] }[] = [
  {
    label: "Healthcare",
    items: [
      { title: "Medical Billing", description: "Remote front desk and full billing cycle.", icon: CircleDollarSign, href: "/medical-billing-services" },
      { title: "Patient Screening", description: "Organized intake before every visit.", icon: ClipboardCheck, href: "/patient-screening-services" },
      { title: "Ultrasound Services", description: "Scheduling built around patients.", icon: HeartPulse, href: "/ultrasound-services" },
      { title: "X-Ray Services", description: "Dependable imaging coordination.", icon: Radio, href: "/x-ray-services" },
    ],
  },
  {
    label: "Business",
    items: [
      { title: "Lead Management", description: "Qualify and nurture every enquiry.", icon: Target, href: "/lead-management-services" },
      { title: "Truck Dispatching", description: "Loads, routes, and driver support.", icon: Truck, href: "/truck-dispatching-services" },
      { title: "Fast Food Solutions", description: "Keep every rush hour moving.", icon: UtensilsCrossed, href: "/fast-food-solutions" },
      { title: "Appointments", description: "Simple booking and reminders.", icon: CalendarCheck, href: "/appointment-scheduling-services" },
    ],
  },
];
