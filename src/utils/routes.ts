export const getStoredRoutes = () => {
  const stored = localStorage.getItem("customRoutes");
  return stored ? JSON.parse(stored) : [];
};