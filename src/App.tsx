
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Produtos from "./pages/Produtos";
import Empresa from "./pages/Empresa";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App inicializado - Rota atual:', window.location.pathname);
  console.log('Host atual:', window.location.host);
  
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Rota principal - sempre carrega produtos */}
              <Route path="/" element={<Produtos />} />
              {/* Página da empresa */}
              <Route path="/empresa" element={<Empresa />} />
              {/* 404 para rotas não encontradas */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
