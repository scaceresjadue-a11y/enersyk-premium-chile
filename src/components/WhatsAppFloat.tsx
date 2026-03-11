import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/56912345678?text=Hola%20ENERSYK,%20quiero%20cotizar%20un%20proyecto"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] text-[hsl(0_0%_100%)] shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      style={{ "--glow": "142 70% 45%" } as React.CSSProperties}
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFloat;
