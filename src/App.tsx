import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Importar función para obtener las rutas guardadas
import { getStoredRoutes } from "@/utils/routes";

const queryClient = new QueryClient();

const DynamicRoutes = () => {
  const storedRoutes = getStoredRoutes();

  return (
    <>
      {storedRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<div>{route.label}</div>} // Puedes reemplazar esto por el componente que quieras renderizar
        />
      ))}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Rutas dinámicas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;