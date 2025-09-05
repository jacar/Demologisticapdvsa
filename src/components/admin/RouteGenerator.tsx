"use client";

import { useState, useEffect } from "react";

interface Route {
  path: string;
  label: string;
  component?: string; // Aquí puedes extender para más opciones
}

const RouteGenerator = () => {
  const [routes, setRoutes] = useState<Route[]>(() => {
    const stored = localStorage.getItem("customRoutes");
    return stored ? JSON.parse(stored) : [];
  });
  const [path, setPath] = useState("");
  const [label, setLabel] = useState("");

  useEffect(() => {
    localStorage.setItem("customRoutes", JSON.stringify(routes));
  }, [routes]);

  const handleAddRoute = () => {
    if (path && label) {
      setRoutes([...routes, { path, label }]);
      setPath("");
      setLabel("");
    }
  };

  const handleRemoveRoute = (index: number) => {
    const newRoutes = [...routes];
    newRoutes.splice(index, 1);
    setRoutes(newRoutes);
  };

  return (
    <div className="border p-4 rounded shadow mb-4">
      <h2 className="text-xl font-semibold mb-2">Generador de Rutas</h2>
      <div className="mb-2">
        <input
          className="border p-2 rounded w-full mb-2"
          placeholder="Ruta (ej. /nueva-ruta)"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
        <input
          className="border p-2 rounded w-full"
          placeholder="Etiqueta"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleAddRoute}
      >
        Agregar Ruta
      </button>
      <ul className="mt-4 space-y-2">
        {routes.map((route, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>
              {route.label} - {route.path}
            </span>
            <button
              className="text-red-500"
              onClick={() => handleRemoveRoute(index)}
            >
              eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteGenerator;