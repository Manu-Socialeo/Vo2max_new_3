import { useRef, useState } from "react";
import type { FormEvent, WheelEvent } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Dumbbell,
  ExternalLink,
  Facebook,
  Flame,
  Hand,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Sprout,
  Stethoscope,
  TrendingUp,
  Workflow,
  X,
} from "lucide-react";
import vo2maxLogo from "./assets/vo2max-logo.png";
import doctorPhoto from "./assets/doctor-photo.png";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { label: "Physiotherapy & Pain Rehabilitation", icon: Stethoscope },
  { label: "Sports Injury Treatment", icon: Activity },
  { label: "Musculo-Skeletal Analysis", icon: Workflow },
  { label: "Sports Performance Enhancement", icon: TrendingUp },
  { label: "Corrective Biomechanics", icon: Hand },
  { label: "Manual Therapy", icon: Sparkles },
  { label: "Sports Massage", icon: Dumbbell },
  { label: "Ayurvedic Massage", icon: Leaf },
  { label: "Fire-Cupping", icon: Flame },
  { label: "Yoga & Meditation Guidance", icon: Sprout },
  { label: "Personal & Sports Fitness Training", icon: Activity },
];

const TESTIMONIALS = [
  "Dr. Pinakin helped me recover from a long-term back injury. Highly recommended!",
  "Professional, knowledgeable, and patient. Best physiotherapist I’ve met.",
  "His sports rehab program brought me back to peak performance.",
];

const GALLERY_PLACEHOLDERS = [1, 2, 3, 4, 5];

