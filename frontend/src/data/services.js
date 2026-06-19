import {
  Smartphone,
  Apple,
  Laptop,
  Tablet,
  HardDrive,
  Unlock,
  Cpu,
} from "lucide-react";

// SEO-focused service pages. Each entry powers /services/:slug
export const services = [
  {
    slug: "mobile-phone-repair",
    icon: Smartphone,
    name: "Mobile Phone Repair",
    metaTitle: "Mobile Phone Repair Burnley | Screen Replacement & Battery — Euro Mobile",
    metaDescription:
      "Fast mobile phone repair in Burnley & Lancashire. Cracked screen replacement, battery swaps, charging ports & water damage for all brands. Most fixes in under 1 hour. Free quote.",
    h1: "Mobile Phone Repair in Burnley",
    tagline: "Cracked screens, dead batteries, charging faults — fixed fast.",
    image:
      "https://images.pexels.com/photos/6755075/pexels-photo-6755075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    intro: [
      "With over 22 years of hands-on experience, Euro Mobile & Computer is Burnley's trusted name for fast, affordable mobile phone repair. Whether you've shattered your screen, your battery drains in hours, or your phone won't charge, our certified technicians fix any make and model — usually in under an hour.",
      "Can't make it into the shop? Use our mail-in repair service: send us your device and photos, get a transparent fixed-price quote and secure payment link, and we'll post your fully repaired phone back to you anywhere in the UK.",
    ],
    features: [
      { title: "Screen & LCD replacement", desc: "Genuine-grade displays for iPhone, Samsung, Huawei, Google Pixel and more." },
      { title: "Battery replacement", desc: "Restore all-day battery life with a fresh, high-capacity cell." },
      { title: "Charging port repair", desc: "Fix loose or dead charging ports and intermittent charging." },
      { title: "Water damage recovery", desc: "Full ultrasonic clean and component-level board repair." },
    ],
    issues: [
      "Cracked or black screen",
      "Battery drains quickly / won't hold charge",
      "Won't turn on or boot loops",
      "No charging / loose port",
      "Camera, speaker or microphone faults",
      "Water or liquid damage",
    ],
    faqs: [
      { q: "How long does a screen repair take?", a: "Most screen replacements are completed in under an hour in-store. Mail-in repairs are typically turned around within 1–2 working days of receiving your device." },
      { q: "Do you repair all phone brands?", a: "Yes — Apple, Samsung, Huawei, Google, Xiaomi, OnePlus, Sony and more. Any brand, any problem." },
      { q: "Is there a warranty?", a: "Yes, all repairs come with a workmanship guarantee. Ask our technician for details on your specific repair." },
    ],
    related: ["iphone-repair", "samsung-galaxy-repair", "phone-unlocking"],
  },
  {
    slug: "iphone-repair",
    icon: Apple,
    name: "iPhone Repair",
    metaTitle: "iPhone Repair Burnley | iPhone Screen & Battery Replacement — Euro Mobile",
    metaDescription:
      "Expert iPhone repair in Burnley. Screen replacement, battery, charging port, Face ID & water damage for every iPhone model. Fast turnaround & best price guarantee. Free quote.",
    h1: "iPhone Repair in Burnley",
    tagline: "Every iPhone model — screen, battery, charging & more.",
    image:
      "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    intro: [
      "Dropped your iPhone or stuck on a battery that won't last the morning? Euro Mobile & Computer repairs every iPhone model — from the latest iPhone right back to older generations — with quality parts and a best price guarantee.",
      "Our technicians have handled tens of thousands of Apple repairs over 22 years. Pop into our Burnley shop or use our nationwide mail-in service for a hassle-free fix with a transparent quote before any work begins.",
    ],
    features: [
      { title: "iPhone screen replacement", desc: "Crisp, responsive displays fitted and fully tested." },
      { title: "iPhone battery replacement", desc: "Stop unexpected shutdowns and restore peak performance." },
      { title: "Charging & port repair", desc: "Lightning and USB-C port cleaning and replacement." },
      { title: "Camera & rear glass", desc: "Fix blurry cameras and replace cracked back glass." },
    ],
    issues: [
      "Cracked iPhone screen / unresponsive touch",
      "Battery health degraded or shutting down",
      "Not charging / won't connect to PC",
      "Front or rear camera not working",
      "Speaker, earpiece or microphone faults",
      "Liquid damage",
    ],
    faqs: [
      { q: "Which iPhone models do you repair?", a: "All of them — from the newest iPhone to classic models. If Apple made it, we can repair it." },
      { q: "Will a repair affect Face ID or Touch ID?", a: "We take care to preserve your phone's original sensors wherever possible. Our technician will advise on any model-specific limitations before starting." },
      { q: "Do you use genuine parts?", a: "We use high-quality, OEM-grade components selected for reliability, backed by our workmanship guarantee." },
    ],
    related: ["mobile-phone-repair", "samsung-galaxy-repair", "tablet-ipad-repair"],
  },
  {
    slug: "samsung-galaxy-repair",
    icon: Smartphone,
    name: "Samsung Galaxy Repair",
    metaTitle: "Samsung Galaxy Repair Burnley | Screen & Battery — Euro Mobile & Computer",
    metaDescription:
      "Samsung Galaxy repair in Burnley & Lancashire. Curved AMOLED screen replacement, battery, charging port & water damage for all Galaxy S, Note, A & Z models. Free quote.",
    h1: "Samsung Galaxy Repair in Burnley",
    tagline: "Galaxy S, Note, A and Z series — expertly repaired.",
    image:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    intro: [
      "Samsung's curved AMOLED displays are beautiful but tricky to repair — which is exactly why you want an experienced technician. Euro Mobile & Computer has repaired Galaxy devices for over two decades, from the S and Note flagships to the foldable Z series and budget A range.",
      "We replace cracked screens, tired batteries and faulty charging ports using quality parts, with a transparent quote up front. Visit us in Burnley or send your Galaxy by post for a nationwide repair.",
    ],
    features: [
      { title: "AMOLED screen replacement", desc: "Specialist repair for curved and flat Galaxy displays." },
      { title: "Battery replacement", desc: "New cells to end random shutdowns and fast drain." },
      { title: "Charging port repair", desc: "USB-C port cleaning and replacement for reliable charging." },
      { title: "Foldable hinge & screen", desc: "Z Fold and Z Flip inner-screen and hinge specialists." },
    ],
    issues: [
      "Cracked or flickering AMOLED screen",
      "Green line or dead pixels",
      "Battery drains fast / overheating",
      "Won't charge or slow charging",
      "Water damage",
      "Foldable inner-screen failure",
    ],
    faqs: [
      { q: "Can you repair foldable Galaxy phones?", a: "Yes — we repair Z Fold and Z Flip inner screens and hinges, a job many shops won't attempt." },
      { q: "My screen shows a green line — can you fix it?", a: "Absolutely. A green line usually means the display needs replacing, which we can do quickly with a quality AMOLED panel." },
      { q: "Do you offer a warranty?", a: "Yes, every Galaxy repair is covered by our workmanship guarantee." },
    ],
    related: ["mobile-phone-repair", "iphone-repair", "phone-unlocking"],
  },
  {
    slug: "laptop-pc-repair",
    icon: Laptop,
    name: "Laptop & PC Repair",
    metaTitle: "Laptop & PC Repair Burnley | Virus Removal, SSD & Upgrades — Euro Mobile",
    metaDescription:
      "Laptop and PC repair in Burnley. Virus & malware removal, SSD/RAM upgrades, screen replacement, Windows reinstall and speed optimisation. Free antivirus on OS install. Free quote.",
    h1: "Laptop & PC Repair in Burnley",
    tagline: "Slow, infected or broken? We bring computers back to life.",
    image:
      "https://images.pexels.com/photos/1432670/pexels-photo-1432670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    intro: [
      "From a sluggish laptop to a PC that won't boot, our technicians diagnose and fix it all. We've spent over 22 years repairing and upgrading computers for homes and businesses across Lancashire — and we love a tricky fault.",
      "Common jobs include virus and malware removal, SSD and RAM upgrades, screen and keyboard replacement, Windows reinstallation and full speed optimisation. We even include free antivirus installation when we install a fresh OS.",
    ],
    features: [
      { title: "SSD & RAM upgrades", desc: "Make an old laptop feel brand new with a fast SSD and more memory." },
      { title: "Virus & malware removal", desc: "Deep clean, secure and optimise your system." },
      { title: "Screen & keyboard repair", desc: "Cracked laptop screens and faulty keyboards replaced." },
      { title: "Windows reinstall & setup", desc: "Clean OS install with free antivirus and speed tuning." },
    ],
    issues: [
      "Running slow or freezing",
      "Won't turn on / blue screen",
      "Virus, malware or pop-ups",
      "Cracked or black laptop screen",
      "Overheating or loud fan",
      "Forgotten Windows password",
    ],
    faqs: [
      { q: "Can you make my old laptop faster?", a: "Usually yes — fitting an SSD and adding RAM transforms most older laptops, often for a fraction of the cost of a new machine." },
      { q: "Will I lose my files?", a: "We always aim to preserve your data and can back it up before any major work. Data recovery is also available if needed." },
      { q: "Do you repair both Windows and Mac?", a: "Yes, we service Windows PCs, laptops and Apple Macs." },
    ],
    related: ["data-recovery", "tablet-ipad-repair", "mobile-phone-repair"],
  },
  {
    slug: "tablet-ipad-repair",
    icon: Tablet,
    name: "Tablet & iPad Repair",
    metaTitle: "iPad & Tablet Repair Burnley | Screen & Battery Replacement — Euro Mobile",
    metaDescription:
      "iPad and tablet repair in Burnley & Lancashire. Cracked screen and digitiser replacement, battery, charging port and water damage for iPad, Samsung Tab and all tablets. Free quote.",
    h1: "Tablet & iPad Repair in Burnley",
    tagline: "iPad, Samsung Tab and every tablet — repaired with care.",
    image:
      "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    intro: [
      "Tablet screens are large, fragile and expensive to replace at the manufacturer — so let us save you money. Euro Mobile & Computer repairs iPads, Samsung Galaxy Tabs and tablets of every brand with quality parts and careful, experienced hands.",
      "We replace cracked glass and digitisers, tired batteries and faulty charging ports. Bring your tablet into our Burnley shop or post it to us for a nationwide repair with a clear quote before we start.",
    ],
    features: [
      { title: "Screen & digitiser replacement", desc: "Cracked glass and unresponsive touch restored." },
      { title: "Battery replacement", desc: "New battery for longer life and reliable charging." },
      { title: "Charging port repair", desc: "Fix tablets that charge slowly or not at all." },
      { title: "Software & setup", desc: "Resets, updates and account recovery support." },
    ],
    issues: [
      "Cracked tablet screen",
      "Touch not responding",
      "Battery won't hold charge",
      "Charging port faults",
      "Stuck on logo / won't update",
      "Water damage",
    ],
    faqs: [
      { q: "Are tablet screens cheaper to repair than replace the device?", a: "Almost always. A professional screen repair typically costs far less than buying a new tablet — get a free quote to compare." },
      { q: "Do you repair Amazon Fire and other budget tablets?", a: "Yes, we repair all tablet brands including iPad, Samsung, Lenovo, Huawei and Amazon Fire." },
      { q: "How long does it take?", a: "Most tablet repairs are completed within 1–2 working days depending on parts." },
    ],
    related: ["laptop-pc-repair", "iphone-repair", "data-recovery"],
  },
  {
    slug: "data-recovery",
    icon: HardDrive,
    name: "Data Recovery",
    metaTitle: "Data Recovery Burnley | Recover Photos & Files — Euro Mobile & Computer",
    metaDescription:
      "Professional data recovery in Burnley. Recover deleted or formatted photos, documents and files from hard drives, SSDs, USB sticks, SD cards and phones. No-fix, no-fee assessment.",
    h1: "Data Recovery in Burnley",
    tagline: "Lost photos or files? There's a very good chance we can get them back.",
    image:
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    intro: [
      "Accidentally deleted precious photos, formatted the wrong drive, or your hard disk has stopped working? Don't panic. Euro Mobile & Computer has recovered irreplaceable data for thousands of customers over 22 years.",
      "We recover data from hard drives, SSDs, USB memory sticks, SD cards and phones — even from formatted or physically failing media. Bring your device in for a careful, confidential assessment.",
    ],
    features: [
      { title: "Deleted file recovery", desc: "Restore accidentally deleted photos, documents and videos." },
      { title: "Formatted drive recovery", desc: "Get data back from formatted USB sticks and memory cards." },
      { title: "Failing hard drive recovery", desc: "Recover from clicking, corrupt or unreadable drives." },
      { title: "Phone & SD card recovery", desc: "Rescue photos and messages from phones and cards." },
    ],
    issues: [
      "Accidentally deleted files or photos",
      "Drive formatted by mistake",
      "Hard drive clicking or not detected",
      "Corrupt USB or SD card",
      "Phone won't turn on with photos inside",
      "RAW or unreadable file system",
    ],
    faqs: [
      { q: "Can you recover data from a dead phone?", a: "Often yes — if the storage chip is intact we can frequently recover photos and messages even when the phone won't power on." },
      { q: "Do you charge if you can't recover anything?", a: "We offer a no-obligation assessment and will always explain the likelihood and cost before any chargeable work begins." },
      { q: "Is my data kept private?", a: "Absolutely. All recovered data is handled confidentially and securely, and returned only to you." },
    ],
    related: ["laptop-pc-repair", "tablet-ipad-repair", "mobile-phone-repair"],
  },
  {
    slug: "phone-unlocking",
    icon: Unlock,
    name: "Phone Unlocking",
    metaTitle: "Phone Unlocking Burnley | Network Unlock Any Phone — Euro Mobile & Computer",
    metaDescription:
      "Phone unlocking in Burnley. Network unlock any phone to use any SIM, plus jailbreaking and software unlocks for all brands and networks. Fast, safe and permanent. Free quote.",
    h1: "Phone Unlocking in Burnley",
    tagline: "Free your phone — use any network, any SIM.",
    image:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    intro: [
      "Locked to a network you no longer use? We permanently unlock phones so you can pop in any SIM and switch to a cheaper deal. Euro Mobile & Computer has safely unlocked phones across every UK network for over 22 years.",
      "Our unlocks are permanent and won't void a working device. Bring your phone into our Burnley shop or contact us to get started — quick, safe and affordable.",
    ],
    features: [
      { title: "Network unlocking", desc: "Permanently unlock any phone from any UK or international network." },
      { title: "Any brand", desc: "iPhone, Samsung, Huawei, Google and more." },
      { title: "Fast turnaround", desc: "Most unlocks completed quickly with no risk to your data." },
      { title: "SIM & software fixes", desc: "Resolve SIM-not-recognised and related software faults." },
    ],
    issues: [
      "Phone locked to old network",
      "SIM card not recognised",
      "Want to switch to a cheaper SIM deal",
      "Travelling and need a local SIM",
      "Second-hand phone still network-locked",
    ],
    faqs: [
      { q: "Is unlocking permanent?", a: "Yes — once unlocked, your phone stays unlocked for life, even after software updates." },
      { q: "Will unlocking delete my data?", a: "No, network unlocking does not erase your data. We always advise backing up as good practice." },
      { q: "Can you unlock any network?", a: "We unlock phones from all major UK networks and many international carriers. Get in touch with your model and network for a quote." },
    ],
    related: ["mobile-phone-repair", "iphone-repair", "samsung-galaxy-repair"],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
export const serviceIcons = { Cpu };
