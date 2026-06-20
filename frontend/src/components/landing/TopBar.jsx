import { useState, useEffect } from "react";
import { Phone, MessageCircle, Clock } from "lucide-react";
import { contact } from "@/data/contact";

// Compute open/closed status using UK (Europe/London) time. Mon–Sat 10:00–18:00.
const getStatus = () => {
  const now = new Date();
  const uk = new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }));
  const day = uk.getDay(); // 0 Sun … 6 Sat
  const hour = uk.getHours() + uk.getMinutes() / 60;
  const isOpen = day >= 1 && day <= 6 && hour >= 10 && hour < 18;
  return { isOpen };
};

export const TopBar = () => {
  const [{ isOpen }, setStatus] = useState(getStatus());

  useEffect(() => {
    const id = setInterval(() => setStatus(getStatus()), 60000);
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
          <span className="hidden sm:inline text-white/45">·</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-white/60">
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
