import heroImage from "@/assets/hero-gate.jpg";
import gateImage from "@/assets/gate-service.jpg";
import cameraImage from "@/assets/camera-security.jpg";

const projects = [
  { image: heroImage, title: "Portón Corredero LED", location: "Las Condes, Santiago" },
  { image: gateImage, title: "Portón Abatible Residencial", location: "Vitacura, Santiago" },
  { image: cameraImage, title: "Sistema CCTV 8 Cámaras", location: "Providencia, Santiago" },
  { image: heroImage, title: "Automatización Industrial", location: "Quilicura, Santiago" },
  { image: cameraImage, title: "Vigilancia Condominio", location: "La Florida, Santiago" },
  { image: gateImage, title: "Portón Seccional Garaje", location: "Ñuñoa, Santiago" },
];

const Portfolio = () => {
  return (
    <section id="portafolio" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Nuestro trabajo
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Proyectos Realizados
          </h2>
        </div>

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
                <h3 className="font-display font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
