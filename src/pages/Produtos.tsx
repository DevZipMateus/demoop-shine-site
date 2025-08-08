import React from 'react';
import { Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Produtos = () => {
  useScrollToTop();

  // Lista de todas as imagens da galeria com seus preços extraídos dos nomes dos arquivos
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
    { id: 15, image: '/lovable-uploads/galeria/R$  17,90.jpeg', price: 'R$ 17,90', name: 'Davi preto' },
    { id: 16, image: '/lovable-uploads/galeria/R$  19,90.jpeg', price: 'R$ 19,90', name: 'Davi preto' },
    { id: 17, image: '/lovable-uploads/galeria/R$  20,90.jpeg', price: 'R$ 20,90', name: 'Odorizador Ambiente Blocker 500ml' },
    { id: 18, image: '/lovable-uploads/galeria/R$  29,90   .jpeg', price: 'R$ 29,90', name: 'Rodo Limpa vidros com reservatório' },
    { id: 19, image: '/lovable-uploads/galeria/R$  29,90 .png', price: 'R$ 29,90', name: 'Lava Roupas Concentrado 3L' },
    { id: 20, image: '/lovable-uploads/galeria/R$  32,90.jpeg', price: 'R$ 32,90', name: 'Odorizador Ambiente e Tecido 260ml - Chá branco' },
    { id: 21, image: '/lovable-uploads/galeria/R$  39,90.jpeg', price: 'R$ 39,90', name: 'banqueta Multiuso' },
    { id: 22, image: '/lovable-uploads/galeria/R$ 10,50 .jpeg', price: 'R$ 10,50', name: 'Detergente Especial Erva doce 2L' },
    { id: 23, image: '/lovable-uploads/galeria/R$ 10,50.jpeg', price: 'R$ 10,50', name: 'Multi uso Super ox 500 ml' },
    { id: 24, image: '/lovable-uploads/galeria/R$ 10,90.jpeg', price: 'R$ 10,90', name: 'Água sanitária 5L' },
    { id: 25, image: '/lovable-uploads/galeria/R$ 13,50.jpeg', price: 'R$ 13,50', name: 'Multi uso flor cerejeira 500ml' },
    { id: 26, image: '/lovable-uploads/galeria/R$ 13,90    .jpeg', price: 'R$ 13,90', name: 'Limpa Máquina Oxilave 80g' },
    { id: 27, image: '/lovable-uploads/galeria/R$ 13,90   .jpeg', price: 'R$ 13,90', name: 'Aromatizante Romance 500ml' },
    { id: 28, image: '/lovable-uploads/galeria/R$ 13,90  .jpeg', price: 'R$ 13,90', name: 'Aromatizante Bamboo 500ml' },
    { id: 29, image: '/lovable-uploads/galeria/R$ 13,90 .jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Herbal 5L' },
    { id: 30, image: '/lovable-uploads/galeria/R$ 13,90.jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Eucalipto 5L' },
    { id: 31, image: '/lovable-uploads/galeria/R$ 14,90.jpeg', price: 'R$ 14,90', name: 'Sabonete Líquida Chá branco 500ml' },
    { id: 32, image: '/lovable-uploads/galeria/R$ 15,90   .jpeg', price: 'R$ 15,90', name: 'Limpador Concentrado Coala 120ml Romã' },
    { id: 33, image: '/lovable-uploads/galeria/R$ 15,90  .jpeg', price: 'R$ 15,90', name: 'Alvejante sem cloro 5L' },
    { id: 34, image: '/lovable-uploads/galeria/R$ 15,90 .jpeg', price: 'R$ 15,90', name: 'Amaciante de roupas Classic 5L' },
    { id: 35, image: '/lovable-uploads/galeria/R$ 15,90.jpeg', price: 'R$ 15,90', name: 'Amaciante Roupas Conforto5L' },
    { id: 36, image: '/lovable-uploads/galeria/R$ 16,50.jpeg', price: 'R$ 16,50', name: 'Desinfetante Flores 5L' },
    { id: 37, image: '/lovable-uploads/galeria/R$ 16,90.jpeg', price: 'R$ 16,90', name: 'Multi Uso 5L' },
    { id: 38, image: '/lovable-uploads/galeria/R$ 17,90   .jpeg', price: 'R$ 17,90', name: 'Davi preto' },
    { id: 39, image: '/lovable-uploads/galeria/R$ 17,90  .jpeg', price: 'R$ 17,90', name: 'Davi preto' },
    { id: 40, image: '/lovable-uploads/galeria/R$ 17,90 .jpeg', price: 'R$ 17,90', name: 'Davi preto' },
    { id: 41, image: '/lovable-uploads/galeria/R$ 17,90.jpeg', price: 'R$ 17,90', name: 'Davi preto' },
    { id: 42, image: '/lovable-uploads/galeria/R$ 19,90 .jpeg', price: 'R$ 19,90', name: 'Davi preto' },
    { id: 43, image: '/lovable-uploads/galeria/R$ 19,90.jpeg', price: 'R$ 19,90', name: 'Desengordurante DX30 1L' },
    { id: 44, image: '/lovable-uploads/galeria/R$ 19,90.png', price: 'R$ 19,90', name: 'Limpador com Álcool Pefumado 1L' },
    { id: 45, image: '/lovable-uploads/galeria/R$ 20,90.jpeg', price: 'R$ 20,90', name: 'Odorizador Cozinha Blocker 500ml' },
    { id: 46, image: '/lovable-uploads/galeria/R$ 21,90.jpeg', price: 'R$ 21,90', name: 'Detergente Perfumado Sensação 5L' },
    { id: 47, image: '/lovable-uploads/galeria/R$ 22,50.jpeg', price: 'R$ 22,50', name: 'Desengraxante Ultra 5L' },
    { id: 48, image: '/lovable-uploads/galeria/R$ 23,90.jpeg', price: 'R$ 23,90', name: 'Água de lençol 500 ml' },
    { id: 49, image: '/lovable-uploads/galeria/R$ 24,50.jpeg', price: 'R$ 24,50', name: 'Difusor vareta 250ml Cereja e avelã' },
    { id: 50, image: '/lovable-uploads/galeria/R$ 26,50.jpeg', price: 'R$ 26,50', name: 'Aromatizante Ambiente Marine 2L' },
    { id: 51, image: '/lovable-uploads/galeria/R$ 29,90.jpeg', price: 'R$ 29,90', name: 'Vela aromática Canela 90g' },
    { id: 52, image: '/lovable-uploads/galeria/R$ 3,50.jpeg', price: 'R$ 3,50', name: 'Sachê Perfumado Amore' },
    { id: 53, image: '/lovable-uploads/galeria/R$ 32,50.jpeg', price: 'R$ 32,50', name: 'Limpador Álcool Perfumado Floral 5L' },
    { id: 54, image: '/lovable-uploads/galeria/R$ 5,90.jpeg', price: 'R$ 5,90', name: 'Davi preto' },
    { id: 55, image: '/lovable-uploads/galeria/R$ 6,80.jpeg', price: 'R$ 6,80', name: 'Limpador Perfumado Amore 2L' },
    { id: 56, image: '/lovable-uploads/galeria/R$ 7,50.jpeg', price: 'R$ 7,50', name: 'Limpa Vidros 500ml' },
    { id: 57, image: '/lovable-uploads/galeria/R$ 9,90.jpeg', price: 'R$ 9,90', name: 'Davi preto' },
    { id: 58, image: '/lovable-uploads/galeria/R$ 9.jpeg', price: 'R$ 9', name: 'Limpa Vidros 2L' },
    { id: 59, image: '/lovable-uploads/galeria/R$10,50  .jpeg', price: 'R$ 10,50', name: 'Detergente Perfumado Sensação 2L' },
    { id: 60, image: '/lovable-uploads/galeria/R$10,50 .jpeg', price: 'R$ 10,50', name: 'Desengraxante Limonax 500ml' },
    { id: 61, image: '/lovable-uploads/galeria/R$10,50.jpeg', price: 'R$ 10,50', name: 'Multiuso Bicarbool 500 ml' },
    { id: 62, image: '/lovable-uploads/galeria/R$10,50.png', price: 'R$ 10,50', name: 'Desinfetante Guimaraes 2L' },
    { id: 63, image: '/lovable-uploads/galeria/R$10,90 .jpeg', price: 'R$ 10,90', name: 'Limpador álcool perfumado Citrus 500ml' },
    { id: 64, image: '/lovable-uploads/galeria/R$10,90.jpeg', price: 'R$ 10,90', name: 'Amaciante Roupas Guimaraes 2L' },
    { id: 65, image: '/lovable-uploads/galeria/R$11,90.jpeg', price: 'R$ 11,90', name: 'Limpa porcelanato Super clean 1l' },
    { id: 66, image: '/lovable-uploads/galeria/R$12,90 .jpeg', price: 'R$ 12,90', name: 'Limpador automotivo Brilho seco 500 ml' },
    { id: 67, image: '/lovable-uploads/galeria/R$12,90.jpeg', price: 'R$ 12,90', name: 'Alvejante Clorado Roupas brancas 5L' },
    { id: 68, image: '/lovable-uploads/galeria/R$125,50.jpeg', price: 'R$ 125,50', name: 'Conjunto Mop 360 12 L' },
    { id: 69, image: '/lovable-uploads/galeria/R$13,50.jpeg', price: 'R$ 13,50', name: 'Desengordurante DX 30 500 ml' },
    { id: 70, image: '/lovable-uploads/galeria/R$13,90    .jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Kaiak 5L' },
    { id: 71, image: '/lovable-uploads/galeria/R$13,90   .jpeg', price: 'R$ 13,90', name: 'Limpador Perfumado Lavanda Extra 5L' },
    { id: 72, image: '/lovable-uploads/galeria/R$13,90  .jpeg', price: 'R$ 13,90', name: 'Aromatizante Ambiente Jabuticaba 500ml' },
    { id: 73, image: '/lovable-uploads/galeria/R$13,90 .jpeg', price: 'R$ 13,90', name: 'Aromatizante ambiente Marine 500ml' },
    { id: 74, image: '/lovable-uploads/galeria/R$13,90.jpeg', price: 'R$ 13,90', name: 'Detergente de louça neutro 2L' },
    { id: 75, image: '/lovable-uploads/galeria/R$14,50.jpeg', price: 'R$ 14,50', name: 'Água de lençol Baby 240ml' },
    { id: 76, image: '/lovable-uploads/galeria/R$14,50.png', price: 'R$ 14,50', name: 'Alvejante sem cloro 2L' },
    { id: 77, image: '/lovable-uploads/galeria/R$14,90  .jpeg', price: 'R$ 14,90', name: 'Tira manchas Bleach Clena 420g' },
    { id: 78, image: '/lovable-uploads/galeria/R$14,90 .jpeg', price: 'R$ 14,90', name: 'Limpador com Álcool Perfumado Citrus 2L' },
    { id: 79, image: '/lovable-uploads/galeria/R$14,90.jpeg', price: 'R$ 14,90', name: 'Limpador com álcool perfumado floral 2L' },
    { id: 80, image: '/lovable-uploads/galeria/R$15,90  .png', price: 'R$ 15,90', name: 'Limpador Perfumado Guimaraes 2L' },
    { id: 81, image: '/lovable-uploads/galeria/R$15,90 .jpeg', price: 'R$ 15,90' },
    { id: 82, image: '/lovable-uploads/galeria/R$15,90.jpeg', price: 'R$ 15,90' },
    { id: 83, image: '/lovable-uploads/galeria/R$16,50.jpeg', price: 'R$ 16,50' },
    { id: 84, image: '/lovable-uploads/galeria/R$16,90.jpeg', price: 'R$ 16,90' },
    { id: 85, image: '/lovable-uploads/galeria/R$16,90.png', price: 'R$ 16,90' },
    { id: 86, image: '/lovable-uploads/galeria/R$17,50.jpeg', price: 'R$ 17,50' },
    { id: 87, image: '/lovable-uploads/galeria/R$17,50.png', price: 'R$ 17,50' },
    { id: 88, image: '/lovable-uploads/galeria/R$18,90 .jpeg', price: 'R$ 18,90' },
    { id: 89, image: '/lovable-uploads/galeria/R$18,90.jpeg', price: 'R$ 18,90' },
    { id: 90, image: '/lovable-uploads/galeria/R$19,90   .jpeg', price: 'R$ 19,90' },
    { id: 91, image: '/lovable-uploads/galeria/R$19,90  .jpeg', price: 'R$ 19,90' },
    { id: 92, image: '/lovable-uploads/galeria/R$19,90.jpeg', price: 'R$ 19,90' },
    { id: 93, image: '/lovable-uploads/galeria/R$19,90.png', price: 'R$ 19,90' },
    { id: 94, image: '/lovable-uploads/galeria/R$20,90.jpeg', price: 'R$ 20,90' },
    { id: 95, image: '/lovable-uploads/galeria/R$21,90  .jpeg', price: 'R$ 21,90' },
    { id: 96, image: '/lovable-uploads/galeria/R$21,90 .jpeg', price: 'R$ 21,90' },
    { id: 97, image: '/lovable-uploads/galeria/R$21,90.jpeg', price: 'R$ 21,90' },
    { id: 98, image: '/lovable-uploads/galeria/R$22,50  .jpeg', price: 'R$ 22,50' },
    { id: 99, image: '/lovable-uploads/galeria/R$22,50 .jpeg', price: 'R$ 22,50' },
    { id: 100, image: '/lovable-uploads/galeria/R$22,50.jpeg', price: 'R$ 22,50' },
    { id: 101, image: '/lovable-uploads/galeria/R$23,50.jpeg', price: 'R$ 23,50' },
    { id: 102, image: '/lovable-uploads/galeria/R$24,50 .jpeg', price: 'R$ 24,50' },
    { id: 103, image: '/lovable-uploads/galeria/R$24,50.jpeg', price: 'R$ 24,50' },
    { id: 104, image: '/lovable-uploads/galeria/R$25,90.jpeg', price: 'R$ 25,90' },
    { id: 105, image: '/lovable-uploads/galeria/R$26,50.jpeg', price: 'R$ 26,50' },
    { id: 106, image: '/lovable-uploads/galeria/R$26,90.png', price: 'R$ 26,90' },
    { id: 107, image: '/lovable-uploads/galeria/R$27,90 .jpeg', price: 'R$ 27,90' },
    { id: 108, image: '/lovable-uploads/galeria/R$27,90.jpeg', price: 'R$ 27,90' },
    { id: 109, image: '/lovable-uploads/galeria/R$28,50.jpeg', price: 'R$ 28,50' },
    { id: 110, image: '/lovable-uploads/galeria/R$29,90 .jpeg', price: 'R$ 29,90' },
    { id: 111, image: '/lovable-uploads/galeria/R$29,90 .png', price: 'R$ 29,90' },
    { id: 112, image: '/lovable-uploads/galeria/R$29,90.jpeg', price: 'R$ 29,90' },
    { id: 113, image: '/lovable-uploads/galeria/R$3,50.jpeg', price: 'R$ 3,50' },
    { id: 114, image: '/lovable-uploads/galeria/R$3,90.jpeg', price: 'R$ 3,90' },
    { id: 115, image: '/lovable-uploads/galeria/R$32,50 .jpeg', price: 'R$ 32,50' },
    { id: 116, image: '/lovable-uploads/galeria/R$32,50.png', price: 'R$ 32,50' },
    { id: 117, image: '/lovable-uploads/galeria/R$32,90.jpeg', price: 'R$ 32,90' },
    { id: 118, image: '/lovable-uploads/galeria/R$34,90.jpeg', price: 'R$ 34,90' },
    { id: 119, image: '/lovable-uploads/galeria/R$35,0.jpeg', price: 'R$ 35,00' },
    { id: 120, image: '/lovable-uploads/galeria/R$36,90.png', price: 'R$ 36,90' },
    { id: 121, image: '/lovable-uploads/galeria/R$39,90  .jpeg', price: 'R$ 39,90' },
    { id: 122, image: '/lovable-uploads/galeria/R$39,90  .png', price: 'R$ 39,90' },
    { id: 123, image: '/lovable-uploads/galeria/R$39,90 .jpeg', price: 'R$ 39,90' },
    { id: 124, image: '/lovable-uploads/galeria/R$39,90.jpeg', price: 'R$ 39,90' },
    { id: 125, image: '/lovable-uploads/galeria/R$39,90.png', price: 'R$ 39,90' },
    { id: 126, image: '/lovable-uploads/galeria/R$5,90.jpeg', price: 'R$ 5,90' },
    { id: 127, image: '/lovable-uploads/galeria/R$59,90.jpeg', price: 'R$ 59,90' },
    { id: 128, image: '/lovable-uploads/galeria/R$6,80 .jpeg', price: 'R$ 6,80' },
    { id: 129, image: '/lovable-uploads/galeria/R$6,80.jpeg', price: 'R$ 6,80' },
    { id: 130, image: '/lovable-uploads/galeria/R$7,50.jpeg', price: 'R$ 7,50' },
    { id: 131, image: '/lovable-uploads/galeria/R$7,50.png', price: 'R$ 7,50' },
    { id: 132, image: '/lovable-uploads/galeria/R$8,50.jpeg', price: 'R$ 8,50' },
    { id: 133, image: '/lovable-uploads/galeria/R$8,90 .jpeg', price: 'R$ 8,90' },
    { id: 134, image: '/lovable-uploads/galeria/R$8,90.jpeg', price: 'R$ 8,90' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Search and Filter Section */}
      <section className="bg-white border-b mt-20">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.name || product.price}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-3">
                {product.name && (
                  <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                )}
                <p className="text-lg font-semibold text-demoop-teal text-center">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Produtos;