const WHATSAPP_URL = "https://wa.me/919480166770";
const BOOKING_WHATSAPP_URL = "https://wa.me/918722163256";
const PHONE_NUMBER = "+91 94801 66770";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/DUUj521H7uYKw3Ys6";
const EMAIL_ADDRESS = "hello@hexahealth.com";
const EMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL_ADDRESS
)}`;

const containerClass = "mx-auto w-full max-w-6xl px-5 sm:px-6";

const BookButton = ({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "compact";
}) => {
  const sizeClasses =
    size === "compact"
      ? "px-3.5 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm"
      : "px-6 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-vo-blue font-semibold tracking-tight text-vo-white shadow-card shadow-vo-blue/40 transition-colors hover:bg-[#3D92E0] ${sizeClasses} ${className}`}
    >
      Book Appointment
    </a>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleGalleryWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    galleryRef.current?.scrollBy({ left: event.deltaY, behavior: "smooth" });
  };

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();

    const safeName = name || "a patient";
    const safePhone = phone || "N/A";
    const message = `Hello Dr. Pinakin, my name is ${safeName} (${safePhone}). Please book an appointment for me.`;
    const waUrl = `${BOOKING_WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-vo-white text-vo-black" id="home">
      <header className="sticky top-0 z-50 border-b border-vo-border/60 bg-vo-white/95 backdrop-blur">
        <div
          className={`${containerClass} grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 py-2.5 sm:grid-cols-[auto_minmax(0,0.55fr)_auto] sm:gap-4 sm:py-3.5 lg:grid-cols-[auto_minmax(0,0.5fr)_auto] lg:gap-6`}
        >
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2 sm:gap-3"
          >
            <img
              src={vo2maxLogo}
              alt="Dr. Pinakin Ayare mark"
              className="h-9 w-auto object-contain sm:h-11"
            />
            <span className="truncate text-sm font-semibold tracking-tight text-vo-black sm:max-w-[14rem] sm:text-base">
              Dr. Pinakin Ayare
            </span>
          </a>

          <div className="flex justify-center">
            <BookButton size="compact" className="!shadow-none text-center sm:px-6" />
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-4 lg:gap-5">
            <nav className="hidden items-center gap-3 text-sm font-semibold tracking-tight text-vo-black/70 sm:flex lg:gap-5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap rounded-full px-4 py-2 transition-colors hover:bg-vo-blue-soft hover:text-vo-black"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-vo-border/70 bg-vo-white text-vo-black transition-colors sm:hidden"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`${containerClass} pb-3 sm:hidden`}>
            <div className="flex flex-col gap-2 rounded-3xl border border-vo-border/70 bg-vo-white/95 p-4 shadow-card backdrop-blur">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold tracking-tight text-vo-black/80 transition-colors hover:bg-vo-blue-soft/70 hover:text-vo-black"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 right-10 h-72 w-72 rounded-full bg-vo-blue-soft blur-3xl opacity-70 sm:h-80 sm:w-80" />
          <div className="pointer-events-none absolute -bottom-52 left-[-6rem] h-80 w-80 rounded-full bg-vo-blue/30 blur-3xl opacity-60" />

          <section
            className={`${containerClass} grid gap-10 pb-14 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center md:gap-16`}
          >
            <div className="space-y-5">
              <h1 className="text-4xl font-extrabold tracking-tight text-vo-black sm:text-5xl">
                Expert Physiotherapy & Sports Rehabilitation You Can Trust.
              </h1>
              <p className="max-w-xl text-base font-medium leading-relaxed text-vo-black/70 sm:text-lg">
                17+ years of restoring mobility, relieving pain, and enhancing athletic performance.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <BookButton />
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-vo-blue-soft blur-3xl opacity-70"
                aria-hidden
              />
              <div className="relative rounded-[2.5rem] bg-vo-white p-4 shadow-card shadow-vo-blue/30">
                <div className="relative overflow-hidden rounded-[2rem] bg-vo-black/5">
                  <div className="pointer-events-none absolute -left-10 top-1/4 h-48 w-48 rounded-full bg-vo-blue/40 blur-3xl" />
                  <img
                    src={doctorPhoto}
                    alt="Dr. Pinakin Ayare"
                    className="relative z-10 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="about" className="border-t border-vo-border/70 bg-vo-white py-14 sm:py-18">
          <div className={`${containerClass} space-y-5`}>
            <h2 className="text-3xl font-bold tracking-tight text-vo-black sm:text-4xl">
              About Dr. Pinakin Ayare
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-vo-black/70 sm:text-lg">
              Dr. Pinakin Ayare is a Physiotherapist & Rehabilitation Specialist with 17+ years of experience helping athletes and individuals overcome pain, rebuild strength, and move with confidence. His academic foundation spans a Bachelor of Physiotherapy (BPT) and a Master’s in Sports & Exercise Science from Leeds Beckett University, pairing evidence-based protocols with personalised care for every recovery journey.
            </p>
          </div>
        </section>

        <section id="services" className="bg-vo-black-soft py-14 text-vo-white sm:py-18">
          <div className={`${containerClass} space-y-8`}>
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-vo-blue-soft">
                Services
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Tailored therapies to restore and elevate performance
              </h2>
            </div>
            <div className="rounded-4xl bg-vo-black px-6 py-8 shadow-card shadow-vo-blue/20">
              <div className="grid gap-5 sm:grid-cols-2">
                {SERVICES.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.label}
                      className="flex items-center gap-4 rounded-3xl border border-white/10 bg-vo-black/40 px-4 py-4 transition-colors hover:border-vo-blue/60"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-vo-blue/20 text-vo-blue">
                        <Icon size={20} />
                      </span>
                      <span className="text-sm font-semibold tracking-tight text-vo-white">
                        {service.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-vo-white py-14 sm:py-18">
          <div className={`${containerClass} space-y-6`}>
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-vo-muted">
                Gallery
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-vo-black sm:text-4xl">
                Inside the VO2 Max experience
              </h2>
            </div>
            <div
              ref={galleryRef}
              onWheel={handleGalleryWheel}
              className="flex gap-4 overflow-x-auto pb-4 pt-2 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none]"
              style={{ scrollbarWidth: "none" }}
            >
              {GALLERY_PLACEHOLDERS.map((item) => (
                <div
                  key={item}
                  className="relative flex h-64 w-48 flex-shrink-0 items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-vo-blue-soft/70 to-vo-blue/60 text-vo-white shadow-card shadow-vo-blue/15"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-vo-white/80">
                    Image {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-vo-white py-14 sm:py-18">
          <div className={`${containerClass} space-y-6`}>
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-vo-muted">
                Testimonials
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-vo-black sm:text-4xl">
                What patients are saying
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.map((quote, index) => (
                <motion.div
                  key={quote}
                  className="rounded-3xl border border-vo-border/70 bg-vo-white p-6 shadow-sm"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="text-base font-medium leading-relaxed text-vo-black/80">
                    “{quote}”
                  </p>
                  <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.3em] text-vo-muted">
                    Patient {index + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-vo-white py-14 sm:py-18">
          <div
            className={`${containerClass} grid gap-6 rounded-4xl border border-vo-border/80 bg-gradient-to-br from-vo-white via-vo-white to-vo-blue-soft/20 p-8 shadow-card shadow-vo-blue/10 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,0.9fr)]`}
          >
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-vo-muted">
                Book a Session
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-vo-black sm:text-4xl">
                Reserve time with Dr. Pinakin Ayare
              </h2>
              <p className="text-base leading-relaxed text-vo-black/70">
                Share your details and we’ll confirm your booking on WhatsApp.
              </p>
            </div>
            <form
              onSubmit={handleContactSubmit}
              className="flex flex-col gap-4 rounded-3xl border border-vo-border/70 bg-vo-white/80 p-6 shadow-card shadow-vo-blue/10 backdrop-blur"
            >
              <label className="flex flex-col gap-2 text-sm font-semibold text-vo-black/80">
                <span>Full name</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="h-12 rounded-2xl border border-vo-border/70 bg-white px-4 text-sm font-medium text-vo-black placeholder:text-vo-muted/70 focus:border-vo-blue focus:outline-none focus:ring-2 focus:ring-vo-blue/30"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-vo-black/80">
                <span>Mobile number</span>
                <div className="flex items-center gap-3 rounded-2xl border border-vo-border/70 bg-white px-4">
                  <span className="text-sm font-semibold text-vo-black/80">+91</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    placeholder="Enter your mobile number"
                    className="h-10 flex-1 border-none bg-transparent text-sm font-medium text-vo-black placeholder:text-vo-muted/70 focus:outline-none"
                  />
                </div>
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-vo-blue px-6 py-3 text-sm font-semibold tracking-tight text-vo-white shadow-card shadow-vo-blue/30 transition-colors hover:bg-[#3D92E0]"
              >
                Book Appointment
              </button>
              <p className="text-xs font-medium text-vo-muted">
                We’ll reach out within 24 hours to confirm your slot.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-vo-black text-vo-white">
        <div
          className={`${containerClass} flex flex-col gap-8 py-12 lg:flex-row lg:items-center lg:justify-between`}
        >
          <div className="space-y-4">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <img
                src={vo2maxLogo}
                alt="VO2 Max"
                className="h-12 w-auto object-contain"
              />
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.28em] text-vo-blue-soft">
                  VO2 Max
                </span>
                <p className="text-base font-semibold">Dr. Pinakin Ayare</p>
              </div>
            </a>
            <p className="text-sm text-vo-white/70">
              Precision physiotherapy, advanced sports rehabilitation, and holistic wellness—crafted for peak performance.
            </p>
            <div className="mb-4 flex flex-wrap justify-center gap-3 sm:mb-0 sm:justify-start sm:gap-4">
              <a
                href="https://www.instagram.com/pinakinayare/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-transparent transition-colors hover:border-vo-blue-soft hover:text-vo-blue-soft"
                aria-label="Instagram"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/pinakinphysio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-transparent transition-colors hover:border-vo-blue-soft hover:text-vo-blue-soft"
                aria-label="Facebook"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pinakin-ayare/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-transparent transition-colors hover:border-vo-blue-soft hover:text-vo-blue-soft"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-transparent transition-colors hover:border-vo-blue-soft hover:text-vo-blue-soft"
                aria-label="Clinic location"
              >
                <MapPin size={20} />
                <span className="sr-only">Clinic location</span>
              </a>
              <a
                href="https://www.hexahealth.com/mysore/doctor/dr-pinakin-prakash-ayare-physiotherapy-and-rehabilitation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-transparent transition-colors hover:border-vo-blue-soft hover:text-vo-blue-soft"
                aria-label="Hexa Health profile"
              >
                <ExternalLink size={20} />
                <span className="sr-only">Hexa Health profile</span>
              </a>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-3 text-sm font-semibold tracking-tight text-vo-white/80 sm:mx-0 sm:items-start sm:gap-4">
            <BookButton className="w-full justify-center px-7 py-3" />
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
              className="flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-5 py-3 text-vo-white transition-colors transition-transform duration-200 hover:border-vo-blue-soft hover:text-vo-blue-soft active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vo-blue/50"
              aria-label={`Call VO2 Max at ${PHONE_NUMBER}`}
              title={`Call ${PHONE_NUMBER}`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-vo-white">
                <Phone size={18} />
              </span>
              <span>{PHONE_NUMBER}</span>
            </a>
            <a
              href={EMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-transparent px-5 py-3 text-vo-white transition-colors transition-transform duration-200 hover:border-vo-blue-soft hover:text-vo-blue-soft active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vo-blue/50"
              aria-label={`Email VO2 Max at ${EMAIL_ADDRESS}`}
              title={`Email ${EMAIL_ADDRESS}`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-vo-white">
                <Mail size={18} />
              </span>
              <span>{EMAIL_ADDRESS}</span>
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 py-6">
          <div className={`${containerClass} flex flex-col items-center justify-between gap-3 text-xs text-vo-white/50 sm:flex-row`}>
            <span>© {new Date().getFullYear()} VO2 Max. All rights reserved.</span>
            <span className="flex gap-2 text-vo-white/40">
              <span>Care. Performance. Recovery.</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
