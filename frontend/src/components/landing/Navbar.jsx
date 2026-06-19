import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { contact } from "@/data/contact";

const links = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why us", href: "#why-us" },
  { label: "Contact", href: "#repair" },
];

const Logo = () => (
  <Link to="/" data-testid="nav-logo" className="flex items-center gap-2 group">
    <span className="grid h-9 w-9 place-items-center bg-brand-blue text-brand-yellow font-heading font-black text-lg leading-none">
      E
    </span>
    <span className="flex flex-col leading-none">
      <span className="font-heading font-extrabold tracking-tight text-slate-900 text-[15px]">
        EURO MOBILE
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        &amp; Computer Repair
      </span>
    </span>
  </Link>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const prefix = pathname === "/" ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-slate-200"
          : "bg-white/0 backdrop-blur-0 border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={`${prefix}${l.href}`}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={contact.phoneHref}
            data-testid="nav-call"
            className="text-sm font-semibold text-brand-blue hover:underline underline-offset-4"
          >
            {contact.phoneDisplay}
          </a>
          <a
            href={`${prefix}#repair`}
            data-testid="nav-cta"
            className="bg-brand-yellow text-black text-sm font-semibold px-5 py-2.5 hover:bg-yellow-400 transition-colors"
          >
            Request repair
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-10 w-10 place-items-center text-slate-800"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div data-testid="nav-mobile-menu" className="md:hidden bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={`${prefix}${l.href}`}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm font-medium text-slate-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${prefix}#repair`}
            onClick={() => setOpen(false)}
            className="mt-2 bg-brand-yellow text-black text-sm font-semibold px-5 py-3 text-center"
          >
            Request repair
          </a>
        </div>
      )}
    </header>
  );
};
