import {
  Activity,
  CalendarCheck,
  CircleDollarSign,
  ClipboardCheck,
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
      { title: "Teleradiology & Remote Radiology", description: "Ultrasound, X-ray, and color Doppler reporting.", icon: Activity, href: "/teleradiology-remote-radiology" },
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
