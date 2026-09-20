import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  BusFront,
  CalendarDays,
  CarFront,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Compass,
  Headphones,
  HeartHandshake,
  Luggage,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Plane,
  Phone,
  Quote,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound,
  Wind,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const WHATSAPP_NUMBER = "919604476616";
const PHONE_DISPLAY = "+91 96044 76616";
const ADDRESS = "JQGM+M3R, Kalewadi Rd, Tanaji Nagar, Chinchwad, Pimpri-Chinchwad, Maharashtra 411033";

const heroImage =
  "/manus-storage/hero-highway_80ddd4f0.jpg";
const interiorImage =
  "/manus-storage/travel-interior_89942a87.jpg";

const openWhatsApp = (message: string) => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
};

const navItems = [
  ["Home", "#home"],
  ["Vehicles", "#vehicles"],
  ["Services", "#services"],
  ["Routes", "#routes"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

const fleet = [
  {
    name: "Tempo Traveller",
    eyebrow: "The all-rounder",
    description: "Spacious, social and ready for family trips, pilgrimages and long weekends.",
    capacity: "12–17 seats",
    luggage: "Generous luggage bay",
    image: "/manus-storage/fleet-vehicle_c33b598c.png",
    accent: "#d9a441",
    icon: CarFront,
  },
  {
    name: "Bus",
    eyebrow: "Made for more",
    description: "Reliable group movement for events, employee travel and multi-day departures.",
    capacity: "20–45 seats",
    luggage: "Full underfloor storage",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1000&q=82",
    accent: "#b8c2d1",
    icon: BusFront,
  },
  {
    name: "Taxi / Cab",
    eyebrow: "Just the essentials",
    description: "Effortless city rides, airport transfers and flexible point-to-point travel.",
    capacity: "1–4 passengers",
    luggage: "Boot space",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=82",
    accent: "#d9a441",
    icon: Navigation,
  },
];

const services: { icon: LucideIcon; title: string; copy: string; number: string }[] = [
  { icon: Plane, title: "Airport Transfers", copy: "Reliable pickup and drop services for Pune and Mumbai airports.", number: "01" },
  { icon: Compass, title: "Outstation Trips", copy: "Comfortable travel across Maharashtra and popular destinations.", number: "02" },
  { icon: Navigation, title: "Local City Travel", copy: "Convenient transportation for Pune and Mumbai city travel.", number: "03" },
  { icon: BriefcaseBusiness, title: "Corporate Travel", copy: "Professional transportation for employees, meetings and business events.", number: "04" },
  { icon: HeartHandshake, title: "Wedding & Event Transport", copy: "Reliable group transportation for weddings, functions and special events.", number: "05" },
  { icon: UsersRound, title: "Family & Group Tours", copy: "Spacious and comfortable vehicles for family vacations and group tours.", number: "06" },
];

const reasons: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: BadgeCheck, title: "Professional Drivers", copy: "Experienced and courteous drivers focused on a smooth journey." },
  { icon: Wind, title: "Comfortable Vehicles", copy: "Clean, well-maintained and comfortable vehicles." },
  { icon: Route, title: "Flexible Travel", copy: "Local, airport, corporate and outstation travel options." },
  { icon: ShieldCheck, title: "Transparent Booking", copy: "Clear communication and straightforward booking." },
  { icon: Headphones, title: "24/7 Assistance", copy: "Easy access to support whenever you need it." },
  { icon: Clock3, title: "On-Time Service", copy: "We value your time and focus on punctual pickups." },
];

const routes = [
  ["Pune", "Mumbai", "01"],
  ["Mumbai", "Pune", "02"],
  ["Pune", "Mahabaleshwar", "03"],
  ["Pune", "Lonavala", "04"],
  ["Mumbai", "Lonavala", "05"],
  ["Pune", "Nashik", "06"],
  ["Mumbai", "Nashik", "07"],
  ["Pune", "Goa", "08"],
  ["Mumbai", "Goa", "09"],
];

