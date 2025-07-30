
import React from 'react';
import { Target, Eye, Heart, Users, Briefcase, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Sobre a <span className="text-demoop-teal">Demoop</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma empresa dedicada à excelência em produtos de limpeza, 
            com 9 anos de tradição no mercado oferecendo soluções completas.
          </p>
        </div>

        {/* Company Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Nossa História
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Somos uma loja especializada na revenda de produtos de limpeza nacionais e regionais. 
              Há 9 anos no mercado, oferecemos produtos e utensílios para uma limpeza prática e eficiente.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Atendemos tanto no varejo quanto empresas e pessoas físicas, sempre com o compromisso 
              de oferecer qualidade superior e atendimento personalizado.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-demoop-teal" />
                <span className="text-gray-700">9 anos no mercado</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-demoop-teal" />
                <span className="text-gray-700">Produtos nacionais</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-demoop-teal" />
                <span className="text-gray-700">Produtos regionais</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-demoop-teal" />
                <span className="text-gray-700">Atendimento personalizado</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80"
              alt="Ambiente limpo e organizado representando a qualidade dos produtos Demoop"
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-demoop-teal/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-demoop-light-teal rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-demoop-teal rounded-full flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Missão</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Nosso compromisso é oferecer aos nossos clientes a melhor seleção de produtos de limpeza 
              e utensílios, garantindo qualidade e eficiência. Buscamos facilitar a vida cotidiana com 
              soluções práticas que promovem um ambiente limpo e saudável.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-demoop-light-blue rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-demoop-blue rounded-full flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Visão</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Ser reconhecida como a principal referência no fornecimento de produtos e utensílios 
              de limpeza, promovendo a excelência em qualidade e inovação.
            </p>
          </div>
        </div>

        {/* What we serve */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Quem <span className="text-demoop-teal">Atendemos</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-demoop-teal">
              <Users className="h-12 w-12 text-demoop-teal mr-4" />
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Pessoas Físicas</h4>
                <p className="text-gray-600">Produtos para limpeza doméstica e uso pessoal</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-demoop-blue">
              <Briefcase className="h-12 w-12 text-demoop-blue mr-4" />
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Empresas</h4>
                <p className="text-gray-600">Soluções profissionais para limpeza empresarial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
