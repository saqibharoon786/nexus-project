import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ServicePageLayout } from "@/components/site/ServicePageLayout";
import {
  appointmentsPage,
  fastFoodPage,
  leadManagementPage,
  patientScreeningPage,
  truckDispatchingPage,
} from "@/content/service-pages";
import { HomePage } from "@/pages/HomePage";
import { MedicalBillingPage } from "@/pages/MedicalBillingPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { TeleradiologyPage } from "@/pages/TeleradiologyPage";

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
        <Route path="/teleradiology-remote-radiology" element={<TeleradiologyPage />} />
        <Route path="/ultrasound-services" element={<Navigate to="/teleradiology-remote-radiology" replace />} />
        <Route path="/x-ray-services" element={<Navigate to="/teleradiology-remote-radiology" replace />} />
        <Route path="/lead-management-services" element={<ServicePageLayout page={leadManagementPage} />} />
        <Route path="/truck-dispatching-services" element={<ServicePageLayout page={truckDispatchingPage} />} />
        <Route path="/fast-food-solutions" element={<ServicePageLayout page={fastFoodPage} />} />
        <Route path="/appointment-scheduling-services" element={<ServicePageLayout page={appointmentsPage} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
