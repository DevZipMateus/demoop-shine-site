
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Valdete",
      text: "Demoop nosso shopping da limpeza, tudo que você procura para uma limpeza eficiente você encontra!",
      rating: 5
    },
    {
      name: "Maria",
      text: "Você encontra sempre produtos maravilhosos para auxiliar nosso dia a dia!",
      rating: 5
    },
    {
      name: "Joana",
      text: "Melhores panos para limpeza você encontra aqui!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-demoop-light-teal to-demoop-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            O que nossos <span className="text-demoop-teal">Clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos clientes é o que nos motiva a continuar oferecendo 
            os melhores produtos de limpeza há 9 anos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="h-8 w-8 text-demoop-teal" />
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-demoop-teal to-demoop-blue rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">Cliente Demoop</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Por que escolher a <span className="text-demoop-teal">Demoop</span>?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-demoop-teal mb-2">9</div>
                <p className="text-gray-600">Anos de experiência</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-demoop-blue mb-2">100+</div>
                <p className="text-gray-600">Produtos disponíveis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-demoop-teal mb-2">★★★★★</div>
                <p className="text-gray-600">Avaliação dos clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
