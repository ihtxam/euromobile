import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { contact } from "@/data/contact";

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
              <li><Link to="/services/mobile-phone-repair" className="hover:text-white transition-colors">Mobile Phone Repair</Link></li>
              <li><Link to="/services/iphone-repair" className="hover:text-white transition-colors">iPhone Repair</Link></li>
              <li><Link to="/services/laptop-pc-repair" className="hover:text-white transition-colors">Laptop &amp; PC Repair</Link></li>
              <li><Link to="/services/tablet-ipad-repair" className="hover:text-white transition-colors">Tablet &amp; iPad Repair</Link></li>
              <li><Link to="/services/data-recovery" className="hover:text-white transition-colors">Data Recovery</Link></li>
              <li><Link to="/services/phone-unlocking" className="hover:text-white transition-colors">Phone Unlocking</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow mb-5">Get in touch</p>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3"><MapPin size={17} className="text-brand-yellow mt-0.5 shrink-0" /> <span>{contact.addressLine1}, {contact.addressLine2}<br/>United Kingdom<br/>
                <a href={contact.directionsHref} target="_blank" rel="noopener noreferrer" data-testid="directions-address" className="inline-flex items-center gap-1.5 mt-2 text-brand-yellow font-medium hover:underline underline-offset-2">
                  <Navigation size={14} /> Get directions
                </a>
              </span></li>
              <li className="flex items-center gap-3"><Phone size={17} className="text-brand-yellow shrink-0" /> <a href={contact.phoneHref} className="hover:text-white transition-colors">{contact.phoneDisplay}</a></li>
              <li className="flex items-center gap-3"><Mail size={17} className="text-brand-yellow shrink-0" /> <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors break-all">{contact.email}</a></li>
              <li className="flex items-center gap-3"><Clock size={17} className="text-brand-yellow shrink-0" /> {contact.hours}</li>
            </ul>
            <div className="mt-5 border border-white/10 overflow-hidden">
              <iframe
                title="Euro Mobile & Computer location"
                src={`https://www.google.com/maps?q=${contact.mapQuery}&output=embed`}
                className="w-full h-40 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={contact.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="directions-map"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-brand-yellow text-black font-semibold px-5 py-3 hover:bg-yellow-400 transition-colors"
            >
              <Navigation size={16} /> Get directions
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Euro Mobile &amp; Computer. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link to="/" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms</Link>
            <button onClick={() => window.dispatchEvent(new Event("open-quote"))} className="hover:text-white transition-colors">Request a repair</button>
          </div>
        </div>
        <p data-testid="designed-by" className="mt-6 text-center text-xs text-white/40">
          Website designed in Switzerland by{" "}
          <a
            href="https://webprintmedia.swiss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow font-medium hover:underline underline-offset-2"
          >
            WebPrintMedia.swiss
          </a>
        </p>
      </div>
    </footer>
  );
};
