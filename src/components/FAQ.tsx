import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿En qué ciudades de Chile trabajan?",
    a: "Operamos en toda la Región Metropolitana y principales ciudades de Chile. Consulta por tu comuna y te confirmaremos disponibilidad inmediata.",
  },
  {
    q: "¿Cuánto demora la instalación de un portón automático?",
    a: "La instalación estándar toma entre 1 y 2 días hábiles. Para proyectos especiales o industriales, el plazo puede extenderse según la complejidad del trabajo.",
  },
  {
    q: "¿Qué garantía ofrecen en sus equipos?",
    a: "Todos nuestros equipos cuentan con garantía de fábrica de 2 a 5 años según el producto. Además, ofrecemos garantía de instalación de 1 año.",
  },
  {
    q: "¿Puedo ver las cámaras desde mi celular?",
    a: "Sí. Todos nuestros sistemas incluyen configuración de acceso remoto. Podrás ver tus cámaras en tiempo real desde cualquier smartphone o computador.",
  },
  {
    q: "¿Realizan mantenciones preventivas?",
    a: "Sí, ofrecemos planes de mantención preventiva programada para portones y sistemas de cámaras. Esto alarga la vida útil de tus equipos y previene fallas.",
  },
  {
    q: "¿Cuáles son las formas de pago?",
    a: "Aceptamos transferencia bancaria, tarjeta de débito y crédito, y también ofrecemos facilidades de pago en cuotas para proyectos de mayor envergadura.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-section-alt">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Preguntas Frecuentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Resolvemos tus dudas
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card px-6 border-none"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
