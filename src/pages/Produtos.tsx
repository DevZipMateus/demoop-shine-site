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
    if (name.includes('limpa') || name.includes('vidros') || name.includes('spray')) return 'limpadores';
    if (name.includes('mop') || name.includes('microfibra') || name.includes('banqueta')) return 'equipamentos';
    return 'limpeza-geral';
  };

  useEffect(() => {
    // All images from public/lovable-uploads/galeria - EXCLUDING SPECIFIC IMAGES
    const galleryImages = [
      // "5L - R$27,90  2L - R$12,90  2L - R$12,90.jpeg", // REMOVED
      "5L - R$27,90  2L - R$12,90 .jpeg",
      // "69a48e2b-d0fd-4b71-a842-abe00864f7fd.png", // REMOVED
      // "90d99fc5-2fe3-4a3b-a15c-64bc0c7f8cef.png", // REMOVED
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
      "R$8,90.jpeg"
    ];

    const newProductImages = [
      {
        filename: "158dde15-63cc-4f68-9eac-35c3229acbd4.png",
        name: "Limpa Vidros 2 em 1",
        price: "R$ 29,90",
        category: "limpadores",
        description: "Limpa vidros com rodo para secar e refil lavável em máquina. Cabo extensível de 150 cm com ajuste em até 10 posições diferentes."
      },
      {
        filename: "6a39f1c4-7600-4030-8be7-18f24811d04d.png",
        name: "MOP Spray",
        price: "R$ 39,90",
        category: "equipamentos",
        description: "MOP Spray com base fina e flexível que alcança cantos estreitos. Reservatório acoplado para maior praticidade."
      },
      {
        filename: "4d733bd7-ca62-40f4-a723-1df87156d99b.png",
        name: "Balde MOP com Centrífuga",
        price: "R$ 49,90",
        category: "equipamentos",
        description: "Balde prático com alça, centrífuga fácil, ideal para pisos frios, sintéticos ou madeira. Remove água em excesso com facilidade."
      },
      {
        filename: "7b968807-c9de-441c-9249-a7e2f474f48a.png",
        name: "Limpa Vidros Spray",
        price: "R$ 24,90",
        category: "limpadores",
        description: "Spray limpa vidros com esfregão de microfibra lavável em máquina, borrifador para facilitar aplicação e reservatório para produto de limpeza."
      },
      {
        filename: "6442b420-f136-4325-9733-e79e5e7c5006.png",
        name: "Banqueta Multiuso Retrátil",
        price: "R$ 34,90",
        category: "equipamentos",
        description: "Banqueta multiuso retrátil com superfície antiderrapante. Compacto, prático e resistente para diversas atividades."
      },
      {
        filename: "f171bb0c-6fc2-45d8-a23e-06bdc73cb69d.png",
        name: "Panos Microfibra - Caixa com 20 Peças",
        price: "R$ 19,90",
        category: "limpadores",
        description: "Caixa com 20 panos de microfibra ideais para qualquer ocasião. Reutilizáveis, laváveis em máquina, não risca e não solta pelos."
      },
      {
        filename: "ee45451b-efd2-409c-b446-47e394cea49a.png",
        name: "Zip Clean Saponáceo Spray",
        price: "R$ 16,90",
        category: "limpadores",
        description: "Zip Clean Saponáceo MP - O que você precisa para eliminar as sujeiras mais difíceis. Fórmula eficaz para limpeza pesada."
      }
    ];

    const galleryProducts: Product[] = galleryImages.map((filename, index) => ({
      id: index + 1,
      name: generateProductName(filename),
      price: extractPrice(filename),
      image: `/lovable-uploads/galeria/${filename}`,
      category: categorizeProduct(filename),
      description: "Produto de limpeza profissional de alta qualidade"
    }));

    const newProducts: Product[] = newProductImages.map((item, index) => ({
      id: galleryProducts.length + index + 1,
      name: item.name,
      price: item.price,
      image: `/lovable-uploads/${item.filename}`,
      category: item.category,
      description: item.description
    }));

    const allProducts = [...galleryProducts, ...newProducts];
    
    setProducts(allProducts);
    setFilteredProducts(allProducts);
  }, []);

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
    { value: 'equipamentos', label: 'Equipamentos' },
    { value: 'limpeza-geral', label: 'Limpeza Geral' }
  ];

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
    </div>
  );
};

export default Produtos;