const faqs = [
  ["Can I book a Tempo Traveller for an outstation trip?", "Yes. Tempo Travellers are well-suited for outstation trips, family holidays, pilgrimages and multi-day journeys across Maharashtra and beyond."],
  ["Do you provide airport pickup and drop?", "Yes. We arrange airport transfers for Pune and Mumbai with pickup timing planned around your flight details."],
  ["Do you provide vehicles for weddings and events?", "Yes. We can coordinate group vehicles for weddings, functions, corporate events and special occasions."],
  ["Can I book a vehicle for multiple days?", "Absolutely. Share your dates, route and passenger count on WhatsApp and we will help you plan the most suitable vehicle."],
  ["Do you provide Pune to Mumbai travel?", "Yes. Pune to Mumbai is one of our popular routes, with flexible pickup points and vehicle options."],
  ["Do you provide Mumbai to Pune travel?", "Yes. We arrange Mumbai to Pune travel for individual passengers, families, groups and corporate travellers."],
  ["How can I get a quotation?", "Use the journey planner on this page or WhatsApp us with your route, date, vehicle preference and passenger count."],
  ["How can I contact you?", `Call ${PHONE_DISPLAY} or send a WhatsApp message. We are based in Chinchwad, Pimpri-Chinchwad.`],
];

function SectionHeading({ kicker, title, copy, align = "left" }: { kicker: string; title: ReactNode; copy?: string; align?: "left" | "center" }) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading--center" : ""}`}>
      <p className="eyebrow"><span />{kicker}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [form, setForm] = useState({ from: "", to: "", date: "", vehicle: "Tempo Traveller", passengers: "2" });
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hello, I want to get a quote.\n\nFrom: ${form.from || "Not specified"}\nTo: ${form.to || "Not specified"}\nTravel date: ${form.date || "Flexible"}\nVehicle: ${form.vehicle}\nPassengers: ${form.passengers}`;
    setFormSent(true);
    openWhatsApp(message);
    window.setTimeout(() => setFormSent(false), 4200);
  };

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo("#home")} aria-label="Pune Mumbai Tours & Travels home">
            <span className="brand-mark"><Route size={18} strokeWidth={1.7} /></span>
            <span className="brand-lockup"><strong>Pune Mumbai</strong><span>TOURS & TRAVELS</span></span>
          </button>
          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <a className="nav-book-mobile" href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}>Call {PHONE_DISPLAY}</a>
          </nav>
          <div className="nav-actions">
            <a className="nav-phone" href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}><Phone size={15} /> <span>{PHONE_DISPLAY}</span></a>
            <button className="button button--gold button--small" onClick={() => scrollTo("#booking")}>Book now <ArrowUpRight size={15} /></button>
            <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-sheen" />
          <div className="hero-grid" />
          <div className="container hero-inner">
            <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}>
              <p className="eyebrow eyebrow--gold"><span />Premium travel & transportation</p>
              <h1>Go further.<br /><em>Arrive better.</em></h1>
              <p className="hero-subtitle">Book Tempo Traveller, Urbania, Bus & Taxi Cab in Pune & Mumbai</p>
              <p className="hero-note">Comfortable, reliable and hassle-free travel for family trips, corporate journeys, airport transfers, events and outstation tours.</p>
              <div className="hero-actions">
                <button className="button button--gold" onClick={() => scrollTo("#booking")}>Book your ride <ArrowUpRight size={17} /></button>
                <a className="button button--ghost" href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}><Phone size={16} /> Call {PHONE_DISPLAY}</a>
              </div>
              <div className="trust-row">
                <span><Check size={14} /> Professional drivers</span>
                <span><Check size={14} /> Clean & comfortable</span>
                <span><Check size={14} /> Local & outstation</span>
                <span><Check size={14} /> Quick booking</span>
              </div>
            </motion.div>
            <motion.div className="hero-orbit" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.18 }}>
              <div className="orbit-ring orbit-ring--one" /><div className="orbit-ring orbit-ring--two" />
              <span className="hero-coordinate">18.6298° N<br />73.7997° E</span>
              <span className="hero-location"><MapPin size={14} /> Chinchwad, Pune</span>
            </motion.div>
          </div>
          <div className="hero-bottom container"><span>01 / 04</span><span className="hero-scroll">Scroll to explore <ArrowRight size={15} /></span><span className="hero-line" /></div>
        </section>

        <section id="booking" className="booking-wrap">
          <div className="container">
            <motion.form className="booking-card" onSubmit={handleBooking} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
              <div className="booking-intro"><p className="eyebrow eyebrow--gold"><span />Plan your journey</p><h2>One route away<br /><em>from your next story.</em></h2><p>Tell us the essentials. We’ll handle the rest.</p></div>
              <div className="booking-fields">
                <label><span>From</span><div className="input-wrap"><Navigation size={15} /><input required value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })} placeholder="Pickup city or location" /></div></label>
                <label><span>To</span><div className="input-wrap"><MapPin size={15} /><input required value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} placeholder="Destination" /></div></label>
                <label><span>Travel date</span><div className="input-wrap"><CalendarDays size={15} /><input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></div></label>
                <label><span>Vehicle type</span><div className="input-wrap"><CarFront size={15} /><select value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })}><option>Tempo Traveller</option><option>Force Urbania</option><option>Bus</option><option>Taxi / Cab</option></select><ChevronDown size={14} /></div></label>
                <label><span>Passengers</span><div className="input-wrap"><UsersRound size={15} /><select value={form.passengers} onChange={(e) => setForm({ ...form, passengers: e.target.value })}><option>1–4</option><option>5–10</option><option>11–17</option><option>18–35</option><option>36+</option></select><ChevronDown size={14} /></div></label>
                <button className="button button--gold booking-submit" type="submit">{formSent ? "WhatsApp opened" : "Get instant quote"} <ArrowUpRight size={16} /></button>
              </div>
            </motion.form>
          </div>
        </section>

        <section id="vehicles" className="section fleet-section">
          <div className="container">
            <div className="section-topline"><SectionHeading kicker="The fleet" title={<>Choose the vehicle<br /><em>that fits the journey.</em></>} copy="From quick city transfers to full-family escapes, every ride is selected for comfort, clarity and the road ahead." /><div className="section-index">02 <span>/</span> 04</div></div>
            <div className="fleet-grid">
              {fleet.map((vehicle, index) => {
                const Icon = vehicle.icon;
                return <motion.article className={`fleet-card fleet-card--${index + 1}`} key={vehicle.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.07, duration: 0.6 }}>
                  <div className="fleet-image-wrap"><img src={vehicle.image} alt={`${vehicle.name} available for booking`} loading="lazy" /><div className="fleet-image-fade" /><span className="fleet-index">0{index + 1}</span><span className="fleet-icon"><Icon size={18} /></span></div>
                  <div className="fleet-content"><p className="card-eyebrow" style={{ color: vehicle.accent }}>{vehicle.eyebrow}</p><h3>{vehicle.name}</h3><p className="fleet-description">{vehicle.description}</p><div className="fleet-specs"><span><UsersRound size={14} /> {vehicle.capacity}</span><span><Luggage size={14} /> {vehicle.luggage}</span></div><button className="text-link" onClick={() => openWhatsApp(`Hello, I want to book a ${vehicle.name}. Please share availability and quotation.`)}>Book now <ArrowUpRight size={15} /></button></div>
                </motion.article>;
              })}
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container"><div className="services-intro"><SectionHeading kicker="Travel, considered" title={<>Travel solutions<br /><em>for every journey.</em></>} copy="The details matter. We make the moving part of your day feel simple." /><div className="services-stamp"><Sparkles size={18} /><span>Local knowledge<br />meets premium care</span></div></div>
            <div className="services-grid">{services.map((service, index) => { const Icon = service.icon; return <motion.article className="service-item" key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.05 }}><div className="service-icon"><Icon size={19} /></div><div><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p></div><ArrowUpRight className="service-arrow" size={17} /></motion.article>; })}</div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-layout"><div className="about-copy"><SectionHeading kicker="The difference" title={<>More than just<br /><em>a ride.</em></>} copy="It’s your journey." /><p className="about-lede">When you book with us, you’re not just reserving a vehicle. You’re choosing a calmer, more comfortable way to get where you’re going.</p><div className="about-metric"><span className="metric-rule" /><div><strong>01</strong><span>Clear from the<br />first conversation.</span></div><div><strong>24/7</strong><span>Support when<br />the road changes.</span></div></div><button className="text-link text-link--gold" onClick={() => scrollTo("#contact")}>Start planning <ArrowRight size={15} /></button></div><div className="reasons-grid">{reasons.map((reason, index) => { const Icon = reason.icon; return <motion.div className="reason-card" key={reason.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}><Icon size={20} /><span>0{index + 1}</span><h3>{reason.title}</h3><p>{reason.copy}</p></motion.div>; })}</div></div>
        </section>

        <section id="routes" className="section routes-section"><div className="container"><div className="routes-head"><SectionHeading kicker="Go your own way" title={<>Popular travel<br /><em>routes.</em></>} copy="A few well-loved directions. Your route can be anywhere." /><div className="route-note"><MapPin size={16} /><span>Serving Pune · Mumbai<br />Maharashtra · Outstation</span></div></div></div><div className="routes-track">{routes.map(([from, to, number]) => <button className="route-card" key={`${from}-${to}`} onClick={() => openWhatsApp(`Hello, I would like a quotation for a ${from} to ${to} trip.`)}><span className="route-no">{number}</span><div className="route-path"><strong>{from}</strong><ArrowRight size={18} /><strong>{to}</strong></div><span className="route-cta">Request a quote <ArrowUpRight size={14} /></span></button>)}</div><div className="container route-footer"><span>Need a different destination?</span><p>Tell us where you want to go and we’ll help arrange your ride.</p><button className="button button--outline" onClick={() => openWhatsApp("Hello, I have a different destination in mind. Please help me arrange a ride.")}>Request a trip <ArrowUpRight size={15} /></button></div></section>

        <section className="section experience-section"><div className="container experience-layout"><div className="experience-visual"><img src={interiorImage} alt="Comfortable, spacious travel vehicle interior" loading="lazy" /><div className="experience-overlay" /><div className="experience-caption"><span>THE PREMIUM TRAVEL EXPERIENCE</span><span>Quiet. spacious. yours.</span></div><div className="experience-sun" /></div><div className="experience-copy"><SectionHeading kicker="Travel well" title={<>Travel in comfort.<br /><em>Arrive with confidence.</em></>} copy="A considered journey starts before you leave." /><p>For individuals, families, groups, corporate travellers and events, we make the distance between here and there feel like part of the experience.</p><ul>{["Spacious interiors", "Air-conditioned vehicles", "Experienced drivers", "Flexible travel options", "Local & outstation availability"].map((item) => <li key={item}><CircleCheck size={16} />{item}</li>)}</ul><button className="button button--gold" onClick={() => scrollTo("#booking")}>Find your vehicle <ArrowUpRight size={16} /></button></div></div></section>

        <section className="section process-section"><div className="container"><SectionHeading kicker="Simple by design" title={<>How it <em>works.</em></>} copy="Four clear steps between your plan and the open road." /><div className="process-line">{[["01", "Tell us your plan", "Share pickup, destination, date and passengers."], ["02", "Choose your vehicle", "Select the vehicle that fits your group."], ["03", "Get your quote", "Receive booking details and pricing."], ["04", "Start your journey", "Your vehicle arrives at the agreed pickup location."]].map(([number, title, copy], index) => <motion.div className="process-step" key={number} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}><span className="process-number">{number}</span><span className="process-dot" /><h3>{title}</h3><p>{copy}</p>{index < 3 && <ArrowRight className="process-arrow" size={18} />}</motion.div>)}</div></div></section>

        <section className="section testimonials-section"><div className="container testimonial-layout"><div><SectionHeading kicker="In their words" title={<>Leave room for<br /><em>real stories.</em></>} copy="We’re building this section with your customers’ voices. Add them here when you’re ready." /><div className="testimonial-sign"><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /><Star size={15} fill="currentColor" /></div></div><div className="testimonial-card"><Quote size={32} /><p>“Add your real customer review here.”</p><span>— Customer name, route</span><div className="testimonial-dots"><span className="is-active" /><span /><span /></div></div></div></section>

        <section className="section faq-section"><div className="container faq-layout"><div className="faq-sticky"><SectionHeading kicker="Good to know" title={<>Questions,<br /><em>answered.</em></>} copy="Still curious? Send us a message and we’ll help with the details." /><a className="text-link text-link--gold" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">Ask on WhatsApp <ArrowUpRight size={15} /></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${activeFaq === index ? "faq-item--active" : ""}`} key={question}><button onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} aria-expanded={activeFaq === index}><span>0{index + 1}</span><strong>{question}</strong><ChevronDown size={18} /></button><AnimatePresence initial={false}>{activeFaq === index && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}><p>{answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>

        <section id="contact" className="section contact-section"><div className="contact-glow" /><div className="container contact-layout"><div className="contact-copy"><p className="eyebrow eyebrow--gold"><span />Your next journey starts here</p><h2>Ready to start<br /><em>your journey?</em></h2><p>Tell us where you’re going. We’ll take care of the journey.</p><div className="contact-actions"><button className="button button--gold" onClick={() => openWhatsApp("Hello, I want to book a vehicle. Please share availability and quotation.")}><MessageCircle size={17} /> WhatsApp us</button><a className="button button--ghost" href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}><Phone size={16} /> Call now</a></div><div className="contact-details"><a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}><Phone size={15} /> {PHONE_DISPLAY}</a><span><MapPin size={15} /> Chinchwad, Pimpri-Chinchwad, Maharashtra</span></div></div><div className="map-card"><iframe title="Pune Mumbai Tours & Travels location" src="https://www.google.com/maps?q=JQGM%2BM3R%2C%20Kalewadi%20Rd%2C%20Tanaji%20Nagar%2C%20Chinchwad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><div className="map-label"><MapPin size={15} /><span>Chinchwad, Pune</span><a href="https://maps.google.com/?q=JQGM%2BM3R%2C%20Kalewadi%20Rd%2C%20Tanaji%20Nagar%2C%20Chinchwad" target="_blank" rel="noreferrer">Open map <ArrowUpRight size={13} /></a></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div className="footer-brand"><button className="brand" onClick={() => scrollTo("#home")}><span className="brand-mark"><Route size={18} strokeWidth={1.7} /></span><span className="brand-lockup"><strong>Pune Mumbai</strong><span>TOURS & TRAVELS</span></span></button><p>Reliable travel solutions for Pune, Mumbai and outstation journeys.</p></div><div><p className="footer-label">Explore</p><div className="footer-links">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div></div><div><p className="footer-label">Contact</p><div className="footer-contact"><a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}>{PHONE_DISPLAY}</a><span>Chinchwad, Pimpri-Chinchwad<br />Maharashtra</span></div></div></div><div className="container footer-bottom"><span>© 2026 Pune Mumbai Tours & Travels. All rights reserved.</span><span>Made for the road ahead <span className="footer-dot">✦</span></span></div></footer>

      <div className="floating-actions"><a className="floating-call" href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} aria-label="Call Pune Mumbai Tours & Travels"><Phone size={18} /></a><button className="floating-whatsapp" onClick={() => openWhatsApp("Hello, I want to book a vehicle. Please share availability and quotation.")} aria-label="WhatsApp Pune Mumbai Tours & Travels"><MessageCircle size={20} /></button></div>
    </div>
  );
}

export default Home;
