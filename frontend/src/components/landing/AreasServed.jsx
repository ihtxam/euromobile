import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { areas } from "@/data/areas";

export const AreasServed = () => {
  return (
    <section id="areas" data-testid="areas-served" className="bg-white py-24 md:py-32 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Areas we cover</p>
          <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-heading font-bold tracking-tight text-slate-900 text-3xl md:text-4xl max-w-2xl">
              Repairs across Burnley &amp; surrounding Lancashire
            </h2>
            <p className="text-slate-600 max-w-sm md:text-right">
              Based at 60 Keirby Walk, Burnley — serving every town within 15 miles, plus nationwide mail-in repairs.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200">
            {areas.map((a) => (
              <Link
                key={a.slug}
                to={`/areas/${a.slug}`}
                data-testid={`area-link-${a.slug}`}
                className="group bg-white px-5 py-5 hover:bg-[#FAFAFA] transition-colors"
              >
                <span className="flex items-center gap-2 text-slate-900 font-heading font-semibold group-hover:text-brand-blue transition-colors">
                  <MapPin size={15} className="text-brand-blue" /> {a.name}
                </span>
                <span className="block text-xs text-slate-400 mt-1">{a.distance} miles · {a.county}</span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
