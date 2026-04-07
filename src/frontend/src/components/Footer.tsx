import { Link } from "@tanstack/react-router";
import { Flame } from "lucide-react";
import { SiInstagram, SiTiktok, SiX } from "react-icons/si";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const caffeinUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-neon-cyan" fill="currentColor" />
              <span className="font-display text-lg font-extrabold tracking-widest uppercase neon-text-cyan">
                WeldWear Co.
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-body">
              Forged in fire, built for the trade.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                data-ocid="footer.link"
                className="text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                data-ocid="footer.link"
                className="text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                data-ocid="footer.link"
                className="text-muted-foreground hover:text-neon-cyan transition-colors"
              >
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xs font-black uppercase tracking-widest text-foreground">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid="footer.link"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Amazon CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-xs font-black uppercase tracking-widest text-foreground">
              Shop Direct
            </h4>
            <p className="text-sm text-muted-foreground font-body">
              All shirts are fulfilled by Amazon — fast shipping, easy returns,
              trusted platform.
            </p>
            <a
              href="https://amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.primary_button"
              className="btn-neon-cyan inline-flex items-center justify-center text-xs font-display font-black uppercase tracking-widest px-5 py-3 rounded-sm mt-2 w-fit"
            >
              Shop on Amazon
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-body">
            © {year} WeldWear Co. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body">
            Built with ❤️ using{" "}
            <a
              href={caffeinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
