import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/portones", label: "Portones" },
  { to: "/camaras", label: "Cámaras" },
  { to: "/portafolio", label: "Portafolio" },
  { to: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-xl font-bold tracking-tight gradient-text">
          ENERSYK
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.to
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contacto"
          className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Cotizar Proyecto
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Abrir menú"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-card border-b border-border animate-fade-in">
          <ul className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors",
                    pathname === link.to
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="block mt-2 text-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
              >
                Cotizar Proyecto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
