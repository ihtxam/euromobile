import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { MessageCircle, Phone, X, Plus, Loader2, FileText } from "lucide-react";
import { contact } from "@/data/contact";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const deviceTypes = ["Mobile / Smartphone", "Tablet / iPad", "Laptop", "Desktop PC", "Data Recovery", "Other"];

const QuoteModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    device_type: deviceTypes[0],
    device_model: "",
    issue: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.device_model || !form.issue) {
      toast.error("Please fill in your name, phone, device and the issue.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/repair-requests`, { ...form, photos: [] });
      toast.success("Quote request sent! We'll call or email you shortly.");
      onClose();
      setForm({ name: "", phone: "", email: "", device_type: deviceTypes[0], device_model: "", issue: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please call us on " + contact.phoneDisplay);
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all";

  return (
    <div
      data-testid="quote-modal"
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-lg bg-white border border-slate-200 shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="flex items-center justify-between bg-brand-blue text-white px-6 py-4">
          <div>
            <p className="font-heading font-bold text-lg leading-none">Get a free quote</p>
            <p className="text-white/70 text-xs mt-1">No obligation · fast response</p>
          </div>
          <button data-testid="quote-modal-close" onClick={onClose} className="grid h-9 w-9 place-items-center hover:bg-white/10" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={submit} className="p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input data-testid="quote-name" className={inputCls} placeholder="Full name *" value={form.name} onChange={update("name")} />
            <input data-testid="quote-phone" className={inputCls} placeholder="Phone *" value={form.phone} onChange={update("phone")} />
          </div>
          <input data-testid="quote-email" type="email" className={inputCls} placeholder="Email (optional)" value={form.email} onChange={update("email")} />
          <div className="grid sm:grid-cols-2 gap-4">
            <select data-testid="quote-device-type" className={inputCls} value={form.device_type} onChange={update("device_type")}>
              {deviceTypes.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <input data-testid="quote-model" className={inputCls} placeholder="Device model *" value={form.device_model} onChange={update("device_model")} />
          </div>
          <textarea data-testid="quote-issue" rows={3} className={inputCls} placeholder="Describe the issue *" value={form.issue} onChange={update("issue")} />
          <button
            data-testid="quote-submit"
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-yellow text-black font-semibold px-7 py-3.5 hover:bg-yellow-400 transition-colors disabled:opacity-60"
          >
            {loading ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : "Request my quote"}
          </button>
          <p className="text-xs text-slate-400 text-center">
            Prefer to talk? Call <a href={contact.phoneHref} className="text-brand-blue font-medium">{contact.phoneDisplay}</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export const FloatingWidgets = () => {
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  // allow other components to open the quote modal
  useEffect(() => {
    const handler = () => setQuoteOpen(true);
    window.addEventListener("open-quote", handler);
    return () => window.removeEventListener("open-quote", handler);
  }, []);

  const Action = ({ href, onClick, label, color, icon: Icon, testid }) => {
    const inner = (
      <>
        <span className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 whitespace-nowrap shadow-lg">{label}</span>
        <span className={`grid h-12 w-12 place-items-center text-white shadow-lg ${color}`}>
          <Icon size={22} />
        </span>
      </>
    );
    const cls = "flex items-center gap-3 justify-end";
    return href ? (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" data-testid={testid} className={cls}>
        {inner}
      </a>
    ) : (
      <button onClick={onClick} data-testid={testid} className={cls}>
        {inner}
      </button>
    );
  };

  return (
    <>
      <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex flex-col items-end gap-3">
        {open && (
          <div className="flex flex-col items-end gap-3 mb-1 animate-in fade-in slide-in-from-bottom-2">
            <Action testid="fab-whatsapp" href={contact.whatsappHref} label="Chat on WhatsApp" color="bg-[#25D366]" icon={MessageCircle} />
            <Action testid="fab-call" href={contact.phoneHref} label={`Call ${contact.phoneDisplay}`} color="bg-brand-blue" icon={Phone} />
            <Action testid="fab-quote" onClick={() => { setQuoteOpen(true); setOpen(false); }} label="Get a free quote" color="bg-slate-900" icon={FileText} />
          </div>
        )}
        <button
          data-testid="fab-toggle"
          onClick={() => setOpen((v) => !v)}
          className={`grid h-14 w-14 place-items-center text-white shadow-xl transition-colors ${open ? "bg-slate-900" : "bg-[#25D366]"}`}
          aria-label="Contact options"
        >
          {open ? <X size={26} /> : <MessageCircle size={26} />}
        </button>
      </div>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};
