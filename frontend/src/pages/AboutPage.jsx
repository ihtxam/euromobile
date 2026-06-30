import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, BadgePoundSterling, Users, Wrench, Clock, MapPin } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/landing/Reveal";
import { Counter } from "@/components/landing/Counter";
import { SEO, localBusinessSchema } from "@/components/SEO";
import { contact } from "@/data/contact";

const values = [
  { icon: ShieldCheck, title: "Quality first", desc: "Brand-specific parts, careful workmanship and a guarantee on every repair." },
  { icon: BadgePoundSterling, title: "Honest pricing", desc: "Transparent, fixed-price quotes with a best price guarantee — no hidden fees." },
  { icon: Users, title: "Local & trusted", desc: "A small, skilled team that thousands of Lancashire customers come back to." },
  { icon: Wrench, title: "Any device, any fault", desc: "Phones, tablets, laptops and PCs — from cracked screens to data recovery." },
];

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="about-page" className="min-h-screen bg-white">
      <SEO
        title="About Us — 22 Years of Repairs in Burnley"
        description="Euro Mobile & Computer is a trusted mobile, computer and tablet repair shop in Burnley with 22 years of experience. Quality repairs, honest prices and friendly local service across Lancashire."
        canonical="https://euromobilecomputer.co.uk/about"
        jsonLd={localBusinessSchema}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#FAFAFA] border-b border-slate-200">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#1E22A8 1px, transparent 1px), linear-gradient(90deg, #1E22A8 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16 md:pt-16 md:pb-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Our story</p>
          <h1 className="mt-3 font-heading font-black tracking-tighter text-slate-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            22 years fixing the tech that Lancashire relies on
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Euro Mobile &amp; Computer started with a simple goal: honest, high-quality repairs at fair prices, done by people who genuinely know their craft.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <Reveal>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              For over two decades, our small team of technicians has repaired tens of thousands of phones, tablets, laptops and PCs from our shop at {contact.addressLine1} in Burnley. From shattered iPhone screens and tired batteries to failing hard drives and stubborn network locks, we've seen — and fixed — just about everything.
            </p>
            <p>
              We've built our reputation on doing things properly: using quality, brand-specific parts, explaining the problem in plain English, and quoting a fair fixed price before any work begins. It's why customers from {contact.addressLine2.split(",")[0]} and across Lancashire keep coming back, and why so many find us through word of mouth.
            </p>
            <p>
              Today we also offer a nationwide mail-in repair service — send us your device and photos, get a transparent quote and secure payment link, and we'll post it back to you fully repaired. Same expert service, wherever you are in the UK.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="bg-brand-blue text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Clock, to: 22, suffix: "+", label: "Years in business" },
            { icon: Wrench, to: 75000, suffix: "+", label: "Devices fixed" },
            { icon: Users, to: 38000, suffix: "+", label: "Happy customers" },
            { icon: MapPin, to: 15, suffix: "+", label: "Towns served" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-t-2 border-white/15 pt-6">
                <s.icon className="text-brand-yellow" size={24} />
                <p className="font-heading font-black text-4xl md:text-5xl mt-4 tracking-tight">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="font-semibold mt-2">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <Reveal>
          <h2 className="font-heading font-bold tracking-tight text-slate-900 text-3xl md:text-4xl">What we stand for</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 4) * 0.07}>
              <div className="h-full bg-white border border-slate-200 p-7 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue transition-all duration-300">
                <span className="grid h-12 w-12 place-items-center bg-brand-blue text-white">
                  <v.icon size={22} />
                </span>
                <h3 className="font-heading font-semibold text-lg text-slate-900 mt-5">{v.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl">Got a device that needs fixing?</h2>
            <p className="text-white/60 mt-2">Get a fast, no-obligation quote today.</p>
          </div>
          <div className="flex gap-3">
            <button
              data-testid="about-cta-quote"
              onClick={() => window.dispatchEvent(new Event("open-quote"))}
              className="inline-flex items-center gap-2 bg-brand-yellow text-black font-semibold px-7 py-4 hover:bg-yellow-400 transition-colors"
            >
              Get a free quote <ArrowRight size={18} />
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/25 text-white font-semibold px-7 py-4 hover:bg-white hover:text-slate-900 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
