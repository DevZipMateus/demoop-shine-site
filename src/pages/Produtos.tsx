
import React from 'react';
import { Search, Filter } from 'lucide-react';

const Produtos = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Página de Produtos</h2>
          <p className="text-gray-500 text-lg">Conteúdo em desenvolvimento</p>
        </div>
      </main>
    </div>
  );
};

export default Produtos;
