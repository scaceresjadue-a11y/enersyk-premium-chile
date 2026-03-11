import PageHead from "@/components/PageHead";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-gate.jpg";
import gateImage from "@/assets/gate-service.jpg";
import cameraImage from "@/assets/camera-security.jpg";

const projects = [
  { image: heroImage, title: "Portón Corredero LED", location: "Las Condes, Santiago", category: "Portón" },
  { image: gateImage, title: "Portón Abatible Residencial", location: "Vitacura, Santiago", category: "Portón" },
  { image: cameraImage, title: "Sistema CCTV 8 Cámaras", location: "Providencia, Santiago", category: "Cámaras" },
  { image: heroImage, title: "Automatización Industrial", location: "Quilicura, Santiago", category: "Portón" },
  { image: cameraImage, title: "Vigilancia Condominio 32 cámaras", location: "La Florida, Santiago", category: "Cámaras" },
  { image: gateImage, title: "Portón Seccional Garaje", location: "Ñuñoa, Santiago", category: "Portón" },
  { image: cameraImage, title: "CCTV Oficinas Corporativas", location: "Santiago Centro", category: "Cámaras" },
  { image: heroImage, title: "Barrera Vehicular Condominio", location: "Lo Barnechea, Santiago", category: "Portón" },
  { image: gateImage, title: "Portón + Cámaras Integral", location: "Peñalolén, Santiago", category: "Integral" },
];

const Portafolio = () => {
  return (
    <>
      <PageHead
        title="Portafolio de Proyectos | Portones y Cámaras en Santiago - ENERSYK"
        description="Conoce nuestros proyectos de automatización de portones y cámaras de seguridad instalados en Santiago y la Región Metropolitana."
      />

      <section className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nuestro Trabajo</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Proyectos <span className="gradient-text">Realizados</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Más de 500 proyectos exitosos en la Región Metropolitana. Cada instalación refleja nuestro compromiso con la calidad y la seguridad.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background pt-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="group glass-card overflow-hidden hover:glow-border transition-shadow duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`Proyecto ENERSYK: ${p.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                  <h3 className="font-display font-semibold text-foreground mt-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">
            ¿Quieres un resultado como estos?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Cotiza tu proyecto y únete a nuestros más de 500 clientes satisfechos.
          </p>
          <Link
            to="/contacto"
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Cotizar Proyecto
          </Link>
        </div>
      </section>
    </>
  );
};

export default Portafolio;
