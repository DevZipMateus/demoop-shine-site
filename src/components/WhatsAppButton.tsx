
import React from 'react';

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
      <img 
        src="/lovable-uploads/c927bf5e-aeb6-40d3-b9ec-6ae4bceda604.png" 
        alt="WhatsApp"
        className="h-full w-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
};

export default WhatsAppButton;
