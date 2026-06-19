import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Check, Plus, Minus, Phone } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/landing/Reveal";
import { getService, services } from "@/data/services";
import { contact } from "@/data/contact";

const useSeo = (service) => {
  useEffect(() => {
    if (!service) return;
    document.title = service.metaTitle;

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", service.metaDescription);
    setMeta("property", "og:title", service.metaTitle);
    setMeta("property", "og:description", service.metaDescription);
    setMeta("property", "og:type", "website");

    // canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/services/${service.slug}`);

    // JSON-LD structured data (Service + FAQ)
    const ld = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          description: service.metaDescription,
          areaServed: ["Burnley", "Nelson", "Accrington", "Padiham", "Lancashire"],
          provider: {
            "@type": "LocalBusiness",
            name: "Euro Mobile & Computer",
            telephone: "+441282761818",
            address: {
              "@type": "PostalAddress",
              streetAddress: "60 Keirby Walk",
              addressLocality: "Burnley",
              postalCode: "BB11 2DE",
              addressRegion: "Lancashire",
              addressCountry: "GB",
            },
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    };
    let script = document.getElementById("ld-json-service");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "ld-json-service";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ld);

    return () => {
      document.title = "Euro Mobile & Computer — Expert Mobile, PC & Tablet Repairs in Burnley";
    };
  }, [service]);
};

const Faq = ({ q, a, idx }) => {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div className="border border-slate-200 bg-white">
      <button
        data-testid={`faq-toggle-${idx}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-heading font-semibold text-slate-900">{q}</span>
        {open ? <Minus size={18} className="text-brand-blue shrink-0" /> : <Plus size={18} className="text-brand-blue shrink-0" />}
      </button>
      {open && <p className="px-6 pb-5 -mt-1 text-slate-600 text-sm leading-relaxed">{a}</p>}
    </div>
  );
};

export default function ServicePage() {
  const { slug } = useParams();
  const service = getService(slug);
  useSeo(service);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const related = service.related.map(getService).filter(Boolean);

  return (
    <div data-testid="service-page" className="min-h-screen bg-white">
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
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-16 md:pt-14 md:pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav data-testid="breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 mb-7">
              <Link to="/" className="hover:text-brand-blue">Home</Link>
              <ChevronRight size={14} />
              <a href="/#services" className="hover:text-brand-blue">Services</a>
              <ChevronRight size={14} />
              <span className="text-slate-900 font-medium">{service.name}</span>
            </nav>

            <span className="inline-grid h-12 w-12 place-items-center bg-brand-blue text-white mb-6">
              <Icon size={24} />
            </span>
            <h1 className="font-heading font-black tracking-tighter text-slate-900 text-4xl sm:text-5xl leading-[1.05]">
              {service.h1}
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">{service.tagline}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/#repair"
                data-testid="service-cta-primary"
                className="group inline-flex items-center justify-center gap-2 bg-brand-yellow text-black font-semibold px-7 py-4 hover:bg-yellow-400 transition-colors"
              >
                Get a free quote
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue font-semibold px-7 py-4 hover:bg-brand-blue hover:text-white transition-colors"
              >
                <Phone size={17} /> Call {contact.phoneDisplay}
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative border border-slate-200 bg-white p-2 shadow-sm"
          >
            <img src={service.image} alt={service.h1} className="w-full h-[320px] md:h-[420px] object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Intro + Features */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 grid lg:grid-cols-2 gap-14">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Overview</p>
          <h2 className="mt-3 font-heading font-bold tracking-tight text-slate-900 text-3xl">
            Why choose us for {service.name.toLowerCase()}
          </h2>
          <div className="mt-6 space-y-5 text-slate-600 leading-relaxed">
            {service.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {service.features.map((f) => (
              <div key={f.title} className="bg-white p-6">
                <h3 className="font-heading font-semibold text-slate-900">{f.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Common issues */}
      <section className="bg-[#FAFAFA] border-y border-slate-200 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <h2 className="font-heading font-bold tracking-tight text-slate-900 text-3xl">Common problems we fix</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.issues.map((issue, i) => (
              <Reveal key={issue} delay={(i % 3) * 0.06}>
                <div className="flex items-start gap-3 bg-white border border-slate-200 px-5 py-4">
                  <span className="grid h-6 w-6 place-items-center bg-brand-yellow text-black shrink-0 mt-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-slate-700">{issue}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue text-center">FAQ</p>
          <h2 className="mt-3 font-heading font-bold tracking-tight text-slate-900 text-3xl text-center">
            {service.name} — your questions answered
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {service.faqs.map((f, i) => (
            <Faq key={f.q} {...f} idx={i} />
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl">Ready to get your device fixed?</h2>
            <p className="text-white/70 mt-2">Send your details and photos for a fast, no-obligation quote.</p>
          </div>
          <Link
            to="/#repair"
            data-testid="service-cta-band"
            className="inline-flex items-center gap-2 bg-brand-yellow text-black font-semibold px-7 py-4 hover:bg-yellow-400 transition-colors"
          >
            Request a repair <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Related services */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <h2 className="font-heading font-bold tracking-tight text-slate-900 text-2xl mb-8">Related services</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {related.map((r) => {
            const RIcon = r.icon;
            return (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                data-testid={`related-${r.slug}`}
                className="group bg-white border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue transition-all duration-300"
              >
                <span className="grid h-11 w-11 place-items-center bg-brand-blue text-white mb-4">
                  <RIcon size={20} />
                </span>
                <h3 className="font-heading font-semibold text-slate-900 group-hover:text-brand-blue transition-colors">{r.name}</h3>
                <p className="text-sm text-slate-600 mt-2">{r.tagline}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export { services };
