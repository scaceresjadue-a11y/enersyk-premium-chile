import WhatsAppIcon from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "56959413134";
const WHATSAPP_MESSAGE = "Hola ENERSYK, quiero cotizar un proyecto";

const WhatsAppFloat = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] text-white shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      style={{ "--glow": "142 70% 45%" } as React.CSSProperties}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
};

export default WhatsAppFloat;
