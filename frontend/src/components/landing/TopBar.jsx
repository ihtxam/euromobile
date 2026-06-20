import { useState, useEffect } from "react";
import { Phone, MessageCircle, Clock } from "lucide-react";
import { contact } from "@/data/contact";

const OPEN_HOUR = 10;
const CLOSE_HOUR = 18;
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Current time in the shop's timezone (Europe/London)
const ukNow = () => new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/London" }));

const isOpenAt = (d) => {
  const day = d.getDay();
  const hour = d.getHours() + d.getMinutes() / 60;
  return day >= 1 && day <= 6 && hour >= OPEN_HOUR && hour < CLOSE_HOUR;
};

// Find the next opening Date (Mon–Sat at 10:00)
const nextOpen = (now) => {
  for (let i = 0; i < 8; i++) {
    const c = new Date(now);
    c.setDate(now.getDate() + i);
    c.setHours(OPEN_HOUR, 0, 0, 0);
    if (c.getDay() >= 1 && c.getDay() <= 6 && c > now) return c;
  }
  return null;
};

const getStatus = () => {
  const now = ukNow();
  const open = isOpenAt(now);
  if (open) return { isOpen: true, countdown: "" };

  const next = nextOpen(now);
  if (!next) return { isOpen: false, countdown: "" };

  const diffMs = next - now;
  const totalMin = Math.floor(diffMs / 60000);
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  const s = Math.floor((diffMs % 60000) / 1000);

  let countdown;
  if (diffMs <= 12 * 3600 * 1000) {
    // within 12 hours — show live countdown
    countdown = h > 0 ? `Opens in ${h}h ${m}m ${s}s` : `Opens in ${m}m ${s}s`;
  } else {
    countdown = `Opens ${DAYS[next.getDay()]} at 10:00`;
  }
  return { isOpen: false, countdown };
};

export const TopBar = () => {
  const [{ isOpen, countdown }, setStatus] = useState(getStatus());

  useEffect(() => {
    const id = setInterval(() => setStatus(getStatus()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div data-testid="top-bar" className="w-full bg-slate-950 text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-10 flex items-center justify-between gap-4">
        <div data-testid="open-status" className="flex items-center gap-2.5 min-w-0">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            {isOpen && (
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
            )}
            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                isOpen ? "bg-green-400" : "bg-amber-400"
              }`}
            />
          </span>
          <span className="font-semibold truncate">
            {isOpen ? "We're open now" : "Currently closed"}
          </span>
          {!isOpen && countdown && (
            <span data-testid="open-countdown" className="inline-flex items-center gap-1.5 bg-amber-400/15 text-amber-300 px-2 py-0.5 text-xs font-medium tabular-nums">
              {countdown}
            </span>
          )}
          <span className="hidden md:inline text-white/45">·</span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-white/60">
            <Clock size={13} /> {contact.hours}
          </span>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" data-testid="topbar-whatsapp" className="hidden sm:inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors">
            <MessageCircle size={14} className="text-[#25D366]" /> WhatsApp
          </a>
          <a href={contact.phoneHref} data-testid="topbar-call" className="inline-flex items-center gap-1.5 font-semibold text-brand-yellow hover:underline underline-offset-2">
            <Phone size={14} /> {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};
