import PageHead from "@/components/PageHead";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import gateImage from "@/assets/gate-service.jpg";
import heroImage from "@/assets/hero-gate.jpg";

const types = [
  {
    title: "Portón Corredero",
    desc: "Ideal para espacios amplios. Se desliza lateralmente sobre un riel, maximizando el espacio disponible.",
    features: ["Riel de acero galvanizado", "Motor de alta potencia", "Sensor antiaplastamiento", "Control remoto y app"],
  },
  {
    title: "Portón Abatible",
    desc: "Diseño clásico con apertura de doble hoja. Perfecto para residencias con estilo tradicional o moderno.",
    features: ["Doble hoja independiente", "Brazos articulados", "Cierre automático", "Cerradura electrónica"],
  },
  {
    title: "Portón Seccional",
    desc: "Apertura vertical por secciones. Máximo aprovechamiento del espacio en garajes y estacionamientos.",
    features: ["Paneles aislantes", "Operación silenciosa", "Seguridad anti-caída", "Iluminación LED integrada"],
  },
  {
    title: "Barrera Vehicular",
    desc: "Control de acceso para condominios, empresas y estacionamientos comerciales.",
    features: ["Apertura en 1.5 segundos", "Contador de vehículos", "Integración con TAG", "Brazo de hasta 6 metros"],
  },
];

const Portones = () => {
  return (
    <>
      <PageHead
        title="Portones Automáticos en Santiago | Instalación y Mantención - ENERSYK"
        description="Instalación profesional de portones automáticos correderos, abatibles y seccionales en Santiago, Chile. Motor de alta potencia, control remoto y app móvil."
      />

      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Portón automático moderno" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
          <div className="absolute inset-0 bg-gradient-to-t from-hero/90 via-hero/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6">
            Portones <span className="gradient-text">Automáticos</span>
          </h1>
          <p className="text-hero-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Diseño, instalación y mantención profesional de portones automatizados para casas, empresas y condominios en Santiago y todo Chile.
          </p>
          <Link
            to="/contacto"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Cotizar Portón
          </Link>
        </div>
      </section>

      {/* Types */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Tipos de Portones</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Encuentra el portón ideal para ti
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {types.map((t, i) => (
              <div key={i} className="glass-card p-8 hover:glow-border transition-shadow duration-500">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{t.title}</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{t.desc}</p>
                <ul className="space-y-2">
                  {t.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <Check size={16} className="text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-section-alt">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nuestro Proceso</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
              ¿Cómo trabajamos?
            </h2>
          </div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Visita Técnica Gratuita", desc: "Un especialista visita tu propiedad para evaluar el espacio, tomar medidas y entender tus necesidades." },
              { step: "02", title: "Cotización Personalizada", desc: "Te enviamos una propuesta detallada con opciones de portón, motor y accesorios, todo a tu medida." },
              { step: "03", title: "Instalación Profesional", desc: "Nuestro equipo técnico instala y configura todo el sistema en 1-2 días hábiles." },
              { step: "04", title: "Garantía y Soporte", desc: "Entregamos garantía completa y acceso a soporte técnico 24/7 para tu tranquilidad." },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 items-start">
                <span className="font-display text-3xl font-bold text-primary/30">{s.step}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            ¿Necesitas un portón automático?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Cotiza gratis y recibe una visita técnica sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contacto" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
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

export default Portones;
