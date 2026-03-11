import { Check } from "lucide-react";
import cameraImage from "@/assets/camera-security.jpg";

const features = [
  "Cámaras IP Full HD y 4K",
  "Visión nocturna inteligente",
  "Detección de movimiento con IA",
  "Monitoreo remoto desde tu celular",
  "Grabación en NVR y nube",
  "Cámaras domo, bullet y PTZ",
  "Sistemas anti-vandálicos IP67",
  "Integración con alarmas y portones",
];

const CameraServices = () => {
  return (
    <section id="camaras" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src={cameraImage}
              alt="Cámara de seguridad profesional CCTV"
              className="w-full rounded-2xl shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl bg-accent/10 -z-10" />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Vigilancia
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
              Cámaras de Seguridad
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Sistemas de videovigilancia profesional para hogares, empresas y condominios.
              Monitorea tu propiedad en tiempo real desde cualquier lugar del mundo con tu celular.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <Check size={18} className="text-accent mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cotizar"
              className="inline-flex px-7 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CameraServices;
