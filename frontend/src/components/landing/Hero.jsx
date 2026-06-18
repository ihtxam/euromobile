import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const rotating = ["Computers.", "Mobiles.", "Tablets.", "iPads."];

export const Hero = () => {
  return (
    <section id="top" data-testid="hero" className="relative overflow-hidden bg-[#FAFAFA]">
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1E22A8 1px, transparent 1px), linear-gradient(90deg, #1E22A8 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={item} className="inline-flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 mb-7">
            <span className="h-2 w-2 bg-brand-yellow" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">
              Expert repair services · Burnley
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-heading font-black tracking-tighter text-slate-900 text-4xl sm:text-5xl lg:text-6xl leading-[1.02]"
          >
            We fix{" "}
            <span className="relative inline-block text-brand-blue">
              <span className="relative z-10">{rotating[0]}</span>
              <span className="absolute left-0 bottom-1 z-0 h-3 w-full bg-brand-yellow/70" />
            </span>
            <br className="hidden sm:block" /> Mobiles, Tablets &amp; more.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-600">
            Fast, reliable and affordable repairs — in-store or fully by post.
            Send us your device and details, get a transparent quote and secure
            payment link, and we ship it back fixed across the UK.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href="#repair"
              data-testid="hero-cta-primary"
              className="group inline-flex items-center justify-center gap-2 bg-brand-yellow text-black font-semibold px-7 py-4 hover:bg-yellow-400 transition-colors"
            >
              Send your device today
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center justify-center border-2 border-brand-blue text-brand-blue font-semibold px-7 py-4 hover:bg-brand-blue hover:text-white transition-colors"
            >
              Our services
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand-blue" /> Best price guarantee
            </span>
            <span className="inline-flex items-center gap-2">
              <Star size={16} className="text-brand-blue" /> 8+ years experience
            </span>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <div className="relative border border-slate-200 bg-white p-2 shadow-sm">
            <img
              src="https://images.pexels.com/photos/6755075/pexels-photo-6755075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Technician repairing a smartphone"
              className="w-full h-[380px] md:h-[460px] object-cover"
              loading="eager"
            />
          </div>
          {/* floating badge */}
          <div className="absolute -bottom-5 -left-3 sm:left-6 bg-brand-blue text-white px-5 py-4 shadow-lg">
            <p className="font-heading font-black text-2xl leading-none">&lt; 1 hr</p>
            <p className="text-xs text-white/70 mt-1">most in-store fixes</p>
          </div>
          <div className="absolute -top-4 -right-3 sm:right-6 bg-brand-yellow text-black px-4 py-3 shadow-lg">
            <p className="font-heading font-extrabold text-sm leading-none">Free quote</p>
            <p className="text-[11px] text-black/60 mt-1">no obligation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
