import React from 'react';
import { Sparkles, ShoppingCart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-demoop-light-teal via-white to-demoop-light-blue opacity-80"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/321cba5f-d169-4032-9e69-b1a5df92b97a.png')`
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-gray-800 leading-tight">
            <span className="text-demoop-teal">Demoop</span>
            <br />
            <span className="text-demoop-blue">A limpeza que faz</span>
            <br />
            <span className="text-gray-700">a diferença</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Há 9 anos oferecendo os melhores produtos de limpeza nacionais e regionais. 
            Qualidade, eficiência e praticidade para empresas e pessoas físicas.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-demoop-teal rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Qualidade Superior</h3>
              <p className="text-gray-600 text-center">Produtos selecionados para máxima eficiência na limpeza</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-demoop-blue rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Variedade Completa</h3>
              <p className="text-gray-600 text-center">Tudo que você precisa para uma limpeza eficiente</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-demoop-teal rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">9 Anos de Experiência</h3>
              <p className="text-gray-600 text-center">Tradição e confiança no mercado de limpeza</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-demoop-teal hover:bg-demoop-teal/90 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              aria-label="Entrar em contato com a Demoop"
            >
              Entre em Contato
            </Button>
            <Button 
              onClick={() => scrollToSection('sobre')}
              variant="outline"
              className="border-2 border-demoop-blue text-demoop-blue hover:bg-demoop-blue hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
              aria-label="Saiba mais sobre a Demoop"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-4 h-4 bg-demoop-blue rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 bg-demoop-teal rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-3 h-3 bg-demoop-blue rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
