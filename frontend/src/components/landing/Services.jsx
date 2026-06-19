import { Smartphone, Laptop, HardDrive, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { services } from "@/data/services";

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
            <Link to="/services/mobile-phone-repair" className="group block h-full bg-white border border-slate-200 p-8 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue transition-all duration-300">
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
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                View service <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          {/* PC */}
          <Reveal testid="service-pc" delay={0.08} className="md:col-span-3">
            <Link to="/services/laptop-pc-repair" className="group block h-full bg-white border border-slate-200 p-8 hover:-translate-y-1 hover:shadow-xl hover:border-brand-blue transition-all duration-300">
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
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                View service <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          {/* Data */}
          <Reveal testid="service-data" delay={0.16} className="md:col-span-3">
            <Link to="/services/data-recovery" className="group block h-full bg-brand-blue text-white p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
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
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-yellow">
                View service <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>

        {/* All services — SEO discoverable links */}
        <Reveal delay={0.1}>
          <div className="mt-10 border border-slate-200 bg-white p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5">All repair services</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    data-testid={`all-service-${s.slug}`}
                    className="group flex items-center gap-3 py-3 border-b border-slate-100 text-slate-700 hover:text-brand-blue transition-colors"
                  >
                    <Icon size={18} className="text-brand-blue shrink-0" />
                    <span className="font-medium">{s.name}</span>
                    <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
