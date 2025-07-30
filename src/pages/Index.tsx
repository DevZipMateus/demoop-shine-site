
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Set document title and meta tags for SEO
    document.title = 'Demoop - Produtos de Limpeza e Descartáveis | Morro da Fumaça - SC';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Demoop: 9 anos oferecendo os melhores produtos de limpeza nacionais e regionais em Morro da Fumaça. Qualidade, eficiência e tradição para empresas e pessoas físicas.');
    }

    // Add Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Demoop - Produtos de Limpeza e Descartáveis | A limpeza que faz a diferença');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Demoop: 9 anos oferecendo os melhores produtos de limpeza nacionais e regionais em Morro da Fumaça. Qualidade, eficiência e tradição.');
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Demoop Produtos de Limpeza e Descartáveis",
      "description": "Loja especializada em produtos de limpeza nacionais e regionais há 9 anos no mercado",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Inocente Pagnan, 255",
        "addressLocality": "Morro da Fumaça",
        "addressRegion": "SC",
        "addressCountry": "BR"
      },
      "telephone": "+55-48-99998-2838",
      "email": "demoop@outlook.com",
      "url": "https://demoop.com.br",
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-12:00"
      ],
      "sameAs": [
        "https://www.instagram.com/demooplimpeza"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove the script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main role="main">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
