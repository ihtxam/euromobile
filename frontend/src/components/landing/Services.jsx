import { Smartphone, Laptop, HardDrive, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

export const Services = () => {
  return (
    <section id="services" data-testid="services" className="bg-[#FAFAFA] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">What we do</p>
          <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-heading font-bold tracking-tight text-slate-900 text-3xl md:text-4xl max-w-2xl">
              Expert repairs for every device you own
            </h2>
            <p className="text-slate-600 max-w-sm md:text-right">
              ANY brand, ANY problem. Carried out by a small team of certified
              technicians using brand-specific parts.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Mobile — large */}
          <Reveal testid="service-mobile" className="md:col-span-6">
            <div className="group h-full bg-white border border-slate-200 p-8 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue transition-all duration-300 flex flex-col">
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center bg-brand-blue text-white">
                  <Smartphone size={22} />
                </span>
                <ArrowUpRight className="text-slate-300 group-hover:text-brand-blue transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-xl md:text-2xl text-slate-900 mt-6">
                Mobile Repairs &amp; Unlocking
              </h3>
              <p className="text-slate-600 mt-3 max-w-md">
                iPhone &amp; Samsung broken LCDs, water damage, charging ports,
                battery swaps, jailbreaking and network unlocking — any brand,
                any problem.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Screen replacement", "Water damage", "Charging port", "Unlocking"].map((t) => (
                  <span key={t} className="text-xs font-medium border border-slate-200 px-3 py-1.5 text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* PC */}
          <Reveal testid="service-pc" delay={0.08} className="md:col-span-3">
            <div className="group h-full bg-white border border-slate-200 p-8 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue transition-all duration-300 flex flex-col">
              <span className="grid h-12 w-12 place-items-center bg-slate-900 text-brand-yellow">
                <Laptop size={22} />
              </span>
              <h3 className="font-heading font-semibold text-xl text-slate-900 mt-6">
                PC &amp; Laptop Repairs
              </h3>
              <p className="text-slate-600 mt-3 text-sm">
                System upgrades, RAM &amp; SSD installs, virus removal, speed
                optimisation and screen replacement.
              </p>
            </div>
          </Reveal>

          {/* Data */}
          <Reveal testid="service-data" delay={0.16} className="md:col-span-3">
            <div className="group h-full bg-brand-blue text-white p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
              <span className="grid h-12 w-12 place-items-center bg-brand-yellow text-black">
                <HardDrive size={22} />
              </span>
              <h3 className="font-heading font-semibold text-xl mt-6">
                Data Recovery
              </h3>
              <p className="text-white/70 mt-3 text-sm">
                Recover deleted or formatted photos and files from USB drives,
                hard disks and memory cards.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
