import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import logo4 from "@/assets/logo_4.png";

const footerLinks = [
  { to: "/", label: "Inicio" },
  { to: "/portones", label: "Portones Automáticos" },
  { to: "/camaras", label: "Cámaras de Seguridad" },
  { to: "/portafolio", label: "Portafolio" },
  { to: "/contacto", label: "Cotizar Proyecto" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">ENERSYK</h3>
            <p className="text-background/60 text-sm leading-relaxed">
              Especialistas en automatización de portones y sistemas de seguridad para
              hogares y empresas en Santiago, Chile.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2 text-sm text-background/60">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+56912345678" className="hover:text-background transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:contacto@enersyk.cl" className="hover:text-background transition-colors">
                  contacto@enersyk.cl
                </a>
              </li>
              <li className="flex items-center gap-2">
                <WhatsAppIcon size={16} />
                <a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Santiago, Chile
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
          © {new Date().getFullYear()} ENERSYK. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
