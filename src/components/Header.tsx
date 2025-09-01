
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import Cart from './Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log('Navegando para seção:', sectionId, 'Rota atual:', location.pathname);
    
    if (location.pathname !== '/empresa') {
      console.log('Redirecionando para /empresa e depois para seção:', sectionId);
      navigate('/empresa', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    console.log('Navegando para:', path);
    navigate(path, { replace: true });
    setIsMenuOpen(false);
  };

  const totalItems = getTotalItems();

  console.log('Header renderizado - Rota atual:', location.pathname);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Sempre visível */}
            <div 
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity" 
              onClick={() => handleNavigation('/')}
              role="button"
              tabIndex={0}
            >
              <div className="w-12 h-12 bg-demoop-teal rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-white font-bold text-xl font-poppins">D</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-demoop-teal font-poppins leading-tight">Demoop</h1>
                <p className="text-xs text-gray-600 font-inter -mt-1">Produtos de Limpeza</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <button 
                onClick={() => handleNavigation('/')} 
                className={`font-medium transition-colors ${
                  location.pathname === '/' 
                    ? 'text-demoop-teal font-semibold' 
                    : 'text-gray-700 hover:text-demoop-teal'
                }`}
              >
                Produtos
              </button>
              <button 
                onClick={() => handleNavigation('/empresa')} 
                className={`font-medium transition-colors ${
                  location.pathname === '/empresa' 
                    ? 'text-demoop-teal font-semibold' 
                    : 'text-gray-700 hover:text-demoop-teal'
                }`}
              >
                Empresa
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-gray-700 hover:text-demoop-teal transition-colors font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')} 
                className="text-gray-700 hover:text-demoop-teal transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')} 
                className="text-gray-700 hover:text-demoop-teal transition-colors font-medium"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-gray-700 hover:text-demoop-teal transition-colors font-medium"
              >
                Contato
              </button>
            </nav>

            {/* Cart and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-demoop-teal transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-demoop-teal text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-demoop-teal transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => handleNavigation('/')} 
                  className={`text-left font-medium transition-colors ${
                    location.pathname === '/' 
                      ? 'text-demoop-teal font-semibold' 
                      : 'text-gray-700 hover:text-demoop-teal'
                  }`}
                >
                  Produtos
                </button>
                <button 
                  onClick={() => handleNavigation('/empresa')} 
                  className={`text-left font-medium transition-colors ${
                    location.pathname === '/empresa' 
                      ? 'text-demoop-teal font-semibold' 
                      : 'text-gray-700 hover:text-demoop-teal'
                  }`}
                >
                  Empresa
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')} 
                  className="text-left text-gray-700 hover:text-demoop-teal transition-colors font-medium"
                >
                  Sobre
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')} 
                  className="text-left text-gray-700 hover:text-demoop-teal transition-colors font-medium"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('depoimentos')} 
                  className="text-left text-gray-700 hover:text-demoop-teal transition-colors font-medium"
                >
                  Depoimentos
                </button>
                <button 
                  onClick={() => scrollToSection('contato')} 
                  className="text-left text-gray-700 hover:text-demoop-teal transition-colors font-medium"
                >
                  Contato
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Cart Modal */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
