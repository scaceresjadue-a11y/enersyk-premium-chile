import { Shield, Zap, Headphones, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Seguridad Certificada",
    description: "Equipos de marcas líderes mundiales con garantía directa. Tu inversión protegida.",
  },
  {
    icon: Zap,
    title: "Instalación Rápida",
    description: "Equipos instalados y operativos en 24-48 horas. Sin demoras ni complicaciones.",
  },
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description: "Atención técnica permanente. Respuesta inmediata ante cualquier emergencia.",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "Más de 500 proyectos exitosos en la Región Metropolitana y todo Chile.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            La diferencia ENERSYK
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="glass-card p-8 text-center hover:glow-border transition-shadow duration-500"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
                <b.icon size={28} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
