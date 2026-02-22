import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppUrl, HOTEL_EMAIL, HOTEL_ADDRESS, WHATSAPP_NUMBER } from "@/data/hotel";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Apartments", path: "/apartments" },
  { label: "About", path: "/about" },
  { label: "Reviews", path: "/reviews" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHome ? "bg-primary/80 backdrop-blur-md" : "bg-primary shadow-lg"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl lg:text-2xl font-bold text-primary-foreground tracking-wide">
            Castillo Dalilah
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`font-body text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-primary-foreground/90"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={getWhatsAppUrl("Hello, I'd like to learn more about Hotel Castillo Dalilah.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md bg-accent px-4 py-2 font-body text-sm font-semibold text-accent-foreground transition-all hover:shadow-gold hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-primary-foreground/10"
          >
            <ul className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block font-body text-base py-2 transition-colors ${
                      location.pathname === link.path
                        ? "text-accent font-semibold"
                        : "text-primary-foreground/90"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={getWhatsAppUrl("Hello, I'd like to learn more about Hotel Castillo Dalilah.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 font-body text-sm font-semibold text-accent-foreground"
                >
                  <Phone className="h-4 w-4" />
                  Book Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-accent mb-4">Castillo Dalilah</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              A luxury coastal retreat in El Ouatia, Tan-Tan, Morocco. Experience the perfect family beach holiday.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Contact
            </h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              <li>{HOTEL_ADDRESS}</li>
              <li>
                <a href={`mailto:${HOTEL_EMAIL}`} className="hover:text-accent transition-colors">
                  {HOTEL_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl("Hello!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp: +{WHATSAPP_NUMBER}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-body">
                Instagram
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-body">
                Facebook
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm font-body">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Hotel Castillo Dalilah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
