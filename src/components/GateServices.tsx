import { Check } from "lucide-react";
import gateImage from "@/assets/gate-service.jpg";

const features = [
  "Portones correderos automáticos",
  "Portones abatibles de doble hoja",
  "Portones seccionales de garaje",
  "Barreras vehiculares",
  "Motores de alta potencia y bajo consumo",
  "Control remoto, app móvil y huella digital",
  "Sensores antiaplastamiento",
  "Mantención preventiva programada",
];

const GateServices = () => {
  return (
    <section id="portones" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Automatización
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
              Portones Automáticos
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Diseñamos e instalamos sistemas de automatización para portones residenciales,
              comerciales e industriales. Máxima seguridad, comodidad y diseño que se integra
              perfectamente con tu propiedad.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <Check size={18} className="text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cotizar"
              className="inline-flex px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar Cotización
            </a>
          </div>
          <div className="relative">
            <img
              src={gateImage}
              alt="Portón automático instalado en casa moderna en Chile"
              className="w-full rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GateServices;
