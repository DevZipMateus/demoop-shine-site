import React, { useEffect, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import QuantitySelector from '@/components/QuantitySelector';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Produtos = () => {
  const [isLoading, setIsLoading] = useState(true);
  useScrollToTop();

  useEffect(() => {
    console.log('Página Produtos carregada - URL:', window.location.href);
    console.log('Path:', window.location.pathname);
    
    // Set document title and meta tags (página principal)
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

    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
      console.log('Página Produtos totalmente carregada');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    { id: 1, image: '/lovable-uploads/galeria/5L - R$27,90  2L - R$12,90.jpeg', price: '5L - R$27,90 / 2L - R$12,90', name: 'Sabão Mecânico 5L' },
    { id: 2, image: '/lovable-uploads/galeria/R$    13,90.jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Floral Extra 5L' },
    { id: 3, image: '/lovable-uploads/galeria/R$    16,90 .jpeg', price: 'R$ 16,90', name: 'Cx Pano Microfibra com 20 Un' },
    { id: 4, image: '/lovable-uploads/galeria/R$    17,90  .jpeg', price: 'R$ 17,90', name: 'Saponáceo Aerosol 300mL' },
    { id: 5, image: '/lovable-uploads/galeria/R$   13,90 .jpeg', price: 'R$ 13,90', name: 'limpador perfumado Pinho 5L' },
    { id: 6, image: '/lovable-uploads/galeria/R$   13,90.jpeg', price: 'R$ 13,90', name: 'Limpador perfumado talco extra 5L' },
    { id: 7, image: '/lovable-uploads/galeria/R$   15,90.jpeg', price: 'R$ 15,90', name: 'Limpador Concentrado Coala 120ml - Chá branco' },
    { id: 8, image: '/lovable-uploads/galeria/R$  10,50.jpeg', price: 'R$ 10,50', name: 'Desinfetante Jabuticaba 2L' },
    { id: 9, image: '/lovable-uploads/galeria/R$  13,50.jpeg', price: 'R$ 13,50', name: 'Multi uso com Bicarbonato Lavanda 500ml' },
    { id: 10, image: '/lovable-uploads/galeria/R$  13,90    .jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Cravo e Canela 5L' },
    { id: 11, image: '/lovable-uploads/galeria/R$  13,90  .jpeg', price: 'R$ 13,90', name: 'Limpador Pefumado Amore 5L' },
    { id: 12, image: '/lovable-uploads/galeria/R$  13,90 .jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Marine 5L' },
    { id: 13, image: '/lovable-uploads/galeria/R$  13,90.jpeg', price: 'R$ 13,90', name: 'Aromatizante Ambiente Tutti Frutti 500ml' },
    { id: 14, image: '/lovable-uploads/galeria/R$  15,90.jpeg', price: 'R$ 15,90', name: 'Limpador Concentrado Coala 120ml Lavanda' },
    { id: 15, image: '/lovable-uploads/galeria/R$  29,90   .jpeg', price: 'R$ 29,90', name: 'Rodo Limpa vidros com reservatório' },
    { id: 16, image: '/lovable-uploads/galeria/R$  29,90 .png', price: 'R$ 29,90', name: 'Lava Roupas Concentrado 3L' },
    { id: 17, image: '/lovable-uploads/galeria/R$  32,90.jpeg', price: 'R$ 32,90', name: 'Odorizador Ambiente e Tecido 260ml - Chá branco' },
    { id: 18, image: '/lovable-uploads/galeria/R$  39,90.jpeg', price: 'R$ 39,90', name: 'banqueta Multiuso' },
    { id: 19, image: '/lovable-uploads/galeria/R$ 10,50 .jpeg', price: 'R$ 10,50', name: 'Detergente Especial Erva doce 2L' },
    { id: 20, image: '/lovable-uploads/galeria/R$ 10,50.jpeg', price: 'R$ 10,50', name: 'Multi uso Super ox 500 ml' },
    { id: 21, image: '/lovable-uploads/galeria/R$ 10,90.jpeg', price: 'R$ 10,90', name: 'Água sanitária 5L' },
    { id: 22, image: '/lovable-uploads/galeria/R$ 13,50.jpeg', price: 'R$ 13,50', name: 'Multi uso flor cerejeira 500ml' },
    { id: 23, image: '/lovable-uploads/galeria/R$ 13,90    .jpeg', price: 'R$ 13,90', name: 'Limpa Máquina Oxilave 80g' },
    { id: 24, image: '/lovable-uploads/galeria/R$ 13,90   .jpeg', price: 'R$ 13,90', name: 'Aromatizante Romance 500ml' },
    { id: 25, image: '/lovable-uploads/galeria/R$ 13,90  .jpeg', price: 'R$ 13,90', name: 'Aromatizante Bamboo 500ml' },
    { id: 26, image: '/lovable-uploads/galeria/R$ 13,90 .jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Herbal 5L' },
    { id: 27, image: '/lovable-uploads/galeria/R$ 13,90.jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Eucalipto 5L' },
    { id: 28, image: '/lovable-uploads/galeria/R$ 14,90.jpeg', price: 'R$ 14,90', name: 'Sabonete Líquida Chá branco 500ml' },
    { id: 29, image: '/lovable-uploads/galeria/R$ 15,90   .jpeg', price: 'R$ 15,90', name: 'Limpador Concentrado Coala 120ml Romã' },
    { id: 30, image: '/lovable-uploads/galeria/R$ 15,90  .jpeg', price: 'R$ 15,90', name: 'Alvejante sem cloro 5L' },
    { id: 31, image: '/lovable-uploads/galeria/R$ 15,90 .jpeg', price: 'R$ 15,90', name: 'Amaciante de roupas Classic 5L' },
    { id: 32, image: '/lovable-uploads/galeria/R$ 15,90.jpeg', price: 'R$ 15,90', name: 'Amaciante Roupas Conforto5L' },
    { id: 33, image: '/lovable-uploads/galeria/R$ 16,50.jpeg', price: 'R$ 16,50', name: 'Desinfetante Flores 5L' },
    { id: 34, image: '/lovable-uploads/galeria/R$ 16,90.jpeg', price: 'R$ 16,90', name: 'Multi Uso 5L' },
    { id: 35, image: '/lovable-uploads/galeria/R$ 19,90.jpeg', price: 'R$ 19,90', name: 'Desengordurante DX30 1L' },
    { id: 36, image: '/lovable-uploads/galeria/R$ 19,90.png', price: 'R$ 19,90', name: 'Limpador com Álcool Pefumado 1L' },
    { id: 37, image: '/lovable-uploads/galeria/R$ 20,90.jpeg', price: 'R$ 20,90', name: 'Odorizador Cozinha Blocker 500ml' },
    { id: 38, image: '/lovable-uploads/galeria/R$ 21,90.jpeg', price: 'R$ 21,90', name: 'Detergente Perfumado Sensação 5L' },
    { id: 39, image: '/lovable-uploads/galeria/R$ 22,50.jpeg', price: 'R$ 22,50', name: 'Desengraxante Ultra 5L' },
    { id: 40, image: '/lovable-uploads/galeria/R$ 23,90.jpeg', price: 'R$ 23,90', name: 'Água de lençol 500 ml' },
    { id: 41, image: '/lovable-uploads/galeria/R$ 24,50.jpeg', price: 'R$ 24,50', name: 'Difusor vareta 250ml Cereja e avelã' },
    { id: 42, image: '/lovable-uploads/galeria/R$ 26,50.jpeg', price: 'R$ 26,50', name: 'Aromatizante Ambiente Marine 2L' },
    { id: 43, image: '/lovable-uploads/galeria/R$ 29,90.jpeg', price: 'R$ 29,90', name: 'Vela aromática Canela 90g' },
    { id: 44, image: '/lovable-uploads/galeria/R$ 3,50.jpeg', price: 'R$ 3,50', name: 'Sachê Perfumado Amore' },
    { id: 45, image: '/lovable-uploads/galeria/R$ 32,50.jpeg', price: 'R$ 32,50', name: 'Limpador Álcool Perfumado Floral 5L' },
    { id: 46, image: '/lovable-uploads/galeria/R$ 6,80.jpeg', price: 'R$ 6,80', name: 'Limpador Perfumado Amore 2L' },
    { id: 47, image: '/lovable-uploads/galeria/R$ 7,50.jpeg', price: 'R$ 7,50', name: 'Limpa Vidros 500ml' },
    { id: 48, image: '/lovable-uploads/galeria/R$ 9.jpeg', price: 'R$ 9', name: 'Limpa Vidros 2L' },
    { id: 49, image: '/lovable-uploads/galeria/R$10,50  .jpeg', price: 'R$ 10,50', name: 'Detergente Perfumado Sensação 2L' },
    { id: 50, image: '/lovable-uploads/galeria/R$10,50 .jpeg', price: 'R$ 10,50', name: 'Desengraxante Limonax 500ml' },
    { id: 51, image: '/lovable-uploads/galeria/R$10,50.jpeg', price: 'R$ 10,50', name: 'Multiuso Bicarbool 500 ml' },
    { id: 52, image: '/lovable-uploads/galeria/R$10,50.png', price: 'R$ 10,50', name: 'Desinfetante Guimaraes 2L' },
    { id: 53, image: '/lovable-uploads/galeria/R$10,90 .jpeg', price: 'R$ 10,90', name: 'Limpador álcool perfumado Citrus 500ml' },
    { id: 54, image: '/lovable-uploads/galeria/R$10,90.jpeg', price: 'R$ 10,90', name: 'Amaciante Roupas Guimaraes 2L' },
    { id: 55, image: '/lovable-uploads/galeria/R$11,90.jpeg', price: 'R$ 11,90', name: 'Limpa porcelanato Super clean 1l' },
    { id: 56, image: '/lovable-uploads/galeria/R$12,90 .jpeg', price: 'R$ 12,90', name: 'Limpador automotivo Brilho seco 500 ml' },
    { id: 57, image: '/lovable-uploads/galeria/R$12,90.jpeg', price: 'R$ 12,90', name: 'Alvejante Clorado Roupas brancas 5L' },
    { id: 58, image: '/lovable-uploads/galeria/R$125,50.jpeg', price: 'R$ 125,50', name: 'Conjunto Mop 360 12 L' },
    { id: 59, image: '/lovable-uploads/galeria/R$13,50.jpeg', price: 'R$ 13,50', name: 'Desengordurante DX 30 500 ml' },
    { id: 60, image: '/lovable-uploads/galeria/R$13,90    .jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Kaiak 5L' },
    { id: 61, image: '/lovable-uploads/galeria/R$13,90   .jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Lavanda Extra 5L' },
    { id: 62, image: '/lovable-uploads/galeria/R$13,90  .jpeg', price: 'R$ 13,90', name: 'Aromatizante Ambiente Jabuticaba 500ml' },
    { id: 63, image: '/lovable-uploads/galeria/R$13,90 .jpeg', price: 'R$ 13,90', name: 'Aromatizante ambiente Marine 500ml' },
    { id: 64, image: '/lovable-uploads/galeria/R$13,90.jpeg', price: 'R$ 13,90', name: 'Detergente de louça neutro 2L' },
    { id: 65, image: '/lovable-uploads/galeria/R$14,50.jpeg', price: 'R$ 14,50', name: 'Água de lençol Baby 240ml' },
    { id: 66, image: '/lovable-uploads/galeria/R$14,50.png', price: 'R$ 14,50', name: 'Alvejante sem cloro 2L' },
    { id: 67, image: '/lovable-uploads/galeria/R$14,90  .jpeg', price: 'R$ 14,90', name: 'Tira manchas Bleach Clena 420g' },
    { id: 68, image: '/lovable-uploads/galeria/R$14,90 .jpeg', price: 'R$ 14,90', name: 'Limpador com Álcool Perfumado Citrus 2L' },
    { id: 69, image: '/lovable-uploads/galeria/R$14,90.jpeg', price: 'R$ 14,90', name: 'Limpador com álcool perfumado floral 2L' },
    { id: 70, image: '/lovable-uploads/galeria/R$15,90  .png', price: 'R$ 15,90', name: 'Limpador Perfumado Guimaraes 2L' },
    { id: 71, image: '/lovable-uploads/galeria/R$15,90 .jpeg', price: 'R$ 15,90', name: 'Limpador Multiuso Concentrado 2L' },
    { id: 72, image: '/lovable-uploads/galeria/R$15,90.jpeg', price: 'R$ 15,90', name: 'Amaciante Roupas Premium 2L' },
    { id: 73, image: '/lovable-uploads/galeria/R$16,50.jpeg', price: 'R$ 16,50', name: 'Desinfetante Lavanda 2L' },
    { id: 74, image: '/lovable-uploads/galeria/R$16,90.jpeg', price: 'R$ 16,90', name: 'Detergente Lava Louças 5L' },
    { id: 75, image: '/lovable-uploads/galeria/R$16,90.png', price: 'R$ 16,90', name: 'Limpador Perfumado Citrus 5L' },
    { id: 76, image: '/lovable-uploads/galeria/R$17,50.jpeg', price: 'R$ 17,50', name: 'Sabonete Líquido Erva Doce 500ml' },
    { id: 77, image: '/lovable-uploads/galeria/R$17,50.png', price: 'R$ 17,50', name: 'Aromatizante Ambiente Vanilla 500ml' },
    { id: 78, image: '/lovable-uploads/galeria/R$18,90 .jpeg', price: 'R$ 18,90', name: 'Limpador com Álcool Perfumado Marine 1L' },
    { id: 79, image: '/lovable-uploads/galeria/R$18,90.jpeg', price: 'R$ 18,90', name: 'Desengordurante Citrus Power 1L' },
    { id: 80, image: '/lovable-uploads/galeria/R$19,90   .jpeg', price: 'R$ 19,90', name: 'Limpador Perfumado Fresh 1L' },
    { id: 81, image: '/lovable-uploads/galeria/R$19,90  .jpeg', price: 'R$ 19,90', name: 'Multi Uso com Bicarbonato 1L' },
    { id: 82, image: '/lovable-uploads/galeria/R$19,90.jpeg', price: 'R$ 19,90', name: 'Desinfetante Floral 1L' },
    { id: 83, image: '/lovable-uploads/galeria/R$19,90.png', price: 'R$ 19,90', name: 'Lava Roupas Líquido Concentrado 1L' },
    { id: 84, image: '/lovable-uploads/galeria/R$20,90.jpeg', price: 'R$ 20,90', name: 'Aromatizador de Ambiente Premium 500ml' },
    { id: 85, image: '/lovable-uploads/galeria/R$21,90  .jpeg', price: 'R$ 21,90', name: 'Desengraxante Industrial 2L' },
    { id: 86, image: '/lovable-uploads/galeria/R$21,90 .jpeg', price: 'R$ 21,90', name: 'Limpa Alumínio e Inox 1L' },
    { id: 87, image: '/lovable-uploads/galeria/R$21,90.jpeg', price: 'R$ 21,90', name: 'Detergente Neutro Concentrado 2L' },
    { id: 88, image: '/lovable-uploads/galeria/R$22,50  .jpeg', price: 'R$ 22,50', name: 'Limpador Perfumado Bamboo 5L' },
    { id: 89, image: '/lovable-uploads/galeria/R$22,50 .jpeg', price: 'R$ 22,50', name: 'Desengordurante Profissional 2L' },
    { id: 90, image: '/lovable-uploads/galeria/R$22,50.jpeg', price: 'R$ 22,50', name: 'Multi Uso Antibacteriano 2L' },
    { id: 91, image: '/lovable-uploads/galeria/R$23,50.jpeg', price: 'R$ 23,50', name: 'Água de Passar Premium 500ml' },
    { id: 92, image: '/lovable-uploads/galeria/R$24,50 .jpeg', price: 'R$ 24,50', name: 'Difusor Aromático Lavanda 300ml' },
    { id: 93, image: '/lovable-uploads/galeria/R$24,50.jpeg', price: 'R$ 24,50', name: 'Sabonete Líquido Antibacteriano 1L' },
    { id: 94, image: '/lovable-uploads/galeria/R$25,90.jpeg', price: 'R$ 25,90', name: 'Limpador Pisos Laminados 1L' },
    { id: 95, image: '/lovable-uploads/galeria/R$26,50.jpeg', price: 'R$ 26,50', name: 'Aromatizante Ambiente Tropical 2L' },
    { id: 96, image: '/lovable-uploads/galeria/R$26,90.png', price: 'R$ 26,90', name: 'Amaciante Concentrado Premium 3L' },
    { id: 97, image: '/lovable-uploads/galeria/R$27,90 .jpeg', price: 'R$ 27,90', name: 'Detergente Enzimático 5L' },
    { id: 98, image: '/lovable-uploads/galeria/R$27,90.jpeg', price: 'R$ 27,90', name: 'Limpador Perfumado Extra Fresh 5L' },
    { id: 99, image: '/lovable-uploads/galeria/R$28,50.jpeg', price: 'R$ 28,50', name: 'Desinfetante Hospitalar 2L' },
    { id: 100, image: '/lovable-uploads/galeria/R$29,90 .jpeg', price: 'R$ 29,90', name: 'Kit Limpeza Automotiva' },
    { id: 101, image: '/lovable-uploads/galeria/R$29,90 .png', price: 'R$ 29,90', name: 'Conjunto Esponjas Multiuso' },
    { id: 102, image: '/lovable-uploads/galeria/R$29,90.jpeg', price: 'R$ 29,90', name: 'Vela Perfumada Grande 150g' },
    { id: 103, image: '/lovable-uploads/galeria/R$3,50.jpeg', price: 'R$ 3,50', name: 'Sachê Perfumado Lavanda' },
    { id: 104, image: '/lovable-uploads/galeria/R$3,90.jpeg', price: 'R$ 3,90', name: 'Sachê Aromatizante Citrus' },
    { id: 105, image: '/lovable-uploads/galeria/R$32,50 .jpeg', price: 'R$ 32,50', name: 'Limpador com Álcool Premium 5L' },
    { id: 106, image: '/lovable-uploads/galeria/R$32,50.png', price: 'R$ 32,50', name: 'Desengordurante Extra Forte 5L' },
    { id: 107, image: '/lovable-uploads/galeria/R$32,90.jpeg', price: 'R$ 32,90', name: 'Odorizador Tecidos Premium 300ml' },
    { id: 108, image: '/lovable-uploads/galeria/R$34,90.jpeg', price: 'R$ 34,90', name: 'Lava Roupas Enzimático 5L' },
    { id: 109, image: '/lovable-uploads/galeria/R$35,0.jpeg', price: 'R$ 35,00', name: 'Kit Limpeza Completo' },
    { id: 110, image: '/lovable-uploads/galeria/R$36,90.png', price: 'R$ 36,90', name: 'Acessórios para Limpeza Premium' },
    { id: 111, image: '/lovable-uploads/galeria/R$39,90  .jpeg', price: 'R$ 39,90', name: 'Organizador Multiuso Grande' },
    { id: 112, image: '/lovable-uploads/galeria/R$39,90  .png', price: 'R$ 39,90', name: 'Kit Panos Microfibra Premium' },
    { id: 113, image: '/lovable-uploads/galeria/R$39,90 .jpeg', price: 'R$ 39,90', name: 'Balde com Espremedor' },
    { id: 114, image: '/lovable-uploads/galeria/R$39,90.jpeg', price: 'R$ 39,90', name: 'Suporte Utensílios Limpeza' },
    { id: 115, image: '/lovable-uploads/galeria/R$39,90.png', price: 'R$ 39,90', name: 'Carrinho Limpeza Profissional' },
    { id: 116, image: '/lovable-uploads/galeria/R$5,90.jpeg', price: 'R$ 5,90', name: 'Esponja Dupla Face Pack 3' },
    { id: 117, image: '/lovable-uploads/galeria/R$59,90.jpeg', price: 'R$ 59,90', name: 'Kit Limpeza Premium Completo' },
    { id: 118, image: '/lovable-uploads/galeria/R$6,80 .jpeg', price: 'R$ 6,80', name: 'Limpador Multiuso Citrus 500ml' },
    { id: 119, image: '/lovable-uploads/galeria/R$6,80.jpeg', price: 'R$ 6,80', name: 'Aromatizante Carro Marine' },
    { id: 120, image: '/lovable-uploads/galeria/R$7,50.jpeg', price: 'R$ 7,50', name: 'Detergente Concentrado 500ml' },
    { id: 121, image: '/lovable-uploads/galeria/R$7,50.png', price: 'R$ 7,50', name: 'Limpador Vidros Profissional 500ml' },
    { id: 122, image: '/lovable-uploads/galeria/R$8,50.jpeg', price: 'R$ 8,50', name: 'Desinfetante Pinho 1L' },
    { id: 123, image: '/lovable-uploads/galeria/R$8,90 .jpeg', price: 'R$ 8,90', name: 'Multi Uso Perfumado 750ml' },
    { id: 124, image: '/lovable-uploads/galeria/R$8,90.jpeg', price: 'R$ 8,90', name: 'Água Sanitária Perfumada 1L' },

    // Novos Produtos
    { id: 125, image: '/lovable-uploads/galeria/novos-produtos/Absorvedor de Odores Secar Geladeira R$9,50.JPG', price: 'R$ 9,50', name: 'Absorvedor de Odores Secar Geladeira' },
    { id: 126, image: '/lovable-uploads/galeria/novos-produtos/Anti Mofo e Anti traça Cabine 30g R$8,50.JPG', price: 'R$ 8,50', name: 'Anti Mofo e Anti traça Cabine 30g' },
    { id: 127, image: '/lovable-uploads/galeria/novos-produtos/Brilha Alumínio e Inox Brilholac 500mL R$8,50.JPG', price: 'R$ 8,50', name: 'Brilha Alumínio e Inox Brilholac 500mL' },
    { id: 128, image: '/lovable-uploads/galeria/novos-produtos/Cloro Ativo JJ 2L  R$8,50.JPG', price: 'R$ 8,50', name: 'Cloro Ativo JJ 2L' },
    { id: 129, image: '/lovable-uploads/galeria/novos-produtos/Esponja Aço Assola. c_ 8 un R$3,0.JPG', price: 'R$ 3,00', name: 'Esponja Aço Assola c/ 8 un' },
    { id: 130, image: '/lovable-uploads/galeria/novos-produtos/Evita Mofo Secar 180g Lavanda R$12,90.JPG', price: 'R$ 12,90', name: 'Evita Mofo Secar 180g Lavanda' },
    { id: 131, image: '/lovable-uploads/galeria/novos-produtos/Evita Mofo Secar 80g Lavanda R$8,50 .JPG', price: 'R$ 8,50', name: 'Evita Mofo Secar 80g Lavanda' },
    { id: 132, image: '/lovable-uploads/galeria/novos-produtos/Hipo Telhas São Paulo 5L R$32,50.JPG', price: 'R$ 32,50', name: 'Hipo Telhas São Paulo 5L' },
    { id: 133, image: '/lovable-uploads/galeria/novos-produtos/Jimo Box e Banheiro 400ml R$28,90.JPG', price: 'R$ 28,90', name: 'Jimo Box e Banheiro 400ml' },
    { id: 134, image: '/lovable-uploads/galeria/novos-produtos/Kit Trio Pano Microfibra 30x30cm R$ 9,90.JPG', price: 'R$ 9,90', name: 'Kit Trio Pano Microfibra 30x30cm' },
    { id: 135, image: '/lovable-uploads/galeria/novos-produtos/Lava Roupas Clena Shop 5L R$ 18,90.JPG', price: 'R$ 18,90', name: 'Lava Roupas Clena Shop 5L' },
    { id: 136, image: '/lovable-uploads/galeria/novos-produtos/Limpa Box Sany 300mL R$9,90.JPG', price: 'R$ 9,90', name: 'Limpa Box Sany 300mL' },
    { id: 137, image: '/lovable-uploads/galeria/novos-produtos/Limpa Canil São Paulo  3L R$23,90.JPG', price: 'R$ 23,90', name: 'Limpa Canil São Paulo 3L' },
    { id: 138, image: '/lovable-uploads/galeria/novos-produtos/Limpa Carpetes e Estofados Brilholac R$19,90.JPG', price: 'R$ 19,90', name: 'Limpa Carpetes e Estofados Brilholac' },
    { id: 139, image: '/lovable-uploads/galeria/novos-produtos/Limpa Cerâmicas Azulim 1L R$11,50.JPG', price: 'R$ 11,50', name: 'Limpa Cerâmicas Azulim 1L' },
    { id: 140, image: '/lovable-uploads/galeria/novos-produtos/Limpa Formo Diabo Verde 250g R$ 19,90.JPG', price: 'R$ 19,90', name: 'Limpa Forno Diabo Verde 250g' },
    { id: 141, image: '/lovable-uploads/galeria/novos-produtos/Limpa Obra 1L R$16,90.JPG', price: 'R$ 16,90', name: 'Limpa Obra 1L' },
    { id: 142, image: '/lovable-uploads/galeria/novos-produtos/Limpador Flor de Maçã 500mL R$14,90.JPG', price: 'R$ 14,90', name: 'Limpador Flor de Maçã 500mL' },
    { id: 143, image: '/lovable-uploads/galeria/novos-produtos/Limpador Multisuperficies Vorel 500mL R$25,50 .JPG', price: 'R$ 25,50', name: 'Limpador Multisuperfícies Vorel 500mL' },
    { id: 144, image: '/lovable-uploads/galeria/novos-produtos/Limpador Perfumado Floral 5L R$10,90.JPG', price: 'R$ 10,90', name: 'Limpador Perfumado Floral 5L' },
    { id: 145, image: '/lovable-uploads/galeria/novos-produtos/Limpador Perfumado Lavanda 5L R$10,90.JPG', price: 'R$ 10,90', name: 'Limpador Perfumado Lavanda 5L' },
    { id: 146, image: '/lovable-uploads/galeria/novos-produtos/Limpador Perfumado Pinho 5L R$10,90.JPG', price: 'R$ 10,90', name: 'Limpador Perfumado Pinho 5L' },
    { id: 147, image: '/lovable-uploads/galeria/novos-produtos/Limpador Perfumado Talco 5L R$10,90.JPG', price: 'R$ 10,90', name: 'Limpador Perfumado Talco 5L' },
    { id: 148, image: '/lovable-uploads/galeria/novos-produtos/Luva Multi Uso P_M_G. R$ 4,50 .JPG', price: 'R$ 4,50', name: 'Luva Multi Uso P/M/G' },
    { id: 149, image: '/lovable-uploads/galeria/novos-produtos/Luva Tarefas Pesadas P_M_G. R$8,90.JPG', price: 'R$ 8,90', name: 'Luva Tarefas Pesadas P/M/G' },
    { id: 150, image: '/lovable-uploads/galeria/novos-produtos/Pacote Touca Sanfonada c_ 100un R$19,90 .JPG', price: 'R$ 19,90', name: 'Pacote Touca Sanfonada c/ 100un' },
    { id: 151, image: '/lovable-uploads/galeria/novos-produtos/Pano Microfibra 100x100cm R$29,90.JPG', price: 'R$ 29,90', name: 'Pano Microfibra 100x100cm' },
    { id: 152, image: '/lovable-uploads/galeria/novos-produtos/Pano Microfibra 30x30 c_ 2un R$9,90.JPG', price: 'R$ 9,90', name: 'Pano Microfibra 30x30 c/ 2un' },
    { id: 153, image: '/lovable-uploads/galeria/novos-produtos/Pano Microfibra 40x40 c_ 2un R$10,90.JPG', price: 'R$ 10,90', name: 'Pano Microfibra 40x40 c/ 2un' },
    { id: 154, image: '/lovable-uploads/galeria/novos-produtos/Pano Microfibra 60x80cm c_ 2un R$ 14,90.JPG', price: 'R$ 14,90', name: 'Pano Microfibra 60x80cm c/ 2un' },
    { id: 155, image: '/lovable-uploads/galeria/novos-produtos/Pano Multi Clean c_ 48 un R$12,90.JPG', price: 'R$ 12,90', name: 'Pano Multi Clean c/ 48 un' },
    { id: 156, image: '/lovable-uploads/galeria/novos-produtos/Pano Multisec c_ 5un R$2,90.JPG', price: 'R$ 2,90', name: 'Pano Multisec c/ 5un' },
    { id: 157, image: '/lovable-uploads/galeria/novos-produtos/Pasta Rosa Multi Uso Sany R$9,90.JPG', price: 'R$ 9,90', name: 'Pasta Rosa Multi Uso Sany' },
    { id: 158, image: '/lovable-uploads/galeria/novos-produtos/Perfecto Limpeza Pesada Porcelanato 1L R$26,90.JPG', price: 'R$ 26,90', name: 'Perfecto Limpeza Pesada Porcelanato 1L' },
    { id: 159, image: '/lovable-uploads/galeria/novos-produtos/Piso Max São Paulo 5L  R$34,50.JPG', price: 'R$ 34,50', name: 'Piso Max São Paulo 5L' },
    { id: 160, image: '/lovable-uploads/galeria/novos-produtos/Prendedor Roupa de Madeira c_ 12un R$2,50.JPG', price: 'R$ 2,50', name: 'Prendedor Roupa de Madeira c/ 12un' },
    { id: 161, image: '/lovable-uploads/galeria/novos-produtos/Refil Veja X-14 400mL R$18,50.JPG', price: 'R$ 18,50', name: 'Refil Veja X-14 400mL' },
    { id: 162, image: '/lovable-uploads/galeria/novos-produtos/Saca Alvejada 100_ Algodão R$9,90.JPG', price: 'R$ 9,90', name: 'Saca Alvejada 100% Algodão' },
    { id: 163, image: '/lovable-uploads/galeria/novos-produtos/Saponáceo Bombril 450ml R$ 15,90.JPG', price: 'R$ 15,90', name: 'Saponáceo Bombril 450ml' },
    { id: 164, image: '/lovable-uploads/galeria/novos-produtos/Saponáceo Limão Sany 250mL R$6,90.JPG', price: 'R$ 6,90', name: 'Saponáceo Limão Sany 250mL' },
    { id: 165, image: '/lovable-uploads/galeria/novos-produtos/Saponáceo de Limão Sany 250g R$6,90.JPG', price: 'R$ 6,90', name: 'Saponáceo de Limão Sany 250g' },
    { id: 166, image: '/lovable-uploads/galeria/novos-produtos/Silicone Para Móveis Brilholac R$22,50.JPG', price: 'R$ 22,50', name: 'Silicone Para Móveis Brilholac' }
  ];

  const filteredProducts = products.filter(product => product.name !== 'Davi preto');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh] mt-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-demoop-teal mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando produtos...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Welcome Banner */}
      <section className="bg-demoop-teal text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Bem-vindo à Demoop</h1>
          <p className="text-xl">Produtos de Limpeza e Descartáveis</p>
          <p className="mt-2 opacity-90">9 anos oferecendo qualidade e eficiência em Morro da Fumaça</p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-demoop-teal focus:border-transparent outline-none"
                disabled
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-demoop-teal focus:border-transparent outline-none"
                disabled
              >
                <option>Todos os Produtos</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Nossos Produtos</h2>
          <p className="text-gray-600">Encontre os melhores produtos de limpeza com preços especiais</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.name || product.price}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Erro ao carregar imagem: ${product.image} para produto: ${product.name}`);
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="flex items-center justify-center h-full bg-gray-100 text-gray-400">
                          <div class="text-center">
                            <p class="text-sm">Imagem não disponível</p>
                            <p class="text-xs mt-1">${product.name}</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              <div className="p-4">
                {product.name && (
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                )}
                <p className="text-lg font-semibold text-demoop-teal text-center mb-3">
                  {product.price}
                </p>
                
                {/* Quantity Selector and Add to Cart */}
                <QuantitySelector 
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Produtos;