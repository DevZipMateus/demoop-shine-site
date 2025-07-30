
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/a921157f-49aa-4e04-92cd-d937582e909f.png" 
                alt="Demoop Logo"
                className="h-10 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Há 9 anos oferecendo os melhores produtos de limpeza nacionais e regionais. 
              Qualidade, eficiência e tradição em cada produto.
            </p>
            <p className="text-demoop-teal font-semibold text-lg">
              "A limpeza que faz a diferença"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Navegação</h3>
            <nav className="space-y-2">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'servicos', label: 'Serviços' },
                { id: 'depoimentos', label: 'Depoimentos' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-300 hover:text-demoop-teal transition-colors duration-200 focus:outline-none focus:text-demoop-teal"
                  aria-label={`Navegar para seção ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-demoop-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Av. Inocente Pagnan, 255<br />
                    Centro, Morro da Fumaça - SC
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-demoop-teal flex-shrink-0" />
                <a 
                  href="tel:+5548999982838" 
                  className="text-gray-300 hover:text-demoop-teal transition-colors duration-200"
                >
                  (48) 99998-2838
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-demoop-teal flex-shrink-0" />
                <a 
                  href="mailto:demoop@outlook.com" 
                  className="text-gray-300 hover:text-demoop-teal transition-colors duration-200"
                >
                  demoop@outlook.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.instagram.com/demooplimpeza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Seguir Demoop no Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a 
                href="#"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Seguir Demoop no Facebook"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Horário de Funcionamento</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Segunda a Sexta: 8:00 - 18:00</p>
                <p>Sábado: 8:00 - 12:00</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {currentYear} Demoop Produtos de Limpeza e Descartáveis. Todos os direitos reservados.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                CNPJ: XX.XXX.XXX/XXXX-XX
              </p>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Site desenvolvido com</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>para a Demoop</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
