import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Truck, ShieldCheck, BadgeCheck, Recycle, Stars, Wrench, DollarSign, Facebook, Instagram } from "lucide-react";

// Tailwind assumed available in hosting environment
// Default export a single-page app for quick deploy (Netlify, Vercel, GitHub Pages)

export default function VetsToTheRescueSite() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const pricing = [
    { tier: "Minimum Load (⅛ Truck)", desc: "1–2 small items (chairs, boxes, bags)", price: "$95 – $125" },
    { tier: "¼ Truck (1.5 yd³)", desc: "Small cleanup / light furniture", price: "$175 – $225" },
    { tier: "½ Truck (3 yd³)", desc: "Garage or small room cleanout", price: "$275 – $350" },
    { tier: "¾ Truck (5 yd³)", desc: "Medium household cleanup", price: "$400 – $475" },
    { tier: "Full Truck (6.5 yd³)", desc: "Full load / large job", price: "$550 – $650" },
  ];

  const itemPrices = [
    { item: "Sofa / Loveseat", price: "$90 – $110" },
    { item: "Sectional Couch", price: "$125 – $150" },
    { item: "Mattress / Box Spring", price: "$75 each" },
    { item: "Refrigerator / Freezer", price: "$125" },
    { item: "Washer / Dryer", price: "$125" },
    { item: "Water Heater", price: "$90" },
    { item: "TV / Monitor", price: "$40 – $60" },
    { item: "Tires (per)", price: "$15 – $25" },
    { item: "Construction Debris (½ load)", price: "$300+" },
    { item: "Yard Waste (½ load)", price: "$250+" },
  ];

  const surcharges = [
    { s: "Paint, Oils, Solvents", fee: "+$25–$50 per container" },
    { s: "TVs / Electronics", fee: "+$20 each" },
    { s: "Mattresses / Box Springs", fee: "+$25 each" },
    { s: "Tires", fee: "+$15 each" },
    { s: "Heavy Debris (concrete, dirt, tile)", fee: "+$75 per ¼ truck" },
    { s: "Oversized / Extra Labor (stairs, long carry)", fee: "+$25–$50" },
    { s: "Same‑Day / After‑Hours", fee: "+10–20%" },
  ];

  const faqs = [
    {
      q: "What areas do you serve?",
      a: "Aurora, CO and nearby communities. Primary dump site: Arapahoe County Landfill, 3500 S Gun Club Rd, Aurora, CO 80018.",
    },
    {
      q: "How do you price jobs?",
      a: "Hybrid model: by truck load for cleanouts or mixed items, and by item for single/bulky pickups. Disposal up to 1 ton included; heavier loads billed at local rates.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Yes. We carry general liability coverage and can provide a Certificate of Insurance upon request.",
    },
    {
      q: "What can’t you take?",
      a: "No gasoline, propane tanks, live ammunition, medical/biohazard waste. Ask us about options for special handling.",
    },
  ];

  // --- Quick Estimate Calculator State & Helpers ---
  const [loadTier, setLoadTier] = useState<'eighth'|'quarter'|'half'|'threeq'|'full'>('quarter');
  const [mattresses, setMattresses] = useState(0);
  const [tvs, setTvs] = useState(0);
  const [paint, setPaint] = useState(0);
  const [stairs, setStairs] = useState(false);
  const [heavy, setHeavy] = useState(false);

  const loadBase: Record<typeof loadTier, number> = {
    eighth: 110,
    quarter: 200,
    half: 315,
    threeq: 440,
    full: 600,
  };

  const estimateTotal = () => {
    let total = loadBase[loadTier];
    total += mattresses * 25; // surcharge each
    total += tvs * 20;
    total += paint * 40; // avg between $25–$50
    if (stairs) total += 40;
    if (heavy) total += 75; // per 1/4 truck equivalent
    return total;
  };

  const currency = (n:number) => `$${n.toFixed(0)}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo placeholder: swap src with your final logo */}
            <div className="h-10 w-10 rounded-full bg-navy-600 bg-slate-900 flex items-center justify-center text-white font-bold">VT</div>
            <div>
              <p className="font-extrabold text-lg tracking-tight">VetsToTheRescue LLC</p>
              <p className="text-xs text-slate-500">Veteran‑Owned Junk Removal • Aurora, CO</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#pricing" className="text-sm hover:text-slate-900">Pricing</a>
            <a href="#services" className="text-sm hover:text-slate-900">Services</a>
            <a href="#about" className="text-sm hover:text-slate-900">About</a>
            <a href="#contact" className="text-sm hover:text-slate-900">Contact</a>
            <a href="tel:+1-812-592-6622" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 text-white px-4 py-2 shadow-sm hover:shadow transition">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Fast, Friendly, Veteran‑Owned <span className="text-slate-900">Junk Removal</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Three owners. One mission: reliable cleanouts, fair pricing, and five‑star service across Aurora, CO.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pricing" className="rounded-2xl bg-slate-900 text-white px-5 py-3 shadow hover:shadow-md">See Prices</a>
              <a href="#contact" className="rounded-2xl border border-slate-300 px-5 py-3 hover:border-slate-400">Get a Free Estimate</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/>Licensed & Insured</span>
              <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4"/>15′ U‑Haul Capacity 6.5 yd³</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4"/>Mon–Sat • 8a–7p</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-sm border border-slate-200 p-4 grid place-items-center">
              {/* Illustration placeholder */}
              <div className="text-center">
                <Stars className="mx-auto h-10 w-10"/>
                <p className="mt-2 font-semibold">Add your logo image here</p>
                <p className="text-sm text-slate-500">(Replace the VT avatar in the header and insert hero artwork or crew photo.)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3"><BadgeCheck className="h-6 w-6"/><p>Veteran‑Owned & Operated</p></div>
          <div className="flex items-center gap-3"><Recycle className="h-6 w-6"/><p>Eco‑Friendly Disposal</p></div>
          <div className="flex items-center gap-3"><Wrench className="h-6 w-6"/><p>Light Demo Available</p></div>
          <div className="flex items-center gap-3"><DollarSign className="h-6 w-6"/><p>Transparent, Up‑Front Pricing</p></div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold tracking-tight">Services</h2>
        <p className="mt-2 text-slate-600">Residential & commercial hauling across Aurora and surrounding areas.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: "House & Garage Cleanouts", desc: "Whole‑home, apartment, and estate cleanouts." },
            { title: "Furniture & Appliances", desc: "Sofas, mattresses, fridges, washers/dryers, and more." },
            { title: "Yard Waste & Storm Debris", desc: "Branches, bagged leaves, and outdoor clutter." },
            { title: "Construction / Renovation", desc: "Drywall, lumber, flooring, and mixed debris." },
            { title: "Light Demolition", desc: "Sheds, decks, fence panels—ask for a quote." },
            { title: "Curbside Pickup", desc: "Discounted drive‑by pickups for easy items." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight">Pricing</h2>
          <p className="mt-2 text-slate-600">Hybrid model: by load size or by item. Disposal up to 1 ton included; heavier loads billed at local rates.</p>

          {/* Load Pricing */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold">Truckload Pricing (15′ U‑Haul • 6.5 yd³)</h3>
              <ul className="mt-4 divide-y text-sm">
                {pricing.map((p, i) => (
                  <li key={i} className="py-3 flex items-start justify-between">
                    <div>
                      <p className="font-medium">{p.tier}</p>
                      <p className="text-slate-600">{p.desc}</p>
                    </div>
                    <p className="font-semibold">{p.price}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-slate-500">Includes loading, hauling, and landfill fees up to 1 ton. Additional weight billed at ~$65/ton.</p>
            </div>

            {/* Item Pricing */}
            <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold">Item‑Based Pricing</h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 text-sm">
                {itemPrices.map((ip, i) => (
                  <li key={i} className="flex items-center justify-between border-b last:border-0 border-slate-100 pb-2">
                    <span>{ip.item}</span>
                    <span className="font-semibold">{ip.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <h4 className="font-semibold">Surcharges & Special Handling</h4>
                <ul className="mt-2 grid grid-cols-1 gap-2 text-sm">
                  {surcharges.map((s, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span>{s.s}</span>
                      <span className="font-semibold">{s.fee}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-slate-500">No gasoline, propane tanks, or biohazard waste.</p>
              </div>
            </div>
          </div>

          {/* Instant Estimate Calculator */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold flex items-center gap-2"><DollarSign className="h-5 w-5"/> Instant Estimate (Ballpark)</h3>
              <p className="text-sm text-slate-600 mt-1">Choose a load size and add any special items to get a quick, non-binding estimate. Final price confirmed on-site.</p>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <p className="font-medium">Load Size</p>
                  <div className="mt-2 grid grid-cols-2 md:grid-cols-5 gap-2">
                    {[
                      {key:'eighth', label:'⅛'},
                      {key:'quarter', label:'¼'},
                      {key:'half', label:'½'},
                      {key:'threeq', label:'¾'},
                      {key:'full', label:'Full'},
                    ].map(o => (
                      <button key={o.key as string} type="button" onClick={() => setLoadTier(o.key as any)} className={`px-3 py-2 rounded-xl border ${loadTier===o.key? 'bg-slate-900 text-white border-slate-900':'border-slate-300 bg-white'}`}>{o.label}</button>
                    ))}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <label className="flex items-center justify-between rounded-xl border border-slate-300 bg-white px-3 py-2">Mattresses
                    <input type="number" min="0" value={mattresses} onChange={e=>setMattresses(parseInt(e.target.value||'0'))} className="w-20 text-right outline-none"/>
                  </label>
                  <label className="flex items-center justify-between rounded-xl border border-slate-300 bg-white px-3 py-2">TVs
                    <input type="number" min="0" value={tvs} onChange={e=>setTvs(parseInt(e.target.value||'0'))} className="w-20 text-right outline-none"/>
                  </label>
                  <label className="flex items-center justify-between rounded-xl border border-slate-300 bg-white px-3 py-2">Paint/Oil (containers)
                    <input type="number" min="0" value={paint} onChange={e=>setPaint(parseInt(e.target.value||'0'))} className="w-20 text-right outline-none"/>
                  </label>
                  <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2"><input type="checkbox" checked={stairs} onChange={e=>setStairs(e.target.checked)}/> Stairs / Long Carry</label>
                  <label className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2"><input type="checkbox" checked={heavy} onChange={e=>setHeavy(e.target.checked)}/> Heavy Debris</label>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-900 text-white px-4 py-3">
                  <p className="font-semibold">Estimated Total</p>
                  <p className="text-xl font-extrabold">{currency(estimateTotal())}</p>
                </div>
                <p className="text-xs text-slate-500">Includes disposal up to 1 ton; extra weight billed at local rates (~$65/ton). Taxes/fees may apply.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold">How to Get an Exact Quote</h3>
              <ol className="mt-3 space-y-2 text-sm list-decimal list-inside">
                <li>Text photos of the items to <a href="tel:+1-812-592-6622" className="underline">(812) 592‑6622</a>.</li>
                <li>We confirm the load size and any special handling.</li>
                <li>We arrive on time, load up, sweep up, and handle disposal.</li>
              </ol>
              <a href="#contact" className="mt-4 inline-block rounded-2xl bg-slate-900 text-white px-5 py-3 shadow hover:shadow-md">Request an Exact Quote</a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-2xl bg-slate-900 text-white px-5 py-3 shadow hover:shadow-md">Request an Estimate</a>
            <a href="tel:+1-812-592-6622" className="rounded-2xl border border-slate-300 px-5 py-3 hover:border-slate-400 inline-flex items-center gap-2"><Phone className="h-4 w-4"/> Call Now</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Veteran‑Owned. Mission‑Driven.</h2>
            <p className="mt-3 text-slate-600">
              VetsToTheRescue LLC is a three‑owner, veteran‑operated junk hauling team serving Aurora, Colorado. We pride ourselves on punctuality, respect for your property, and transparent pricing.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4"/> Background‑checked crew</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4"/> Donation & recycling whenever possible</li>
              <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4"/> Text photo estimates available</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <Stars className="h-6 w-6"/>
              <div>
                <p className="font-semibold">Customer Review</p>
                <p className="text-slate-600">“Professional, fast, and courteous. They cleared our garage in under an hour and swept up after. Highly recommend!”</p>
                <p className="text-xs text-slate-500 mt-2">— Local Homeowner in Aurora</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Get Your Free Estimate</h2>
            <p className="mt-2 text-slate-600">Call, text, or use the form. Share photos for the fastest quote.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><Phone className="h-5 w-5"/><a className="hover:underline" href="tel:+1-812-592-6622">(812) 592‑6622</a></li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5"/><a className="hover:underline" href="mailto:vetstotherescuellc3@gmail.com">vetstotherescuellc3@gmail.com</a></li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5"/>Aurora, CO • Arapahoe County Landfill nearby</li>
              <li className="flex items-center gap-3"><Clock className="h-5 w-5"/>Mon–Sat • 8:00 AM – 7:00 PM</li>
            </ul>
            <div className="mt-6 flex gap-4 text-slate-600">
              <a href="#" aria-label="Facebook" className="hover:text-slate-900"><Facebook className="h-5 w-5"/></a>
              <a href="#" aria-label="Instagram" className="hover:text-slate-900"><Instagram className="h-5 w-5"/></a>
            </div>
          </div>
          <form className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm" action="https://formspree.io/f/your-id" method="POST">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input name="name" required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900"/>
              </div>
              <div>
                <label className="text-sm font-medium">Phone</label>
                <input name="phone" required className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900"/>
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input name="email" type="email" className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900"/>
              </div>
              <div>
                <label className="text-sm font-medium">Job Details</label>
                <textarea name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900" placeholder="Tell us about the items, stairs, photos link, and ideal timing."/>
              </div>
              <button className="rounded-2xl bg-slate-900 text-white px-5 py-3 shadow hover:shadow-md" type="submit">Send Request</button>
              <p className="text-xs text-slate-500">By submitting, you agree to receive texts/emails about your estimate.</p>
            </div>
          </form>
        </div>
      </section>

      {/* Floating Call Button (mobile) */}
      <a href="tel:+1-812-592-6622" className="md:hidden fixed bottom-5 right-5 z-50 rounded-full bg-slate-900 text-white px-5 py-3 shadow-lg">Call (812) 592‑6622</a>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-lg">VetsToTheRescue LLC</p>
            <p className="text-slate-400 text-sm mt-1">Veteran‑Owned Junk Removal • Aurora, CO</p>
          </div>
          <div>
            <p className="font-semibold">Quick Links</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Business Info</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4"/><a href="tel:+1-812-592-6622">(812) 592‑6622</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/><a href="mailto:vetstotherescuellc3@gmail.com">vetstotherescuellc3@gmail.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/>Aurora, CO</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} VetsToTheRescue LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
