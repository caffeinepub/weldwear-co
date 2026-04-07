import { Link, useLocation } from "@tanstack/react-router";
import { Flame, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-ocid="nav.link"
          >
            <Flame className="w-6 h-6 text-neon-cyan" fill="currentColor" />
            <span className="font-display text-xl font-extrabold tracking-widest uppercase neon-text-cyan">
              WeldWear Co.
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  data-ocid="nav.link"
                  className={`text-sm font-body font-semibold uppercase tracking-widest transition-colors duration-200 ${
                    location.pathname === link.to
                      ? "text-neon-cyan"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right icons / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/shop"
              data-ocid="nav.primary_button"
              className="btn-neon-cyan text-xs font-display font-black uppercase tracking-widest px-4 py-2 rounded-sm"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden text-foreground p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid="nav.link"
                    onClick={() => setMenuOpen(false)}
                    className={`block text-sm font-display font-bold uppercase tracking-widest transition-colors ${
                      location.pathname === link.to
                        ? "text-neon-cyan"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/shop"
                  data-ocid="nav.primary_button"
                  onClick={() => setMenuOpen(false)}
                  className="btn-neon-cyan block text-center text-xs font-display font-black uppercase tracking-widest px-4 py-3 rounded-sm"
                >
                  Shop Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
