import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import LandingPage from "@/pages/LandingPage";
import ServicePage from "@/pages/ServicePage";
import AreaPage from "@/pages/AreaPage";
import ContactPage from "@/pages/ContactPage";
import AboutPage from "@/pages/AboutPage";
import { FloatingWidgets } from "@/components/landing/FloatingWidgets";
import { TopBar } from "@/components/landing/TopBar";

function App() {
  return (
    <div className="App font-body text-slate-900 antialiased">
      <Toaster position="top-center" richColors />
      <TopBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/areas/:slug" element={<AreaPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <FloatingWidgets />
      </BrowserRouter>
    </div>
  );
}

export default App;
