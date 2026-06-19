import { Clock, Wrench, Users, Headphones } from "lucide-react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";

const stats = [
  { icon: Clock, to: 22, suffix: "+", label: "Years of experience", sub: "Serving Lancashire since 2004" },
  { icon: Wrench, to: 75000, suffix: "+", label: "Devices fixed", sub: "Mobiles, tablets, laptops & PCs" },
  { icon: Users, to: 38000, suffix: "+", label: "Happy customers", sub: "Burnley, Nelson, Accrington & beyond" },
  { icon: Headphones, static: "24/7", label: "Free phone support", sub: "Talk to a real technician" },
];

export const Trust = () => {
  return (
    <section id="why-us" data-testid="why-us" className="bg-brand-blue text-white py-24 md:py-28 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">Why choose us</p>
          <h2 className="mt-3 font-heading font-bold tracking-tight text-3xl md:text-4xl max-w-2xl">
            22 years of trusted repairs across Lancashire
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} testid={`stat-${i}`}>
              <div className="border-t-2 border-white/15 pt-6">
                <s.icon className="text-brand-yellow" size={26} />
                <p data-testid={`stat-value-${i}`} className="font-heading font-black text-4xl md:text-5xl mt-5 tracking-tight">
                  {s.static ? (
                    s.static
                  ) : (
                    <Counter to={s.to} suffix={s.suffix} />
                  )}
                </p>
                <p className="font-semibold mt-2">{s.label}</p>
                <p className="text-white/55 text-sm mt-1">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
