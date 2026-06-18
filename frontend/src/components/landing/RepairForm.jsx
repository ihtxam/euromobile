import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Upload, X, Loader2, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const deviceTypes = ["Mobile / Smartphone", "Tablet / iPad", "Laptop", "Desktop PC", "Other"];

const initial = {
  name: "",
  email: "",
  phone: "",
  device_type: deviceTypes[0],
  device_model: "",
  issue: "",
};

const fileToDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export const RepairForm = () => {
  const [form, setForm] = useState(initial);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onFiles = async (e) => {
    const files = Array.from(e.target.files || []).slice(0, 4);
    const valid = files.filter((f) => f.size <= 4 * 1024 * 1024);
    if (valid.length < files.length) toast.error("Some images skipped (max 4MB each).");
    const urls = await Promise.all(valid.map(fileToDataUrl));
    setPhotos((p) => [...p, ...urls].slice(0, 4));
  };

  const removePhoto = (i) => setPhotos((p) => p.filter((_, idx) => idx !== i));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.device_model || !form.issue) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/repair-requests`, { ...form, photos });
      setDone(true);
      toast.success("Repair request sent! We'll email your quote shortly.");
      setForm(initial);
      setPhotos([]);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or call us.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all";
  const labelCls = "block text-sm font-medium text-slate-700 mb-1.5";

  return (
    <section id="repair" data-testid="repair-form" className="bg-[#FAFAFA] py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">Get started</p>
          <h2 className="mt-3 font-heading font-bold tracking-tight text-slate-900 text-3xl md:text-4xl">
            Request a repair
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Send your device details and photos. We&apos;ll reply with a fixed-price
            quote and a secure payment link — usually within a few hours.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          {done ? (
            <div data-testid="repair-success" className="bg-white border border-slate-200 p-10 text-center">
              <CheckCircle2 className="mx-auto text-brand-blue" size={48} />
              <h3 className="font-heading font-semibold text-2xl text-slate-900 mt-5">Request received!</h3>
              <p className="text-slate-600 mt-3 max-w-md mx-auto">
                Thanks — our team is reviewing your device. You&apos;ll receive a
                quote and payment link by email shortly.
              </p>
              <button
                data-testid="repair-new"
                onClick={() => setDone(false)}
                className="mt-7 border-2 border-brand-blue text-brand-blue font-semibold px-6 py-3 hover:bg-brand-blue hover:text-white transition-colors"
              >
                Submit another device
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="bg-white border border-slate-200 p-7 md:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Full name *</label>
                  <input data-testid="form-name" className={inputCls} value={form.name} onChange={update("name")} placeholder="Jane Smith" />
                </div>
                <div>
                  <label className={labelCls}>Phone *</label>
                  <input data-testid="form-phone" className={inputCls} value={form.phone} onChange={update("phone")} placeholder="07xxx xxxxxx" />
                </div>
              </div>

              <div>
                <label className={labelCls}>Email *</label>
                <input data-testid="form-email" type="email" className={inputCls} value={form.email} onChange={update("email")} placeholder="you@email.com" />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Device type *</label>
                  <select data-testid="form-device-type" className={inputCls} value={form.device_type} onChange={update("device_type")}>
                    {deviceTypes.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Device model *</label>
                  <input data-testid="form-model" className={inputCls} value={form.device_model} onChange={update("device_model")} placeholder="iPhone 13 Pro, Dell XPS 15…" />
                </div>
              </div>

              <div>
                <label className={labelCls}>Describe the issue *</label>
                <textarea data-testid="form-issue" rows={4} className={inputCls} value={form.issue} onChange={update("issue")} placeholder="Cracked screen, won't charge, water damage…" />
              </div>

              <div>
                <label className={labelCls}>Photos of the device (optional, up to 4)</label>
                <label
                  data-testid="form-upload"
                  className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-8 cursor-pointer hover:border-brand-blue hover:bg-white transition-colors"
                >
                  <Upload size={22} className="text-slate-400" />
                  <span className="text-sm text-slate-500">Click to upload images (max 4MB each)</span>
                  <input type="file" accept="image/*" multiple className="hidden" onChange={onFiles} />
                </label>

                {photos.length > 0 && (
                  <div className="mt-4 grid grid-cols-4 gap-3">
                    {photos.map((src, i) => (
                      <div key={i} className="relative group">
                        <img src={src} alt={`upload ${i + 1}`} className="h-20 w-full object-cover border border-slate-200" />
                        <button
                          type="button"
                          onClick={() => removePhoto(i)}
                          className="absolute -top-2 -right-2 bg-slate-900 text-white grid h-6 w-6 place-items-center"
                          aria-label="Remove photo"
                        >
                          <X size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                data-testid="repair-form-submit"
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-yellow text-black font-semibold px-7 py-4 hover:bg-yellow-400 transition-colors disabled:opacity-60"
              >
                {loading ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : "Send repair request"}
              </button>
              <p className="text-xs text-slate-400 text-center">
                No payment now. You&apos;ll receive a quote and secure payment link by email.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};
