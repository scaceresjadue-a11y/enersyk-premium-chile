import PageHead from "@/components/PageHead";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const Contacto = () => {
  return (
    <>
      <PageHead
        title="Cotiza tu Proyecto Gratis | Portones y Cámaras - ENERSYK Santiago"
        description="Solicita una cotización gratuita para portones automáticos o cámaras de seguridad en Santiago, Chile. Respuesta en menos de 24 horas."
      />

      <section className="pt-24 pb-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contacto</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Cotiza tu proyecto <span className="gradient-text">gratis</span>
          </h1>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Completa el formulario o contáctanos directamente. Te respondemos en menos de 24 horas con una cotización personalizada.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="glass-card p-5 text-center">
              <Phone size={24} className="mx-auto text-primary mb-3" />
              <p className="text-sm font-medium text-foreground">Teléfono</p>
              <a href="tel:+56912345678" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                +56 9 5941 3134
              </a>
            </div>
            <div className="glass-card p-5 text-center">
              <div className="flex justify-center mb-3 text-primary"><WhatsAppIcon size={24} /></div>
              <p className="text-sm font-medium text-foreground">WhatsApp</p>
              <a
                href="https://wa.me/56912345678?text=Hola%20ENERSYK,%20quiero%20cotizar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Escribir ahora
              </a>
            </div>
            <div className="glass-card p-5 text-center">
              <Mail size={24} className="mx-auto text-primary mb-3" />
              <p className="text-sm font-medium text-foreground">Correo</p>
              <a href="mailto:contacto@enersyk.cl" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                contacto@enersyk.cl
              </a>
            </div>
            <div className="glass-card p-5 text-center">
              <Clock size={24} className="mx-auto text-primary mb-3" />
              <p className="text-sm font-medium text-foreground">Horario</p>
              <p className="text-sm text-muted-foreground">Lun-Sáb 8:00 - 19:00</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Contacto;
