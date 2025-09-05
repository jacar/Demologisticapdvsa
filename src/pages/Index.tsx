import { MadeWithVibeStacks } from "@/components/made-with-vibestacks";
import dynamic from "next/dynamic";

const RouteGenerator = dynamic(() => import("@/components/admin/RouteGenerator"), {
  ssr: false,
});

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-4">
        <h1 className="text-4xl font-bold mb-4">Panel de Administración</h1>
        <RouteGenerator />
        {/* aquí puedes agregar más componentes de admin si quieres */}
        <div className="mt-8">
          <MadeWithVibeStacks />
        </div>
      </div>
    </div>
  );
};

export default Index;