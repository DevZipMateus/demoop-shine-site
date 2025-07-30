
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappMessage = `Olá! Vim através do site da Demoop e gostaria de mais informações sobre produtos de limpeza.`;
  const whatsappUrl = `https://wa.me/5548999982838?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 group-hover:scale-110 transition-transform duration-300" />
    </a>
  );
};

export default WhatsAppButton;
