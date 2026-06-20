import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, MapPin, Phone, Check } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/landing/Reveal";
import { getArea, areas } from "@/data/areas";
import { services } from "@/data/services";
import { contact } from "@/data/contact";

const useSeo = (area) => {
  useEffect(() => {
    if (!area) return;
    const title = `Mobile & Computer Repair ${area.name} | Euro Mobile & Computer`;
    const desc = `Mobile phone, PC, laptop and tablet repair for ${area.name}, ${area.county}. Just ${area.distance} miles from our Burnley shop — in-store or by post. Screen replacement, battery, data recovery & unlocking. Free quote.`;
    document.title = title;

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", desc);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/areas/${area.slug}`);

    const ld = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Euro Mobile & Computer",
      description: desc,
      telephone: "+441282761818",
      areaServed: { "@type": "City", name: area.name },
      address: {
        "@type": "PostalAddress",
        streetAddress: "60 Keirby Walk",
        addressLocality: "Burnley",
        postalCode: "BB11 2DE",
        addressRegion: "Lancashire",
        addressCountry: "GB",
      },
    };
    let script = document.getElementById("ld-json-area");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-json-area";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);

    return () => {
      document.title = "Euro Mobile & Computer — Expert Mobile, PC & Tablet Repairs in Burnley";
    };
  }, [area]);
};

export default function AreaPage() {
  const { slug } = useParams();
  const area = getArea(slug);
  useSeo(area);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!area) return <Navigate to="/" replace />;

  const nearby = areas.filter((a) => a.slug !== area.slug).slice(0, 6);

  return (
    <div data-testid="area-page" className="min-h-screen bg-white">
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
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-16 md:pt-14 md:pb-20">
          <nav data-testid="breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-7">
            <Link to="/" className="hover:text-brand-blue">Home</Link>
            <ChevronRight size={14} />
            <a href="/#areas" className="hover:text-brand-blue">Areas</a>
            <ChevronRight size={14} />
            <span className="text-slate-900 font-medium">{area.name}</span>
          </nav>

          <span className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 mb-6">
            <MapPin size={15} className="text-brand-blue" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-blue">
              {area.name}, {area.county} · {area.distance} miles away
            </span>
          </span>

          <h1 className="font-heading font-black tracking-tighter text-slate-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.04] max-w-3xl">
            Mobile &amp; Computer Repair in {area.name}
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Fast, affordable phone, laptop, PC and tablet repairs for {area.name} and the surrounding {area.county} area — visit our Burnley shop or use our free mail-in repair service.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              data-testid="area-cta-quote"
              onClick={() => window.dispatchEvent(new Event("open-quote"))}
              className="group inline-flex items-center justify-center gap-2 bg-brand-yellow text-black font-semibold px-7 py-4 hover:bg-yellow-400 transition-colors"
            >
              Get a free quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue font-semibold px-7 py-4 hover:bg-brand-blue hover:text-white transition-colors"
            >
              <Phone size={17} /> Call {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <Reveal>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              Looking for a trusted repair shop near {area.name}? Euro Mobile &amp; Computer has been fixing phones, tablets, laptops and PCs for customers across {area.county} for over 22 years. We're based at 60 Keirby Walk in Burnley — just {area.distance} miles from {area.name} — and we've built our reputation on quality repairs at fair, competitive prices.
            </p>
            <p>
              Can't get to the shop? No problem. Send us your device and a few photos through our mail-in service, get a transparent fixed-price quote and secure payment link, and we'll post your repaired device straight back to {area.name}. It's the easy way to get an expert repair without leaving home.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Services grid */}
      <section className="bg-[#FAFAFA] border-y border-slate-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="font-heading font-bold tracking-tight text-slate-900 text-2xl md:text-3xl">
              Our repair services for {area.name}
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                  <Link
                    to={`/services/${s.slug}`}
                    data-testid={`area-service-${s.slug}`}
                    className="group block h-full bg-white border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue transition-all duration-300"
                  >
                    <span className="grid h-11 w-11 place-items-center bg-brand-blue text-white mb-4">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-heading font-semibold text-slate-900 group-hover:text-brand-blue transition-colors">
                      {s.name} in {area.name}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2">{s.tagline}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <Reveal>
          <h2 className="font-heading font-bold tracking-tight text-slate-900 text-2xl md:text-3xl mb-8">
            Why {area.name} chooses Euro Mobile &amp; Computer
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            `22 years serving ${area.county}`,
            "Best price guarantee",
            "Free, no-obligation quotes",
            "Mail-in repair across the UK",
          ].map((t, i) => (
            <Reveal key={t} delay={(i % 4) * 0.06}>
              <div className="flex items-start gap-3 bg-[#FAFAFA] border border-slate-200 px-5 py-4 h-full">
                <span className="grid h-6 w-6 place-items-center bg-brand-yellow text-black shrink-0 mt-0.5">
                  <Check size={14} />
                </span>
                <span className="text-slate-700">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl">Need a repair in {area.name}?</h2>
            <p className="text-white/70 mt-2">Get a fast, no-obligation quote — in-store or by post.</p>
          </div>
          <button
            data-testid="area-cta-band"
            onClick={() => window.dispatchEvent(new Event("open-quote"))}
            className="inline-flex items-center gap-2 bg-brand-yellow text-black font-semibold px-7 py-4 hover:bg-yellow-400 transition-colors"
          >
            Get a free quote <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <h2 className="font-heading font-bold tracking-tight text-slate-900 text-2xl mb-6">We also cover nearby areas</h2>
        <div className="flex flex-wrap gap-3">
          {nearby.map((a) => (
            <Link
              key={a.slug}
              to={`/areas/${a.slug}`}
              data-testid={`nearby-${a.slug}`}
              className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              <MapPin size={14} /> {a.name}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
