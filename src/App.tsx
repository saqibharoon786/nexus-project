import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import {
  appointmentsPage,
  fastFoodPage,
  leadManagementPage,
  patientScreeningPage,
  truckDispatchingPage,
  ultrasoundPage,
  xrayPage,
} from "@/content/service-pages";
import { HomePage } from "@/pages/HomePage";
import { MedicalBillingPage } from "@/pages/MedicalBillingPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medical-billing-services" element={<MedicalBillingPage />} />
        <Route path="/patient-screening-services" element={<ServicePageLayout page={patientScreeningPage} />} />
        <Route path="/ultrasound-services" element={<ServicePageLayout page={ultrasoundPage} />} />
        <Route path="/x-ray-services" element={<ServicePageLayout page={xrayPage} />} />
        <Route path="/lead-management-services" element={<ServicePageLayout page={leadManagementPage} />} />
        <Route path="/truck-dispatching-services" element={<ServicePageLayout page={truckDispatchingPage} />} />
        <Route path="/fast-food-solutions" element={<ServicePageLayout page={fastFoodPage} />} />
        <Route path="/appointment-scheduling-services" element={<ServicePageLayout page={appointmentsPage} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
