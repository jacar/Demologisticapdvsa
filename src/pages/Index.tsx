<dyad-rename from="src/pages/Index.tsx" to="src/pages/Index.tsx" />

Código actualizado para `src/pages/Index.tsx`:

<dyad-write path="src/pages/Index.tsx" description="Cargar `RouteGenerator` usando React.lazy y Suspense." >
import { MadeWithVibeStacks } from "@/components/made-with-vibestacks";
import React, { Suspense, lazy } from "react";

const RouteGenerator = lazy(() => import("@/components/admin/RouteGenerator"));

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-4xl font-bold mb-4">Panel de Administración</h1>
        <Suspense fallback={<div>Cargando...</div>}>
          <RouteGenerator />
        </Suspense>
        {/* más componentes de admin */}
        <div className="mt-8">
          <MadeWithVibeStacks />
        </div>
      </div>
    </div>
  );
};

export default Index;