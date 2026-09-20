import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CalendarCheck,
  CarFront,
  CheckCircle2,
  Clock,
  Compass,
  Facebook,
  Headphones,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Plane,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  Users,
  Wallet,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const WHATSAPP_NUMBER = "919604476616";
const PHONE_DISPLAY = "+91 96044 76616";
const PHONE_TEL = "+919604476616";
const EMAIL = "punemumbaitravels@gmail.com";
const ADDRESS = "Kalewadi Road, Tanaji Nagar, Chinchwad, Pimpri-Chinchwad, Maharashtra 411033";

const heroImage = "/images/hero-expressway.png";

const openWhatsApp = (message: string) => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
};

const navItems: [string, string][] = [
  ["About", "#about"],
  ["Our Fleet", "#fleet"],
  ["Services", "#services"],
  ["Routes", "#routes"],
  ["Reviews", "#reviews"],
];

const stats: { value: string; label: string; icon?: LucideIcon }[] = [
  { value: "5000+", label: "Happy Customers" },
  { value: "50+", label: "Expert Drivers" },
  { value: "8+", label: "Vehicle Types", icon: CarFront },
  { value: "24/7", label: "Always Available" },
];

const fleet: { name: string; tag: string; copy: string; image: string; objectPos?: string }[] = [
  { name: "Tempo Traveller", tag: "10-17 Seater", copy: "Spacious 10 to 17-seater vehicle for group tours, pilgrimages and corporate outings.", image: "/images/fleet-tempo.png" },
  { name: "Luxury AC Bus", tag: "35-45 Seater", copy: "Full-size 35-45 seater luxury AC coach for weddings, events and premium group tours.", image: "/images/fleet-bus-mercedes.jpg" },
  { name: "Deluxe AC Coach Bus", tag: "35-45 Seater", copy: "Comfortable 35-45 seater AC bus for medium to large groups, pilgrimages and family functions.", image: "/images/fleet-bus-ganesh.jpg" },
  { name: "Force Urbania", tag: "16 Seater", copy: "Modern 16-seater luxury van with plush seating for a premium group journey.", image: "/images/fleet-urbania-real.jpg", objectPos: "center 40%" },
  { name: "Toyota Innova Crysta", tag: "Luxury SUV", copy: "Premium 7-seater for family trips, outstation tours and business travel.", image: "/images/fleet-suv.png" },
  { name: "Maruti Ertiga", tag: "7 Seater", copy: "Spacious and economical 7-seater, perfect for families and small groups.", image: "/images/fleet-mpv.png" },
  { name: "Swift Dzire", tag: "Sedan", copy: "Comfortable, fuel-efficient sedan ideal for airport transfers and city rides.", image: "/images/fleet-sedan.png" },
  { name: "Honda City", tag: "Premium", copy: "Premium sedan for executive travel and stylish airport transfers.", image: "/images/fleet-sedan.png" },
];

const aboutCards: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: ShieldCheck, title: "Safe & Verified", copy: "Police-verified drivers and well-maintained, sanitized vehicles." },
  { icon: Clock, title: "Always On Time", copy: "We respect your schedule and guarantee punctual pickups." },
  { icon: Wallet, title: "Transparent Pricing", copy: "No hidden charges. Fair, upfront pricing on every trip." },
  { icon: Headphones, title: "24/7 Support", copy: "Our team is available around the clock to assist you." },
];

const services: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: Plane, title: "Airport Transfers", copy: "Reliable, on-time pickup and drop for Pune and Mumbai airports." },
  { icon: Compass, title: "Outstation Trips", copy: "Comfortable journeys to Lonavala, Mahabaleshwar, Nashik, Goa and beyond." },
  { icon: CarFront, title: "Local City Travel", copy: "Convenient point-to-point rides and hourly rentals across Pune & Mumbai." },
  { icon: Briefcase, title: "Corporate Travel", copy: "Professional chauffeur service for employees, meetings and business events." },
  { icon: HeartHandshake, title: "Wedding & Events", copy: "Reliable group transport for weddings, functions and special occasions." },
  { icon: Users, title: "Family & Group Tours", copy: "Spacious, comfortable vehicles for family vacations and group tours." },
];

const whyChoose: { icon: LucideIcon; title: string; copy: string }[] = [
  { icon: ShieldCheck, title: "Safe & Secure", copy: "Trusted drivers and well-maintained vehicles for your peace of mind." },
  { icon: BadgeCheck, title: "Professional Drivers", copy: "Experienced, courteous chauffeurs dedicated to a smooth journey." },
  { icon: Sparkles, title: "Clean AC Vehicles", copy: "Regularly sanitized, air-conditioned vehicles for maximum comfort." },
  { icon: Wallet, title: "Transparent Pricing", copy: "No hidden charges. Fair and affordable rates on every trip." },
  { icon: Clock, title: "On-Time Service", copy: "We value your time and ensure prompt arrivals at your location." },
  { icon: Headphones, title: "24/7 Support", copy: "Our support team is available around the clock to assist you." },
  { icon: MapPin, title: "Local Expertise", copy: "Drivers who know the best routes across Pune, Mumbai & Maharashtra." },
  { icon: HeartHandshake, title: "Trusted by 5000+", copy: "Thousands of satisfied travellers choose us for every journey." },
];

