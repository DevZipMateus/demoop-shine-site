import React from 'react';
import { Sparkles, Droplets, Brush, ShoppingBag, Truck, HeartHandshake } from 'lucide-react';

const Services = () => {
  const services = [{
    icon: <Sparkles className="h-8 w-8" />,
    title: "Produtos Nacionais",
    description: "Ampla variedade de produtos de limpeza das melhores marcas nacionais, garantindo qualidade e eficiência.",
    color: "bg-demoop-teal"
  }, {
    icon: <Droplets className="h-8 w-8" />,
    title: "Produtos Regionais",
    description: "Seleção especial de produtos regionais que atendem às necessidades específicas da sua região.",
    color: "bg-demoop-blue"
  }, {
    icon: <Brush className="h-8 w-8" />,
    title: "Utensílios de Limpeza",
    description: "Ferramentas e utensílios essenciais para uma limpeza completa e eficiente em qualquer ambiente.",
    color: "bg-demoop-teal"
  }, {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "Vendas no Varejo",
    description: "Atendimento personalizado para compras individuais com produtos de alta qualidade.",
    color: "bg-demoop-blue"
  }, {
    icon: <Truck className="h-8 w-8" />,
    title: "Fornecimento Empresarial",
    description: "Soluções completas para empresas com produtos profissionais e atendimento especializado.",
    color: "bg-demoop-teal"
  }, {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: "Consultoria Personalizada",
    description: "Orientação especializada para escolher os melhores produtos para suas necessidades específicas.",
    color: "bg-demoop-blue"
  }];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Nossos <span className="text-demoop-teal">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de produtos e serviços para atender todas as suas necessidades de limpeza, 
            com a qualidade e confiança de 9 anos no mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-demoop-teal hover:border-demoop-blue"
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-demoop-teal transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-demoop-teal to-demoop-blue rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Precisa de produtos de limpeza?
            </h3>
            <p className="text-xl mb-8 text-white opacity-90">
              Entre em contato conosco e encontre a solução perfeita para suas necessidades!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5548999982838" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-demoop-teal px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105" 
                aria-label="Entre em contato via WhatsApp"
              >
                📱 WhatsApp: (48) 99998-2838
              </a>
              <a 
                href="mailto:demoop@outlook.com" 
                className="bg-white text-demoop-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105" 
                aria-label="Entre em contato via e-mail"
              >
                📧 demoop@outlook.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
