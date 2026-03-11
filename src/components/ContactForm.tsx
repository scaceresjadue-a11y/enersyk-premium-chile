import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Portón Corredero Automático",
  "Portón Abatible Automático",
  "Portón Seccional de Garaje",
  "Barrera Vehicular",
  "Cámaras de Seguridad Residencial",
  "Cámaras de Seguridad Empresarial",
  "Sistema Completo (Portón + Cámaras)",
  "Mantención y Reparación",
  "Otro",
];

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      toast.success("¡Solicitud enviada! Te contactaremos pronto.");
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow text-sm";

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Contáctanos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Cotiza tu proyecto gratis
          </h2>
          <p className="text-muted-foreground mt-3">
            Completa el formulario y te enviaremos una cotización personalizada en menos de 24 horas.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Nombre completo *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                placeholder="Juan Pérez"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                Teléfono *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                maxLength={20}
                placeholder="+56 9 1234 5678"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              Correo electrónico *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={255}
              placeholder="juan@correo.cl"
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">
                Servicio *
              </label>
              <select id="service" name="service" required className={inputClass}>
                <option value="">Selecciona un servicio</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-foreground mb-1.5">
                Comuna / Ciudad *
              </label>
              <input
                id="city"
                name="city"
                type="text"
                required
                maxLength={100}
                placeholder="Las Condes, Santiago"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
              Mensaje (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={1000}
              placeholder="Cuéntanos sobre tu proyecto..."
              className={inputClass + " resize-none"}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? (
              "Enviando..."
            ) : (
              <>
                <Send size={18} />
                Enviar Cotización
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