const routes: string[] = [
  "Pune \u2194 Mumbai",
  "Mumbai \u2194 Pune Airport",
  "Pune \u2194 Lonavala",
  "Pune \u2194 Mahabaleshwar",
  "Mumbai \u2194 Lonavala",
  "Pune \u2194 Nashik",
  "Mumbai \u2194 Shirdi",
  "Pune \u2194 Goa",
];

const testimonials: { text: string; name: string; place: string }[] = [
  { text: "Booked a Tempo Traveller for our family trip to Mahabaleshwar. Clean vehicle, polite driver and on-time pickup. Highly recommended!", name: "Amit Deshmukh", place: "Pune" },
  { text: "Best cab service for Pune to Mumbai airport. Driver reached early and the ride was smooth and comfortable throughout.", name: "Priya Kulkarni", place: "Mumbai" },
  { text: "Affordable pricing and excellent service for our corporate travel. The Innova was spotless. We trust them completely.", name: "Rahul Joshi", place: "Chinchwad" },
];

const year = new Date().getFullYear();

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const bookMsg = (vehicle: string) =>
    `Hello Pune Mumbai Tours & Travels, I would like to book the ${vehicle}. Please share availability and quotation.`;

  return (
    <div className="site-shell">
      <div className="topbar">
        <Sparkles size={14} />
        <span>
          MAHARASHTRA&apos;S MOST TRUSTED TRAVEL SERVICE &mdash; BOOK NOW AT{" "}
          <strong>{PHONE_DISPLAY}</strong>
        </span>
      </div>

      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Pune Mumbai Tours & Travels home">
            <span className="brand-mark"><Route size={22} strokeWidth={2} /></span>
            <span className="brand-lockup"><strong>Pune Mumbai</strong><span>TOURS &amp; TRAVELS</span></span>
          </a>
          <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-book-mobile button button--gold" href={`tel:${PHONE_TEL}`} onClick={closeMenu}>
              <Phone size={15} /> Call {PHONE_DISPLAY}
            </a>
          </nav>
          <div className="nav-actions">
            <a className="nav-phone" href={`tel:${PHONE_TEL}`}><Phone size={15} /> {PHONE_DISPLAY}</a>
            <button className="menu-toggle" onClick={() => setMenuOpen((o) => !o)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="home">
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="container hero-inner">
            <span className="hero-badge"><Star size={13} fill="currentColor" /> Pune &amp; Mumbai&apos;s #1 Travel Service</span>
            <h1>Book Tempo Traveller, Bus &amp; Taxi in Pune &amp; Mumbai</h1>
            <p className="hero-subtitle">
              Safe, reliable and comfortable transportation for airport transfers, sightseeing,
              corporate travel, weddings and outstation trips across Maharashtra.
            </p>
            <div className="hero-actions">
              <a className="button button--gold" href={`tel:${PHONE_TEL}`}><Phone size={17} /> Call Now</a>
              <a
                className="button button--wa"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookMsg("a vehicle"))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
            </div>
            <div className="hero-trust">
              <span><CheckCircle2 size={15} /> Verified drivers</span>
              <span><CheckCircle2 size={15} /> Clean AC vehicles</span>
              <span><CheckCircle2 size={15} /> Local &amp; outstation</span>
              <span><CheckCircle2 size={15} /> Instant booking</span>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              {stats.map(({ value, label, icon: Icon }) => (
                <div className="stat" key={label}>
                  <strong className="stat-num">
                    {Icon && <Icon size={42} strokeWidth={2.4} className="stat-icon" />}
                    {value}
                  </strong>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="fleet" className="section fleet-section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Our Fleet</p>
              <h2 className="section-title">Vehicles Available <em>For Rental</em></h2>
              <p className="section-lede">Choose from our wide range of well-maintained, air-conditioned vehicles for every travel need.</p>
            </div>
            <div className="fleet-grid">
              {fleet.map((v) => (
                <article className="fleet-card" key={v.name}>
                  <div className="fleet-image-wrap">
                    <img
                      src={v.image || "/placeholder.svg"}
                      alt={`${v.name} available for booking in Pune and Mumbai`}
                      style={v.objectPos ? { objectPosition: v.objectPos } : undefined}
                      loading="lazy"
                    />
                    <span className="fleet-tag">{v.tag}</span>
                  </div>
                  <div className="fleet-content">
                    <h3>{v.name}</h3>
                    <p>{v.copy}</p>
                    <a
                      className="fleet-book"
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookMsg(v.name))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book Now <ArrowRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="container about-layout">
            <div className="about-copy">
              <p className="kicker">About Us</p>
              <h2 className="section-title">Your Trusted Travel <em>Partner in Maharashtra</em></h2>
              <p>
                At <strong>Pune Mumbai Tours &amp; Travels</strong>, we are committed to providing
                safe, reliable and comfortable transportation across Pune, Mumbai and all of
                Maharashtra. Whether you need an airport transfer, railway pickup, local sightseeing,
                hotel transfer or an outstation journey, our professional drivers and well-maintained
                vehicles ensure a smooth, stress-free experience.
              </p>
              <p>
                With a strong focus on customer satisfaction, punctuality and affordable pricing, we
                have become a trusted choice for tourists, families and corporate travellers alike.
              </p>
              <a className="button button--green" href={`tel:${PHONE_TEL}`}><Phone size={16} /> Call Us Now</a>
            </div>
            <div className="about-cards">
              {aboutCards.map(({ icon: Icon, title, copy }) => (
                <div className="about-card" key={title}>
                  <div className="ic"><Icon size={22} /></div>
                  <h5>{title}</h5>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">What We Offer</p>
              <h2 className="section-title">Our <em>Services</em></h2>
              <p className="section-lede">Reliable travel solutions for airport transfers, outstation trips, corporate travel, events and more.</p>
            </div>
            <div className="services-grid">
              {services.map(({ icon: Icon, title, copy }) => (
                <article className="service-card" key={title}>
                  <div className="service-ic"><Icon size={26} /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Why Choose Us</p>
              <h2 className="section-title">Your Journey, <em>Our Priority</em></h2>
              <p className="section-lede">We go the extra mile to make every trip comfortable, safe and memorable.</p>
            </div>
            <div className="why-grid">
              {whyChoose.map(({ icon: Icon, title, copy }) => (
                <div className="why-card" key={title}>
                  <div className="ic"><Icon size={22} /></div>
                  <h5>{title}</h5>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="routes" className="section routes-section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Coverage</p>
              <h2 className="section-title">Top Routes <em>We Serve</em></h2>
              <p className="section-lede">We cover all major routes in and around Pune, Mumbai and Maharashtra with reliable, timely service.</p>
            </div>
            <div className="routes-grid">
              {routes.map((r) => (
                <button className="route-pill" key={r} onClick={() => openWhatsApp(`Hello, I would like a quotation for the ${r} route.`)}>
                  <MapPin size={18} /> {r}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section testi-section">
          <div className="container">
            <div className="section-head">
              <p className="kicker">Testimonials</p>
              <h2 className="section-title">What Our <em>Customers Say</em></h2>
            </div>
            <div className="testi-grid">
              {testimonials.map((t) => (
                <article className="testi-card" key={t.name}>
                  <span className="testi-quote" aria-hidden="true">&ldquo;</span>
                  <div className="testi-stars">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p>{t.text}</p>
                  <div className="testi-person">
                    <span className="testi-avatar">{t.name.charAt(0)}</span>
                    <div>
                      <strong>{t.name}</strong>
                      <span>{t.place}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <h2>Ready to Book Your Ride?</h2>
            <p>Experience Maharashtra&apos;s most trusted travel service. Get instant bookings, professional drivers and the best rates guaranteed.</p>
            <div className="cta-actions">
              <a className="button button--gold" href={`tel:${PHONE_TEL}`}><Phone size={17} /> Call {PHONE_DISPLAY}</a>
              <a
                className="button button--wa"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookMsg("a vehicle"))}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={17} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark"><Route size={22} strokeWidth={2} /></span>
              <span className="brand-lockup"><strong>Pune Mumbai</strong><span>TOURS &amp; TRAVELS</span></span>
            </a>
            <p>Your trusted partner for travel across Pune, Mumbai and Maharashtra. Reliable, affordable and comfortable travel solutions, available 24/7.</p>
            <div className="footer-social">
              <a href="#home" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#home" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#home" aria-label="Twitter"><Twitter size={18} /></a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Pune Mumbai Tours & Travels, I would like to book a vehicle.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{ all: "unset" }}
              >
                <span style={{ display: "grid", placeItems: "center", width: 40, height: 40, borderRadius: 11, background: "rgba(255,255,255,.08)", color: "#fff", cursor: "pointer" }}>
                  <MessageCircle size={18} />
                </span>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Quick Links</h5>
            <div className="footer-links">
              {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            </div>
          </div>
          <div className="footer-col">
            <h5>Contact Us</h5>
            <div className="footer-contact">
              <a href={`tel:${PHONE_TEL}`}><Phone size={16} /> {PHONE_DISPLAY}</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp: {PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`}><Mail size={16} /> {EMAIL}</a>
              <span><MapPin size={16} /> {ADDRESS}</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            &copy; {year} Pune Mumbai Tours &amp; Travels. All Rights Reserved. Crafted for the road ahead.
          </div>
        </div>
      </footer>

      <div className="floating-actions">
        <a className="floating-call" href={`tel:${PHONE_TEL}`} aria-label="Call Pune Mumbai Tours & Travels"><Phone size={20} /></a>
        <a className="floating-wa" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" aria-label="WhatsApp Pune Mumbai Tours & Travels"><MessageCircle size={22} /></a>
      </div>
    </div>
  );
}

export default Home;
