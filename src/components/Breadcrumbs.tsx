import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeNames: Record<string, string> = {
  portones: "Portones Automáticos",
  camaras: "Cámaras de Seguridad",
  portafolio: "Portafolio",
  contacto: "Contacto",
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-20 pb-4">
      <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
            <Home size={14} />
            Inicio
          </Link>
        </li>
        {segments.map((seg, i) => (
          <li key={seg} className="flex items-center gap-1.5">
            <ChevronRight size={14} />
            {i === segments.length - 1 ? (
              <span className="text-foreground font-medium">{routeNames[seg] || seg}</span>
            ) : (
              <Link to={`/${segments.slice(0, i + 1).join("/")}`} className="hover:text-foreground transition-colors">
                {routeNames[seg] || seg}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
