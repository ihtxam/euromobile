import { Camera, FileText, Wrench, Package } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    no: "01",
    icon: Camera,
    title: "Send details & photos",
    desc: "Tell us your device model and the issue, and upload a few photos straight from the form below.",
  },
  {
    no: "02",
    icon: FileText,
    title: "Get a quote & pay",
    desc: "We review and send a transparent fixed-price quote with a secure payment link — pay in advance, no surprises.",
  },
  {
    no: "03",
    icon: Wrench,
    title: "We repair it",
    desc: "Our certified technicians carry out the repair with brand-specific parts and full quality testing.",
  },
  {
    no: "04",
    icon: Package,
    title: "Posted back to you",
    desc: "Your fully repaired device is securely packaged and shipped back to your door anywhere in the UK.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" data-testid="how-it-works" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Mail-in repair</p>
          <h2 className="mt-3 font-heading font-bold tracking-tight text-slate-900 text-3xl md:text-4xl max-w-2xl">
            Can&apos;t visit the shop? Repair by post in four simple steps
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08} testid={`step-${s.no}`}>
              <div className="h-full bg-white p-8 group hover:bg-[#FAFAFA] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-black text-5xl text-brand-blue/15 group-hover:text-brand-blue/30 transition-colors">
                    {s.no}
                  </span>
                  <span className="grid h-11 w-11 place-items-center border border-slate-200 text-brand-blue group-hover:bg-brand-yellow group-hover:text-black group-hover:border-brand-yellow transition-colors">
                    <s.icon size={20} />
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-slate-900 mt-6">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
