// Definimos la clave con la que guardaremos las recetas en localStorage
const STORAGE_KEY = 'recetas';

// Función para obtener las recetas guardadas en localStorage
export const getRecipes = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  // Si hay datos, los parseamos a JSON; si no, retornamos un array vacío
  return data ? JSON.parse(data) : [];
};

// Función para guardar las recetas en localStorage
export const saveRecipes = (recipes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
};
