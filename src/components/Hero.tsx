import { Link } from "react-router-dom";
import WhatsAppIcon from "./WhatsAppIcon";
import heroImage from "@/assets/hero-gate.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Portón automático moderno con iluminación LED"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-hero/90 via-hero/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-glow/30 text-sm font-medium text-glow animate-fade-up">
          Automatización & Seguridad en Chile
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Protege tu hogar con{" "}
          <span className="gradient-text">tecnología inteligente</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-hero-foreground/70 mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Portones automáticos y cámaras de seguridad de última generación.
          Instalación profesional, soporte garantizado en todo Chile.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/contacto"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            Cotizar Proyecto
          </Link>
          <a
            href="https://wa.me/56959413134?text=Hola%20ENERSYK,%20quiero%20cotizar%20un%20proyecto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-hero-foreground/20 text-hero-foreground font-semibold text-lg hover:bg-hero-foreground/10 transition-colors"
          >
            <WhatsAppIcon size={20} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
