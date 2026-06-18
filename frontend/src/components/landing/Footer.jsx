import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <span className="grid h-9 w-9 place-items-center bg-brand-yellow text-black font-heading font-black text-lg">E</span>
              <span className="font-heading font-extrabold tracking-tight text-lg">EURO MOBILE &amp; COMPUTER</span>
            </div>
            <p className="text-white/55 max-w-sm text-sm leading-relaxed">
              Sales. Service. Repair. Accessories. Quality mobile, computer and
              tablet repairs in Burnley — in-store and by post across the UK.
            </p>
            <div className="mt-6 flex gap-2">
              {["Apple", "Samsung", "Huawei", "Windows"].map((b) => (
                <span key={b} className="text-[11px] font-medium border border-white/15 px-2.5 py-1 text-white/50">{b}</span>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow mb-5">Services</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Mobile Repairs &amp; Unlocking</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">PC &amp; Laptop Repairs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Data Recovery</a></li>
              <li><a href="#repair" className="hover:text-white transition-colors">Mail-in Repair</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow mb-5">Get in touch</p>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3"><MapPin size={17} className="text-brand-yellow mt-0.5" /> Burnley, Lancashire, UK</li>
              <li className="flex items-center gap-3"><Phone size={17} className="text-brand-yellow" /> Free 24/7 phone support</li>
              <li className="flex items-center gap-3"><Mail size={17} className="text-brand-yellow" /> info@euromobilecomputer.co.uk</li>
              <li className="flex items-center gap-3"><Clock size={17} className="text-brand-yellow" /> Mon–Sat, 10am–6pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Euro Mobile &amp; Computer. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#top" className="hover:text-white transition-colors">Privacy</a>
            <a href="#top" className="hover:text-white transition-colors">Terms</a>
            <a href="#repair" className="hover:text-white transition-colors">Request a repair</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
