import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/swaralogy-logo.png";

const navLinks = [
  { label: "Music", path: "/music" },
  { label: "Merch", path: "/merch" },
  { label: "Videos", path: "/videos" },
  { label: "Tour", path: "/tour" },
  { label: "Info", path: "/info" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity" aria-label="Swaralogy — home">
            <img src={logo} alt="Swaralogy — the home studio" className="h-32 md:h-40 w-auto object-contain" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                  pathname === link.path
                    ? "text-foreground"
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-background z-[60] md:hidden flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-foreground"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-semibold text-foreground uppercase tracking-widest hover:text-foreground/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
