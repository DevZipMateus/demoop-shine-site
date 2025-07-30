
import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Nossa <span className="text-demoop-teal">Localização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visite nossa loja física em Morro da Fumaça e conheça nossa variedade 
            completa de produtos de limpeza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-demoop-light-teal to-demoop-light-blue rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-demoop-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Inocente Pagnan, 255<br />
                      Centro, Morro da Fumaça - SC
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-demoop-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                    <a 
                      href="tel:+5548999982838" 
                      className="text-demoop-teal hover:text-demoop-blue transition-colors duration-200"
                    >
                      (48) 99998-2838
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-demoop-teal rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                    <a 
                      href="mailto:demoop@outlook.com" 
                      className="text-demoop-teal hover:text-demoop-blue transition-colors duration-200"
                    >
                      demoop@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-demoop-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horário de Funcionamento</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Segunda a Sexta: 8:00 - 18:00</p>
                      <p>Sábado: 8:00 - 12:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Siga-nos nas Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/demooplimpeza" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  aria-label="Seguir Demoop no Instagram"
                >
                  <span>📷</span>
                  <span>@demooplimpeza</span>
                </a>
                <a 
                  href="#"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
                  aria-label="Seguir Demoop no Facebook"
                >
                  <span>📘</span>
                  <span>Demoop</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.814717247598!2d-49.18300932350506!3d-28.650000099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952119d67db5fd23%3A0x123456789abcdef0!2sAv.%20Inocente%20Pagnan%2C%20255%20-%20Centro%2C%20Morro%20da%20Fuma%C3%A7a%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1641234567890!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Demoop - Av. Inocente Pagnan, 255, Centro, Morro da Fumaça - SC"
            ></iframe>
            
            <div className="p-6 bg-white">
              <a 
                href="https://www.google.com/maps/place/Av.+Inocente+Pagnan,+255+-+Centro,+Morro+da+Fumaça+-+SC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-demoop-teal text-white px-6 py-3 rounded-lg hover:bg-demoop-teal/90 transition-colors duration-300 font-semibold"
                aria-label="Abrir localização no Google Maps"
              >
                <MapPin className="h-5 w-5" />
                <span>Ver no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
