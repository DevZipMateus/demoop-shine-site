
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

  // Extract price from filename
  const extractPrice = (filename: string): string => {
    const priceMatch = filename.match(/R\$\s*[\d,]+(?:\.\d{2})?/);
    return priceMatch ? priceMatch[0] : 'Consulte';
  };

  // Generate product name from filename
  const generateProductName = (filename: string): string => {
    const nameWithoutExtension = filename.replace(/\.(jpeg|jpg|png)$/i, '');
    const nameWithoutPrice = nameWithoutExtension.replace(/R\$\s*[\d,]+(?:\.\d{2})?/g, '').trim();
    
    if (nameWithoutPrice.length > 0) {
      return `Produto de Limpeza - ${nameWithoutPrice}`;
    }
    
    return 'Produto de Limpeza Profissional';
  };

  // Categorize products based on common patterns
  const categorizeProduct = (filename: string): string => {
    const name = filename.toLowerCase();
    if (name.includes('detergente') || name.includes('5l') || name.includes('2l')) return 'detergentes';
    if (name.includes('desinfetante')) return 'desinfetantes';
    if (name.includes('sabão') || name.includes('sabao')) return 'saboes';
    if (name.includes('limpador')) return 'limpadores';
    if (name.includes('amaciante')) return 'amaciantes';
    if (name.includes('álcool') || name.includes('alcool') || name.includes('gel')) return 'higiene';
    return 'limpeza-geral';
  };

  useEffect(() => {
    // All images from public/lovable-uploads/galeria
    const galleryImages = [
      "5L - R$27,90  2L - R$12,90 (cópia).jpeg",
      "5L - R$27,90  2L - R$12,90.jpeg",
      "69a48e2b-d0fd-4b71-a842-abe00864f7fd.png",
      "90d99fc5-2fe3-4a3b-a15c-64bc0c7f8cef.png",
      "R$    13,90.jpeg",
      "R$   13,90 .jpeg",
      "R$   13,90.jpeg",
      "R$   15,90.jpeg",
      "R$  10,50.jpeg",
      "R$  13,50.jpeg",
      "R$  13,90    .jpeg",
      "R$  13,90  .jpeg",
      "R$  13,90 .jpeg",
      "R$  13,90.jpeg",
      "R$  15,90.jpeg",
      "R$  17,90.jpeg",
      "R$  19,90.jpeg",
      "R$  20,90.jpeg",
      "R$  29,90 .png",
      "R$  32,90.jpeg",
      "R$ 10,50 .jpeg",
      "R$ 10,50.jpeg",
      "R$ 10,90.jpeg",
      "R$ 13,50.jpeg",
      "R$ 13,90    .jpeg",
      "R$ 13,90   .jpeg",
      "R$ 13,90  .jpeg",
      "R$ 13,90 .jpeg",
      "R$ 13,90.jpeg",
      "R$ 14,90.jpeg",
      "R$ 15,90   .jpeg",
      "R$ 15,90  .jpeg",
      "R$ 15,90 .jpeg",
      "R$ 15,90.jpeg",
      "R$ 16,50.jpeg",
      "R$ 16,90.jpeg",
      "R$ 17,90   .jpeg",
      "R$ 17,90  .jpeg",
      "R$ 17,90 .jpeg",
      "R$ 17,90.jpeg",
      "R$ 19,90 .jpeg",
      "R$ 19,90.jpeg",
      "R$ 19,90.png",
      "R$ 20,90.jpeg",
      "R$ 21,90.jpeg",
      "R$ 22,50.jpeg",
      "R$ 23,90.jpeg",
      "R$ 24,50.jpeg",
      "R$ 26,50.jpeg",
      "R$ 29,90.jpeg",
      "R$ 3,50.jpeg",
      "R$ 32,50.jpeg",
      "R$ 5,90.jpeg",
      "R$ 6,80.jpeg",
      "R$ 7,50.jpeg",
      "R$ 9,90.jpeg",
      "R$ 9.jpeg",
      "R$10,50  .jpeg",
      "R$10,50 .jpeg",
      "R$10,50.jpeg",
      "R$10,50.png",
      "R$10,90 .jpeg",
      "R$10,90.jpeg",
      "R$11,90.jpeg",
      "R$12,90 .jpeg",
      "R$12,90.jpeg",
      "R$13,50.jpeg",
      "R$13,90    .jpeg",
      "R$13,90   .jpeg",
      "R$13,90  .jpeg",
      "R$13,90 .jpeg",
      "R$13,90.jpeg",
      "R$14,50.jpeg",
      "R$14,50.png",
      "R$14,90  .jpeg",
      "R$14,90 .jpeg",
      "R$14,90.jpeg",
      "R$15,90  .png",
      "R$15,90 .jpeg",
      "R$15,90.jpeg",
      "R$16,50.jpeg",
      "R$16,90.jpeg",
      "R$16,90.png",
      "R$17,50.jpeg",
      "R$17,50.png",
      "R$18,90 .jpeg",
      "R$18,90.jpeg",
      "R$19,90   .jpeg",
      "R$19,90  .jpeg",
      "R$19,90.jpeg",
      "R$19,90.png",
      "R$20,90.jpeg",
      "R$21,90  .jpeg",
      "R$21,90 .jpeg",
      "R$21,90.jpeg",
      "R$22,50  .jpeg",
      "R$22,50 .jpeg",
      "R$22,50.jpeg",
      "R$23,50.jpeg",
      "R$24,50 .jpeg",
      "R$24,50.jpeg",
      "R$25,90.jpeg",
      "R$26,50.jpeg",
      "R$26,90.png",
      "R$27,90 .jpeg",
      "R$27,90.jpeg",
      "R$28,50.jpeg",
      "R$29,90 .jpeg",
      "R$29,90 .png",
      "R$29,90.jpeg",
      "R$3,50.jpeg",
      "R$3,90.jpeg",
      "R$32,50 .jpeg",
      "R$32,50.png",
      "R$34,90.jpeg",
      "R$35,0.jpeg",
      "R$36,90.png",
      "R$39,90  .jpeg",
      "R$39,90  .png",
      "R$39,90 .jpeg",
      "R$39,90.jpeg",
      "R$39,90.png",
      "R$5,90.jpeg",
      "R$6,80 .jpeg",
      "R$6,80.jpeg",
      "R$7,50.jpeg",
      "R$7,50.png",
      "R$8,50.jpeg",
      "R$8,90 .jpeg",
      "R$8,90.jpeg",
      "dabf577d-abec-4c2f-aab4-f1a1c600dc29.png"
    ];

    const galleryProducts: Product[] = galleryImages.map((filename, index) => ({
      id: index + 1,
      name: generateProductName(filename),
      price: extractPrice(filename),
      image: `/lovable-uploads/galeria/${filename}`,
      category: categorizeProduct(filename),
      description: "Produto de limpeza profissional de alta qualidade"
    }));
    
    setProducts(galleryProducts);
    setFilteredProducts(galleryProducts);
  }, []);

  // Filter products based on search and category
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.price.toLowerCase().includes(searchTerm.toLowerCase())
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
    { value: 'higiene', label: 'Higiene' },
    { value: 'limpeza-geral', label: 'Limpeza Geral' }
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
                        onError={(e) => {
                          console.log(`Erro ao carregar imagem: ${product.image}`);
                          e.currentTarget.src = '/placeholder.svg';
                        }}
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
