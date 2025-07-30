
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Se estamos na página de produtos, navegar para a home primeiro
    if (location.pathname === '/produtos') {
      navigate('/', { replace: true });
      // Aguardar um pouco para a página carregar e então fazer o scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Se já estamos na home, fazer scroll diretamente
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'inicio', label: 'Início', type: 'scroll' },
    { id: 'sobre', label: 'Sobre', type: 'scroll' },
    { id: 'produtos', label: 'Produtos', type: 'link', href: '/produtos' },
    { id: 'servicos', label: 'Serviços', type: 'scroll' },
    { id: 'depoimentos', label: 'Depoimentos', type: 'scroll' },
    { id: 'localizacao', label: 'Localização', type: 'scroll' },
    { id: 'contato', label: 'Contato', type: 'scroll' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="/lovable-uploads/a921157f-49aa-4e04-92cd-d937582e909f.png" 
              alt="Demoop - Excelência em Limpeza"
              className="h-12 w-auto"
              loading="eager"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            {menuItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-demoop-teal focus:ring-opacity-50 rounded-md px-2 py-1 ${
                    location.pathname === item.href 
                      ? 'text-demoop-teal' 
                      : 'text-gray-700 hover:text-demoop-teal'
                  }`}
                  aria-label={`Navegar para página ${item.label}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-demoop-teal font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-demoop-teal focus:ring-opacity-50 rounded-md px-2 py-1"
                  aria-label={`Navegar para seção ${item.label}`}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu de navegação"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200" role="navigation">
            {menuItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`block w-full text-left py-3 px-4 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-demoop-teal focus:ring-opacity-50 rounded-md ${
                    location.pathname === item.href 
                      ? 'text-demoop-teal bg-demoop-light-teal' 
                      : 'text-gray-700 hover:text-demoop-teal hover:bg-demoop-light-teal'
                  }`}
                  aria-label={`Navegar para página ${item.label}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-demoop-teal hover:bg-demoop-light-teal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-demoop-teal focus:ring-opacity-50 rounded-md"
                  aria-label={`Navegar para seção ${item.label}`}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
