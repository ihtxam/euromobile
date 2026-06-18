import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { BrandsMarquee } from "@/components/landing/BrandsMarquee";
import { Services } from "@/components/landing/Services";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Trust } from "@/components/landing/Trust";
import { RepairForm } from "@/components/landing/RepairForm";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div data-testid="landing-page" className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BrandsMarquee />
        <Services />
        <HowItWorks />
        <Trust />
        <RepairForm />
      </main>
      <Footer />
    </div>
  );
}
