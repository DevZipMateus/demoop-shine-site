
import React, { useState } from 'react';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface QuantitySelectorProps {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="space-y-3">
      {/* Quantity Controls */}
      <div className="flex items-center justify-center space-x-3">
        <Button
          variant="outline"
          size="icon"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
          className="h-8 w-8"
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <span className="text-lg font-semibold min-w-[2rem] text-center">
          {quantity}
        </span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={increaseQuantity}
          className="h-8 w-8"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        className="w-full bg-demoop-teal hover:bg-demoop-teal/90 text-white"
        size="sm"
      >
        <ShoppingCart className="h-4 w-4 mr-2" />
        Adicionar
      </Button>
    </div>
  );
};

export default QuantitySelector;
