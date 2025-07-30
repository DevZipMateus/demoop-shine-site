
import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const whatsappMessage = `Olá! Vim através do site da Demoop e gostaria de mais informações sobre produtos de limpeza.`;
  const whatsappUrl = `https://wa.me/5548999982838?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            Entre em <span className="text-demoop-teal">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você! Entre em contato conosco e descubra 
            os melhores produtos de limpeza para suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full focus:ring-demoop-teal focus:border-demoop-teal"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full focus:ring-demoop-teal focus:border-demoop-teal"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full focus:ring-demoop-teal focus:border-demoop-teal"
                    placeholder="(48) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full focus:ring-demoop-teal focus:border-demoop-teal"
                  placeholder="Como podemos ajudar você? Conte-nos sobre seus produtos de limpeza ideais..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-demoop-teal hover:bg-demoop-teal/90 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Quick Contact Options */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contato Direto
              </h3>
              
              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-all duration-300 group border-2 border-green-200 hover:border-green-300"
                  aria-label="Entrar em contato via WhatsApp"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-green-600 font-medium">(48) 99998-2838</p>
                  </div>
                </a>

                <a
                  href="tel:+5548999982838"
                  className="flex items-center space-x-4 p-4 bg-demoop-light-blue hover:bg-blue-100 rounded-lg transition-all duration-300 group border-2 border-blue-200"
                  aria-label="Ligar para a Demoop"
                >
                  <div className="w-12 h-12 bg-demoop-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telefone</h4>
                    <p className="text-demoop-blue font-medium">(48) 99998-2838</p>
                  </div>
                </a>

                <a
                  href="mailto:demoop@outlook.com"
                  className="flex items-center space-x-4 p-4 bg-demoop-light-teal hover:bg-teal-100 rounded-lg transition-all duration-300 group border-2 border-teal-200"
                  aria-label="Enviar e-mail para a Demoop"
                >
                  <div className="w-12 h-12 bg-demoop-teal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">E-mail</h4>
                    <p className="text-demoop-teal font-medium">demoop@outlook.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-demoop-teal to-demoop-blue rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Por que escolher a Demoop?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                  <span>9 anos de experiência no mercado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                  <span>Produtos nacionais e regionais</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                  <span>Atendimento personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                  <span>Qualidade garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
