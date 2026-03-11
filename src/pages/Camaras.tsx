import PageHead from "@/components/PageHead";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Eye, Wifi, Shield, Smartphone } from "lucide-react";
import cameraImage from "@/assets/camera-security.jpg";

const solutions = [
  {
    icon: Eye,
    title: "Residencial",
    desc: "Protege tu hogar con cámaras discretas de alta resolución. Monitoreo 24/7 desde tu celular.",
    features: ["Cámaras domo y bullet", "Visión nocturna 30m", "Grabación local + nube", "Detección de personas"],
  },
  {
    icon: Shield,
    title: "Empresarial",
    desc: "Vigilancia integral para oficinas, bodegas y locales comerciales con análisis inteligente.",
    features: ["Cámaras PTZ motorizadas", "Analítica de video IA", "Integración con alarmas", "Acceso multi-usuario"],
  },
  {
    icon: Wifi,
    title: "Condominios",
    desc: "Sistemas centralizados para áreas comunes, estacionamientos y accesos de condominios.",
    features: ["Hasta 64 cámaras", "NVR profesional", "Monitoreo en conserjería", "Respaldo redundante"],
  },
  {
    icon: Smartphone,
    title: "Monitoreo Remoto",
    desc: "Visualiza tus cámaras en tiempo real desde cualquier lugar del mundo con tu smartphone.",
    features: ["App iOS y Android", "Alertas instantáneas", "Reproducción histórica", "Compartir acceso"],
  },
];

const Camaras = () => {
  return (
    <>
      <PageHead
        title="Cámaras de Seguridad en Santiago | CCTV Profesional - ENERSYK"
        description="Instalación de cámaras de seguridad CCTV en Santiago, Chile. Sistemas IP Full HD y 4K con monitoreo remoto, visión nocturna y detección IA."
      />

      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={cameraImage} alt="Cámara de seguridad profesional" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-t from-hero/90 via-hero/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6">
            Cámaras de <span className="gradient-text">Seguridad</span>
          </h1>
          <p className="text-hero-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Sistemas de videovigilancia profesional con tecnología IP de última generación. Monitorea tu propiedad desde cualquier lugar.
          </p>
          <Link
            to="/contacto"
            className="inline-flex px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Cotizar Sistema
          </Link>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Soluciones</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Seguridad para cada necesidad
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <div key={i} className="glass-card p-8 hover:glow-border transition-shadow duration-500">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-5">
                  <s.icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <Check size={16} className="text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-padding bg-section-alt">
        <div className="container mx-auto text-center max-w-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Calidad Garantizada</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground mb-6">
            Trabajamos con marcas líderes
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Utilizamos equipos de las mejores marcas del mercado: Hikvision, Dahua, Axis y Hanwha.
            Todos nuestros productos cuentan con garantía oficial y soporte técnico en Chile.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Hikvision", "Dahua", "Axis", "Hanwha"].map((brand) => (
              <div key={brand} className="glass-card p-6 flex items-center justify-center">
                <span className="font-display font-bold text-lg text-muted-foreground">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            Protege lo que más importa
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Solicita una evaluación gratuita de seguridad para tu hogar o empresa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
              Cotizar Ahora <ArrowRight size={18} />
            </Link>
            <Link to="/portafolio" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-secondary transition-colors">
              Ver Proyectos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Camaras;
