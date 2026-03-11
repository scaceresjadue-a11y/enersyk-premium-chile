import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carolina Muñoz",
    location: "Las Condes",
    text: "Excelente servicio. El portón quedó impecable y la instalación fue rapidísima. Muy profesionales.",
    rating: 5,
  },
  {
    name: "Roberto Sánchez",
    location: "Providencia",
    text: "Instalaron 6 cámaras en mi empresa. La calidad de imagen es increíble y puedo ver todo desde mi celular.",
    rating: 5,
  },
  {
    name: "María José Fuentes",
    location: "Vitacura",
    text: "Contraté portón y cámaras. El precio fue muy competitivo y la atención postventa es de primera.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
