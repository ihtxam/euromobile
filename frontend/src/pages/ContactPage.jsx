import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { RepairForm } from "@/components/landing/RepairForm";
import { Reveal } from "@/components/landing/Reveal";
import { SEO, localBusinessSchema } from "@/components/SEO";
import { contact } from "@/data/contact";

const items = [
  { icon: MapPin, label: "Visit the shop", value: `${contact.addressLine1}, ${contact.addressLine2}`, href: contact.directionsHref },
  { icon: Phone, label: "Call us", value: contact.phoneDisplay, href: contact.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: contact.whatsappDisplay, href: contact.whatsappHref },
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Clock, label: "Opening hours", value: contact.hours },
];

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="contact-page" className="min-h-screen bg-white">
      <SEO
        title="Contact Us — Phone & Computer Repair Shop in Burnley"
        description={`Contact Euro Mobile & Computer in Burnley. Visit us at ${contact.addressFull}, call ${contact.phoneDisplay}, WhatsApp or email. Open ${contact.hours}. In-store & nationwide mail-in repairs.`}
        canonical="https://euromobilecomputer.co.uk/contact"
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Get in touch</p>
          <h1 className="mt-3 font-heading font-black tracking-tighter text-slate-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Contact Euro Mobile &amp; Computer
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl">
            Pop into our Burnley shop, give us a call, or send your device by post. We're always happy to give a free, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Details + map */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <div className="space-y-px bg-slate-200 border border-slate-200">
            {items.map((it) => {
              const Inner = (
                <div className="bg-white p-6 flex items-start gap-4 group">
                  <span className="grid h-11 w-11 place-items-center bg-brand-blue text-white shrink-0">
                    <it.icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{it.label}</p>
                    <p className="text-slate-900 font-medium mt-1 group-hover:text-brand-blue transition-colors">{it.value}</p>
                  </div>
                </div>
              );
              return it.href ? (
                <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" data-testid={`contact-${it.label.split(" ")[0].toLowerCase()}`}>
                  {Inner}
                </a>
              ) : (
                <div key={it.label}>{Inner}</div>
              );
            })}
          </div>
          <a
            href={contact.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="contact-directions"
            className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-brand-yellow text-black font-semibold px-6 py-4 hover:bg-yellow-400 transition-colors"
          >
            <Navigation size={17} /> Get directions
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-slate-200 overflow-hidden h-full min-h-[420px]">
            <iframe
              title="Euro Mobile & Computer location"
              src={`https://www.google.com/maps?q=${contact.mapQuery}&output=embed`}
              className="w-full h-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      <RepairForm />
      <Footer />
    </div>
  );
}
