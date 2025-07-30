import React from 'react';
import { Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Produtos = () => {
  useScrollToTop();

  // Lista de todas as imagens da galeria com seus preços extraídos dos nomes dos arquivos
  const products = [
    { image: '/lovable-uploads/galeria/5L - R$27,90  2L - R$12,90.jpeg', price: '5L - R$27,90 / 2L - R$12,90' },
    { image: '/lovable-uploads/galeria/R$    13,90.jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$    16,90 .jpeg', price: 'R$ 16,90' },
    { image: '/lovable-uploads/galeria/R$    17,90  .jpeg', price: 'R$ 17,90' },
    { image: '/lovable-uploads/galeria/R$   13,90 .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$   13,90.jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$   15,90.jpeg', price: 'R$ 15,90' },
    { image: '/lovable-uploads/galeria/R$  10,50.jpeg', price: 'R$ 10,50' },
    { image: '/lovable-uploads/galeria/R$  13,50.jpeg', price: 'R$ 13,50' },
    { image: '/lovable-uploads/galeria/R$  13,90    .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$  13,90  .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$  13,90 .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$  13,90.jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$  15,90.jpeg', price: 'R$ 15,90' },
    { image: '/lovable-uploads/galeria/R$  17,90.jpeg', price: 'R$ 17,90' },
    { image: '/lovable-uploads/galeria/R$  19,90.jpeg', price: 'R$ 19,90' },
    { image: '/lovable-uploads/galeria/R$  20,90.jpeg', price: 'R$ 20,90' },
    { image: '/lovable-uploads/galeria/R$  29,90   .jpeg', price: 'R$ 29,90' },
    { image: '/lovable-uploads/galeria/R$  29,90 .png', price: 'R$ 29,90' },
    { image: '/lovable-uploads/galeria/R$  32,90.jpeg', price: 'R$ 32,90' },
    { image: '/lovable-uploads/galeria/R$  39,90.jpeg', price: 'R$ 39,90' },
    { image: '/lovable-uploads/galeria/R$ 10,50 .jpeg', price: 'R$ 10,50' },
    { image: '/lovable-uploads/galeria/R$ 10,50.jpeg', price: 'R$ 10,50' },
    { image: '/lovable-uploads/galeria/R$ 10,90.jpeg', price: 'R$ 10,90' },
    { image: '/lovable-uploads/galeria/R$ 13,50.jpeg', price: 'R$ 13,50' },
    { image: '/lovable-uploads/galeria/R$ 13,90    .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$ 13,90   .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$ 13,90  .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$ 13,90 .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$ 13,90.jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$ 14,90.jpeg', price: 'R$ 14,90' },
    { image: '/lovable-uploads/galeria/R$ 15,90   .jpeg', price: 'R$ 15,90' },
    { image: '/lovable-uploads/galeria/R$ 15,90  .jpeg', price: 'R$ 15,90' },
    { image: '/lovable-uploads/galeria/R$ 15,90 .jpeg', price: 'R$ 15,90' },
    { image: '/lovable-uploads/galeria/R$ 15,90.jpeg', price: 'R$ 15,90' },
    { image: '/lovable-uploads/galeria/R$ 16,50.jpeg', price: 'R$ 16,50' },
    { image: '/lovable-uploads/galeria/R$ 16,90.jpeg', price: 'R$ 16,90' },
    { image: '/lovable-uploads/galeria/R$ 17,90   .jpeg', price: 'R$ 17,90' },
    { image: '/lovable-uploads/galeria/R$ 17,90  .jpeg', price: 'R$ 17,90' },
    { image: '/lovable-uploads/galeria/R$ 17,90 .jpeg', price: 'R$ 17,90' },
    { image: '/lovable-uploads/galeria/R$ 17,90.jpeg', price: 'R$ 17,90' },
    { image: '/lovable-uploads/galeria/R$ 19,90 .jpeg', price: 'R$ 19,90' },
    { image: '/lovable-uploads/galeria/R$ 19,90.jpeg', price: 'R$ 19,90' },
    { image: '/lovable-uploads/galeria/R$ 19,90.png', price: 'R$ 19,90' },
    { image: '/lovable-uploads/galeria/R$ 20,90.jpeg', price: 'R$ 20,90' },
    { image: '/lovable-uploads/galeria/R$ 21,90.jpeg', price: 'R$ 21,90' },
    { image: '/lovable-uploads/galeria/R$ 22,50.jpeg', price: 'R$ 22,50' },
    { image: '/lovable-uploads/galeria/R$ 23,90.jpeg', price: 'R$ 23,90' },
    { image: '/lovable-uploads/galeria/R$ 24,50.jpeg', price: 'R$ 24,50' },
    { image: '/lovable-uploads/galeria/R$ 26,50.jpeg', price: 'R$ 26,50' },
    { image: '/lovable-uploads/galeria/R$ 29,90.jpeg', price: 'R$ 29,90' },
    { image: '/lovable-uploads/galeria/R$ 3,50.jpeg', price: 'R$ 3,50' },
    { image: '/lovable-uploads/galeria/R$ 32,50.jpeg', price: 'R$ 32,50' },
    { image: '/lovable-uploads/galeria/R$ 5,90.jpeg', price: 'R$ 5,90' },
    { image: '/lovable-uploads/galeria/R$ 6,80.jpeg', price: 'R$ 6,80' },
    { image: '/lovable-uploads/galeria/R$ 7,50.jpeg', price: 'R$ 7,50' },
    { image: '/lovable-uploads/galeria/R$ 9,90.jpeg', price: 'R$ 9,90' },
    { image: '/lovable-uploads/galeria/R$ 9.jpeg', price: 'R$ 9' },
    { image: '/lovable-uploads/galeria/R$10,50  .jpeg', price: 'R$ 10,50' },
    { image: '/lovable-uploads/galeria/R$10,50 .jpeg', price: 'R$ 10,50' },
    { image: '/lovable-uploads/galeria/R$10,50.jpeg', price: 'R$ 10,50' },
    { image: '/lovable-uploads/galeria/R$10,50.png', price: 'R$ 10,50' },
    { image: '/lovable-uploads/galeria/R$10,90 .jpeg', price: 'R$ 10,90' },
    { image: '/lovable-uploads/galeria/R$10,90.jpeg', price: 'R$ 10,90' },
    { image: '/lovable-uploads/galeria/R$11,90.jpeg', price: 'R$ 11,90' },
    { image: '/lovable-uploads/galeria/R$12,90 .jpeg', price: 'R$ 12,90' },
    { image: '/lovable-uploads/galeria/R$12,90.jpeg', price: 'R$ 12,90' },
    { image: '/lovable-uploads/galeria/R$125,50.jpeg', price: 'R$ 125,50' },
    { image: '/lovable-uploads/galeria/R$13,50.jpeg', price: 'R$ 13,50' },
    { image: '/lovable-uploads/galeria/R$13,90    .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$13,90   .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$13,90  .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$13,90 .jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$13,90.jpeg', price: 'R$ 13,90' },
    { image: '/lovable-uploads/galeria/R$14,50.jpeg', price: 'R$ 14,50' },
    { image: '/lovable-uploads/galeria/R$14,50.png', price: 'R$ 14,50' },
    { image: '/lovable-uploads/galeria/R$14,90  .jpeg', price: 'R$ 14,90' },
    { image: '/lovable-uploads/galeria/R$14,90 .jpeg', price: 'R$ 14,90' },
    { image: '/lovable-uploads/galeria/R$14,90.jpeg', price: 'R$ 14,90' },
    { image: '/lovable-uploads/galeria/R$15,90  .png', price: 'R$ 15,90' },
    { image: '/lovable-uploads/galeria/R$15,90 .jpeg', price: 'R$ 15,90' },
    { image: '/lovable-uploads/galeria/R$15,90.jpeg', price: 'R$ 15,90' },
    { image: '/lovable-uploads/galeria/R$16,50.jpeg', price: 'R$ 16,50' },
    { image: '/lovable-uploads/galeria/R$16,90.jpeg', price: 'R$ 16,90' },
    { image: '/lovable-uploads/galeria/R$16,90.png', price: 'R$ 16,90' },
    { image: '/lovable-uploads/galeria/R$17,50.jpeg', price: 'R$ 17,50' },
    { image: '/lovable-uploads/galeria/R$17,50.png', price: 'R$ 17,50' },
    { image: '/lovable-uploads/galeria/R$18,90 .jpeg', price: 'R$ 18,90' },
    { image: '/lovable-uploads/galeria/R$18,90.jpeg', price: 'R$ 18,90' },
    { image: '/lovable-uploads/galeria/R$19,90   .jpeg', price: 'R$ 19,90' },
    { image: '/lovable-uploads/galeria/R$19,90  .jpeg', price: 'R$ 19,90' },
    { image: '/lovable-uploads/galeria/R$19,90.jpeg', price: 'R$ 19,90' },
    { image: '/lovable-uploads/galeria/R$19,90.png', price: 'R$ 19,90' },
    { image: '/lovable-uploads/galeria/R$20,90.jpeg', price: 'R$ 20,90' },
    { image: '/lovable-uploads/galeria/R$21,90  .jpeg', price: 'R$ 21,90' },
    { image: '/lovable-uploads/galeria/R$21,90 .jpeg', price: 'R$ 21,90' },
    { image: '/lovable-uploads/galeria/R$21,90.jpeg', price: 'R$ 21,90' },
    { image: '/lovable-uploads/galeria/R$22,50  .jpeg', price: 'R$ 22,50' },
    { image: '/lovable-uploads/galeria/R$22,50 .jpeg', price: 'R$ 22,50' },
    { image: '/lovable-uploads/galeria/R$22,50.jpeg', price: 'R$ 22,50' },
    { image: '/lovable-uploads/galeria/R$23,50.jpeg', price: 'R$ 23,50' },
    { image: '/lovable-uploads/galeria/R$24,50 .jpeg', price: 'R$ 24,50' },
    { image: '/lovable-uploads/galeria/R$24,50.jpeg', price: 'R$ 24,50' },
    { image: '/lovable-uploads/galeria/R$25,90.jpeg', price: 'R$ 25,90' },
    { image: '/lovable-uploads/galeria/R$26,50.jpeg', price: 'R$ 26,50' },
    { image: '/lovable-uploads/galeria/R$26,90.png', price: 'R$ 26,90' },
    { image: '/lovable-uploads/galeria/R$27,90 .jpeg', price: 'R$ 27,90' },
    { image: '/lovable-uploads/galeria/R$27,90.jpeg', price: 'R$ 27,90' },
    { image: '/lovable-uploads/galeria/R$28,50.jpeg', price: 'R$ 28,50' },
    { image: '/lovable-uploads/galeria/R$29,90 .jpeg', price: 'R$ 29,90' },
    { image: '/lovable-uploads/galeria/R$29,90 .png', price: 'R$ 29,90' },
    { image: '/lovable-uploads/galeria/R$29,90.jpeg', price: 'R$ 29,90' },
    { image: '/lovable-uploads/galeria/R$3,50.jpeg', price: 'R$ 3,50' },
    { image: '/lovable-uploads/galeria/R$3,90.jpeg', price: 'R$ 3,90' },
    { image: '/lovable-uploads/galeria/R$32,50 .jpeg', price: 'R$ 32,50' },
    { image: '/lovable-uploads/galeria/R$32,50.png', price: 'R$ 32,50' },
    { image: '/lovable-uploads/galeria/R$32,90.jpeg', price: 'R$ 32,90' },
    { image: '/lovable-uploads/galeria/R$34,90.jpeg', price: 'R$ 34,90' },
    { image: '/lovable-uploads/galeria/R$35,0.jpeg', price: 'R$ 35,00' },
    { image: '/lovable-uploads/galeria/R$36,90.png', price: 'R$ 36,90' },
    { image: '/lovable-uploads/galeria/R$39,90  .jpeg', price: 'R$ 39,90' },
    { image: '/lovable-uploads/galeria/R$39,90  .png', price: 'R$ 39,90' },
    { image: '/lovable-uploads/galeria/R$39,90 .jpeg', price: 'R$ 39,90' },
    { image: '/lovable-uploads/galeria/R$39,90.jpeg', price: 'R$ 39,90' },
    { image: '/lovable-uploads/galeria/R$39,90.png', price: 'R$ 39,90' },
    { image: '/lovable-uploads/galeria/R$5,90.jpeg', price: 'R$ 5,90' },
    { image: '/lovable-uploads/galeria/R$59,90.jpeg', price: 'R$ 59,90' },
    { image: '/lovable-uploads/galeria/R$6,80 .jpeg', price: 'R$ 6,80' },
    { image: '/lovable-uploads/galeria/R$6,80.jpeg', price: 'R$ 6,80' },
    { image: '/lovable-uploads/galeria/R$7,50.jpeg', price: 'R$ 7,50' },
    { image: '/lovable-uploads/galeria/R$7,50.png', price: 'R$ 7,50' },
    { image: '/lovable-uploads/galeria/R$8,50.jpeg', price: 'R$ 8,50' },
    { image: '/lovable-uploads/galeria/R$8,90 .jpeg', price: 'R$ 8,90' },
    { image: '/lovable-uploads/galeria/R$8,90.jpeg', price: 'R$ 8,90' }
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
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.price}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-3">
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
