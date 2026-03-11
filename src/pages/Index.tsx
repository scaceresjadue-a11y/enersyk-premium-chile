import PageHead from "@/components/PageHead";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-gate.jpg";
import cameraImage from "@/assets/camera-security.jpg";

const Index = () => {
  return (
    <>
      <PageHead
        title="ENERSYK | Portones Automáticos y Cámaras de Seguridad en Santiago, Chile"
        description="ENERSYK: expertos en automatización de portones y cámaras de seguridad en Santiago, Chile. Instalación profesional, soporte 24/7. Cotiza gratis."
      />
      <Hero />
      <Benefits />

      {/* Services preview */}
      <section className="section-padding bg-section-alt">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Nuestros Servicios
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Soluciones de seguridad integral
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card overflow-hidden group hover:glow-border transition-shadow duration-500">
              <div className="aspect-video overflow-hidden">
                <img src={heroImage} alt="Portón automático residencial en Santiago" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Portones Automáticos</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Diseño, instalación y mantención de portones correderos, abatibles y seccionales con tecnología de última generación.
                </p>
                <Link to="/portones" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Ver más <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="glass-card overflow-hidden group hover:glow-border transition-shadow duration-500">
              <div className="aspect-video overflow-hidden">
                <img src={cameraImage} alt="Sistema de cámaras de seguridad CCTV" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Cámaras de Seguridad</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Sistemas de videovigilancia profesional con monitoreo remoto, visión nocturna y detección inteligente.
                </p>
                <Link to="/camaras" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  Ver más <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Listo para proteger tu hogar?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Cotiza sin compromiso y recibe una propuesta personalizada en menos de 24 horas.
          </p>
          <Link
            to="/contacto"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity animate-pulse-glow"
          >
            Cotizar Proyecto
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
