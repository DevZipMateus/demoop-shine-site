import React from 'react';
import { Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Produtos = () => {
  useScrollToTop();

  // Lista de todas as imagens da galeria com seus preços extraídos dos nomes dos arquivos
  const products = [
    { id: 1, image: '/lovable-uploads/galeria/5L - R$27,90  2L - R$12,90.jpeg', price: '5L - R$27,90 / 2L - R$12,90' },
    { id: 2, image: '/lovable-uploads/galeria/R$    13,90.jpeg', price: 'R$ 13,90' },
    { id: 3, image: '/lovable-uploads/galeria/R$    16,90 .jpeg', price: 'R$ 16,90' },
    { id: 4, image: '/lovable-uploads/galeria/R$    17,90  .jpeg', price: 'R$ 17,90' },
    { id: 5, image: '/lovable-uploads/galeria/R$   13,90 .jpeg', price: 'R$ 13,90' },
    { id: 6, image: '/lovable-uploads/galeria/R$   13,90.jpeg', price: 'R$ 13,90' },
    { id: 7, image: '/lovable-uploads/galeria/R$   15,90.jpeg', price: 'R$ 15,90' },
    { id: 8, image: '/lovable-uploads/galeria/R$  10,50.jpeg', price: 'R$ 10,50' },
    { id: 9, image: '/lovable-uploads/galeria/R$  13,50.jpeg', price: 'R$ 13,50' },
    { id: 10, image: '/lovable-uploads/galeria/R$  13,90    .jpeg', price: 'R$ 13,90' },
    { id: 11, image: '/lovable-uploads/galeria/R$  13,90  .jpeg', price: 'R$ 13,90' },
    { id: 12, image: '/lovable-uploads/galeria/R$  13,90 .jpeg', price: 'R$ 13,90' },
    { id: 13, image: '/lovable-uploads/galeria/R$  13,90.jpeg', price: 'R$ 13,90' },
    { id: 14, image: '/lovable-uploads/galeria/R$  15,90.jpeg', price: 'R$ 15,90' },
    { id: 15, image: '/lovable-uploads/galeria/R$  17,90.jpeg', price: 'R$ 17,90' },
    { id: 16, image: '/lovable-uploads/galeria/R$  19,90.jpeg', price: 'R$ 19,90' },
    { id: 17, image: '/lovable-uploads/galeria/R$  20,90.jpeg', price: 'R$ 20,90' },
    { id: 18, image: '/lovable-uploads/galeria/R$  29,90   .jpeg', price: 'R$ 29,90' },
    { id: 19, image: '/lovable-uploads/galeria/R$  29,90 .png', price: 'R$ 29,90' },
    { id: 20, image: '/lovable-uploads/galeria/R$  32,90.jpeg', price: 'R$ 32,90' },
    { id: 21, image: '/lovable-uploads/galeria/R$  39,90.jpeg', price: 'R$ 39,90' },
    { id: 22, image: '/lovable-uploads/galeria/R$ 10,50 .jpeg', price: 'R$ 10,50' },
    { id: 23, image: '/lovable-uploads/galeria/R$ 10,50.jpeg', price: 'R$ 10,50' },
    { id: 24, image: '/lovable-uploads/galeria/R$ 10,90.jpeg', price: 'R$ 10,90' },
    { id: 25, image: '/lovable-uploads/galeria/R$ 13,50.jpeg', price: 'R$ 13,50' },
    { id: 26, image: '/lovable-uploads/galeria/R$ 13,90    .jpeg', price: 'R$ 13,90' },
    { id: 27, image: '/lovable-uploads/galeria/R$ 13,90   .jpeg', price: 'R$ 13,90' },
    { id: 28, image: '/lovable-uploads/galeria/R$ 13,90  .jpeg', price: 'R$ 13,90' },
    { id: 29, image: '/lovable-uploads/galeria/R$ 13,90 .jpeg', price: 'R$ 13,90' },
    { id: 30, image: '/lovable-uploads/galeria/R$ 13,90.jpeg', price: 'R$ 13,90' },
    { id: 31, image: '/lovable-uploads/galeria/R$ 14,90.jpeg', price: 'R$ 14,90' },
    { id: 32, image: '/lovable-uploads/galeria/R$ 15,90   .jpeg', price: 'R$ 15,90' },
    { id: 33, image: '/lovable-uploads/galeria/R$ 15,90  .jpeg', price: 'R$ 15,90' },
    { id: 34, image: '/lovable-uploads/galeria/R$ 15,90 .jpeg', price: 'R$ 15,90' },
    { id: 35, image: '/lovable-uploads/galeria/R$ 15,90.jpeg', price: 'R$ 15,90' },
    { id: 36, image: '/lovable-uploads/galeria/R$ 16,50.jpeg', price: 'R$ 16,50' },
    { id: 37, image: '/lovable-uploads/galeria/R$ 16,90.jpeg', price: 'R$ 16,90' },
    { id: 38, image: '/lovable-uploads/galeria/R$ 17,90   .jpeg', price: 'R$ 17,90' },
    { id: 39, image: '/lovable-uploads/galeria/R$ 17,90  .jpeg', price: 'R$ 17,90' },
    { id: 40, image: '/lovable-uploads/galeria/R$ 17,90 .jpeg', price: 'R$ 17,90' },
    { id: 41, image: '/lovable-uploads/galeria/R$ 17,90.jpeg', price: 'R$ 17,90' },
    { id: 42, image: '/lovable-uploads/galeria/R$ 19,90 .jpeg', price: 'R$ 19,90' },
    { id: 43, image: '/lovable-uploads/galeria/R$ 19,90.jpeg', price: 'R$ 19,90' },
    { id: 44, image: '/lovable-uploads/galeria/R$ 19,90.png', price: 'R$ 19,90' },
    { id: 45, image: '/lovable-uploads/galeria/R$ 20,90.jpeg', price: 'R$ 20,90' },
    { id: 46, image: '/lovable-uploads/galeria/R$ 21,90.jpeg', price: 'R$ 21,90' },
    { id: 47, image: '/lovable-uploads/galeria/R$ 22,50.jpeg', price: 'R$ 22,50' },
    { id: 48, image: '/lovable-uploads/galeria/R$ 23,90.jpeg', price: 'R$ 23,90' },
    { id: 49, image: '/lovable-uploads/galeria/R$ 24,50.jpeg', price: 'R$ 24,50' },
    { id: 50, image: '/lovable-uploads/galeria/R$ 26,50.jpeg', price: 'R$ 26,50' },
    { id: 51, image: '/lovable-uploads/galeria/R$ 29,90.jpeg', price: 'R$ 29,90' },
    { id: 52, image: '/lovable-uploads/galeria/R$ 3,50.jpeg', price: 'R$ 3,50' },
    { id: 53, image: '/lovable-uploads/galeria/R$ 32,50.jpeg', price: 'R$ 32,50' },
    { id: 54, image: '/lovable-uploads/galeria/R$ 5,90.jpeg', price: 'R$ 5,90' },
    { id: 55, image: '/lovable-uploads/galeria/R$ 6,80.jpeg', price: 'R$ 6,80' },
    { id: 56, image: '/lovable-uploads/galeria/R$ 7,50.jpeg', price: 'R$ 7,50' },
    { id: 57, image: '/lovable-uploads/galeria/R$ 9,90.jpeg', price: 'R$ 9,90' },
    { id: 58, image: '/lovable-uploads/galeria/R$ 9.jpeg', price: 'R$ 9' },
    { id: 59, image: '/lovable-uploads/galeria/R$10,50  .jpeg', price: 'R$ 10,50' },
    { id: 60, image: '/lovable-uploads/galeria/R$10,50 .jpeg', price: 'R$ 10,50' },
    { id: 61, image: '/lovable-uploads/galeria/R$10,50.jpeg', price: 'R$ 10,50' },
    { id: 62, image: '/lovable-uploads/galeria/R$10,50.png', price: 'R$ 10,50' },
    { id: 63, image: '/lovable-uploads/galeria/R$10,90 .jpeg', price: 'R$ 10,90' },
    { id: 64, image: '/lovable-uploads/galeria/R$10,90.jpeg', price: 'R$ 10,90' },
    { id: 65, image: '/lovable-uploads/galeria/R$11,90.jpeg', price: 'R$ 11,90' },
    { id: 66, image: '/lovable-uploads/galeria/R$12,90 .jpeg', price: 'R$ 12,90' },
    { id: 67, image: '/lovable-uploads/galeria/R$12,90.jpeg', price: 'R$ 12,90' },
    { id: 68, image: '/lovable-uploads/galeria/R$125,50.jpeg', price: 'R$ 125,50' },
    { id: 69, image: '/lovable-uploads/galeria/R$13,50.jpeg', price: 'R$ 13,50' },
    { id: 70, image: '/lovable-uploads/galeria/R$13,90    .jpeg', price: 'R$ 13,90' },
    { id: 71, image: '/lovable-uploads/galeria/R$13,90   .jpeg', price: 'R$ 13,90' },
    { id: 72, image: '/lovable-uploads/galeria/R$13,90  .jpeg', price: 'R$ 13,90' },
    { id: 73, image: '/lovable-uploads/galeria/R$13,90 .jpeg', price: 'R$ 13,90' },
    { id: 74, image: '/lovable-uploads/galeria/R$13,90.jpeg', price: 'R$ 13,90' },
    { id: 75, image: '/lovable-uploads/galeria/R$14,50.jpeg', price: 'R$ 14,50' },
    { id: 76, image: '/lovable-uploads/galeria/R$14,50.png', price: 'R$ 14,50' },
    { id: 77, image: '/lovable-uploads/galeria/R$14,90  .jpeg', price: 'R$ 14,90' },
    { id: 78, image: '/lovable-uploads/galeria/R$14,90 .jpeg', price: 'R$ 14,90' },
    { id: 79, image: '/lovable-uploads/galeria/R$14,90.jpeg', price: 'R$ 14,90' },
    { id: 80, image: '/lovable-uploads/galeria/R$15,90  .png', price: 'R$ 15,90' },
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
