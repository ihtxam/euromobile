import { Clock, BadgePoundSterling, ThumbsUp, Headphones } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { icon: Clock, value: "8+", label: "Years of experience", sub: "Serving Lancashire since 2016" },
  { icon: BadgePoundSterling, value: "100%", label: "Best price guarantee", sub: "Quality work, fair prices" },
  { icon: ThumbsUp, value: "1000s", label: "Happy customers", sub: "Burnley, Nelson, Accrington & beyond" },
  { icon: Headphones, value: "24/7", label: "Free phone support", sub: "Talk to a real technician" },
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
            Trusted by thousands across Lancashire
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} testid={`stat-${i}`}>
              <div className="border-t-2 border-white/15 pt-6">
                <s.icon className="text-brand-yellow" size={26} />
                <p className="font-heading font-black text-4xl md:text-5xl mt-5 tracking-tight">{s.value}</p>
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
