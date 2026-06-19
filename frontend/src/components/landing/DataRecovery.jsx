import { HardDrive, Smartphone, Laptop, MemoryStick, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";

const sources = [
  { icon: MemoryStick, title: "Memory & SD cards", desc: "Recover photos and videos from corrupt, formatted or unreadable SD, microSD and CF cards." },
  { icon: HardDrive, title: "Hard drives & USB", desc: "Get files back from failing, clicking or accidentally formatted hard drives, SSDs and USB sticks." },
  { icon: Laptop, title: "Laptops & PCs", desc: "Rescue documents and data from computers that won't boot or have a damaged drive." },
  { icon: Smartphone, title: "Mobiles & tablets", desc: "Retrieve photos, contacts and messages from phones that won't switch on." },
  { icon: Droplets, title: "Water-damaged devices", desc: "Specialist recovery from liquid-damaged phones, laptops and drives." },
];

export const DataRecovery = () => {
  const openQuote = () => window.dispatchEvent(new Event("open-quote"));

  return (
    <section id="data-recovery" data-testid="data-recovery-section" className="bg-slate-950 text-white py-24 md:py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FFD400 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">Data recovery</p>
              <h2 className="mt-3 font-heading font-bold tracking-tight text-3xl md:text-4xl">
                Lost or deleted data? We can probably get it back
              </h2>
              <p className="mt-5 text-white/60 leading-relaxed">
                Accidentally deleted precious photos, formatted the wrong card, or
                a device that won't turn on? Our specialists recover deleted and
                formatted data from cards, laptops, mobiles, hard drives and even
                physically damaged devices — quickly and confidentially.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                data-testid="data-recovery-quote"
                onClick={openQuote}
                className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-black font-semibold px-6 py-3.5 hover:bg-yellow-400 transition-colors"
              >
                Free assessment <ArrowRight size={17} />
              </button>
              <Link
                to="/services/data-recovery"
                data-testid="data-recovery-learn"
                className="inline-flex items-center justify-center border-2 border-white/25 text-white font-semibold px-6 py-3.5 hover:bg-white hover:text-slate-900 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10">
          {sources.map((s, i) => (
            <Reveal key={s.title} delay={(i % 5) * 0.07} testid={`recovery-${i}`}>
              <div className="h-full bg-slate-950 p-6 hover:bg-slate-900 transition-colors group">
                <span className="grid h-11 w-11 place-items-center bg-brand-yellow text-black group-hover:scale-105 transition-transform">
                  <s.icon size={20} />
                </span>
                <h3 className="font-heading font-semibold text-white mt-5">{s.title}</h3>
                <p className="text-sm text-white/55 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-white/40">
            No-obligation assessment · We always explain the likelihood and cost before any chargeable work begins.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
