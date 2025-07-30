
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description?: string;
}

const Produtos = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // Mock products data - in a real app, this would come from an API
  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: "Detergente Multi-uso 5L",
        price: "R$ 27,90",
        image: "/lovable-uploads/galeria/5L - R$27,90  2L - R$12,90.jpeg",
        category: "detergentes",
        description: "Detergente concentrado para limpeza geral"
      },
      {
        id: 2,
        name: "Desinfetante Premium",
        price: "R$ 15,90",
        image: "/lovable-uploads/galeria/R$ 15,90.jpeg",
        category: "desinfetantes",
        description: "Desinfetante com ação bactericida"
      },
      {
        id: 3,
        name: "Sabão Líquido Concentrado",
        price: "R$ 19,90",
        image: "/lovable-uploads/galeria/R$ 19,90.jpeg",
        category: "saboes",
        description: "Sabão líquido para roupas delicadas"
      },
      {
        id: 4,
        name: "Limpador Multiuso",
        price: "R$ 13,90",
        image: "/lovable-uploads/galeria/R$ 13,90.jpeg",
        category: "limpadores",
        description: "Limpador para superfícies diversas"
      },
      {
        id: 5,
        name: "Amaciante Premium",
        price: "R$ 17,90",
        image: "/lovable-uploads/galeria/R$ 17,90.jpeg",
        category: "amaciantes",
        description: "Amaciante com fragrância duradoura"
      },
      {
        id: 6,
        name: "Álcool Gel 70%",
        price: "R$ 10,50",
        image: "/lovable-uploads/galeria/R$ 10,50.jpeg",
        category: "higiene",
        description: "Álcool gel para higienização das mãos"
      }
    ];
    
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  // Filter products based on search and category
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'todos') {
      filtered = filtered.filter(product =>
        product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  const categories = [
    { value: 'todos', label: 'Todos os Produtos' },
    { value: 'detergentes', label: 'Detergentes' },
    { value: 'desinfetantes', label: 'Desinfetantes' },
    { value: 'saboes', label: 'Sabões' },
    { value: 'limpadores', label: 'Limpadores' },
    { value: 'amaciantes', label: 'Amaciantes' },
    { value: 'higiene', label: 'Higiene' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Produtos</h1>
                <p className="text-gray-600 mt-1">Descubra nossa linha completa de produtos de limpeza</p>
              </div>
            </div>
            <Link to="/">
              <img 
                src="/lovable-uploads/a921157f-49aa-4e04-92cd-d937582e909f.png" 
                alt="Demoop Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-demoop-teal focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-demoop-teal focus:border-transparent outline-none"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">
                Mostrando {filteredProducts.length} de {products.length} produtos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3 bg-demoop-teal text-white px-2 py-1 rounded-full text-sm font-semibold">
                        {product.price}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </CardTitle>
                    {product.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-demoop-teal">
                        {product.price}
                      </span>
                      <Button 
                        size="sm" 
                        className="bg-demoop-teal hover:bg-demoop-teal/90"
                        onClick={() => window.open('https://wa.me/5548999982838?text=Olá! Gostaria de saber mais sobre o produto: ' + product.name, '_blank')}
                      >
                        Consultar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>

      {/* CTA Section */}
      <section className="bg-demoop-teal py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Não encontrou o que procura?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Entre em contato conosco! Temos uma ampla variedade de produtos de limpeza 
            e podemos ajudar você a encontrar exatamente o que precisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-demoop-teal border-white hover:bg-gray-50"
              onClick={() => window.open('https://wa.me/5548999982838', '_blank')}
            >
              WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white text-demoop-teal border-white hover:bg-gray-50"
              onClick={() => window.open('tel:+5548999982838', '_blank')}
            >
              Ligar Agora
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Produtos;
