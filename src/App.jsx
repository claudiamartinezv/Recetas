import "./app.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaPlus, FaUtensils } from "react-icons/fa";
import RecipeForm from "./components/RecipeForm";

function App() {
  const defaultRecipes = [
    {
      id: 1,
      name: "Ensalada César",
      description: "Clásica ensalada con pollo y aderezo césar.",
      time: 15,
      image: "img/ensalada-cesar.jpg",
    },
    {
      id: 2,
      name: "Tortilla Española",
      description: "Tortilla de papas tradicional española.",
      time: 30,
      image: "img/tortilla-espanola.jpg",
    },
    {
      id: 3,
      name: "Pasta Alfredo",
      description: "Pasta con salsa Alfredo cremosa.",
      time: 25,
      image: "img/pasta-alfredo.jpg",
    },
  ];

  const [recipes, setRecipes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recipes"));
    if (stored && stored.length > 0) {
      setRecipes(stored);
    } else {
      setRecipes(defaultRecipes);
      localStorage.setItem("recipes", JSON.stringify(defaultRecipes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleSave = (recipe) => {
    if (recipe.id) {
      setRecipes(recipes.map((r) => (r.id === recipe.id ? recipe : r)));
    } else {
      setRecipes([...recipes, { ...recipe, id: Date.now() }]);
    }
  };

  const handleEdit = (recipe) => {
    setSelectedRecipe(recipe);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (confirm("¿Seguro que quieres eliminar esta receta?")) {
      setRecipes(recipes.filter((r) => r.id !== id));
    }
  };

  const handleAddNew = () => {
    setSelectedRecipe(null);
    setShowForm(true);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">
        <FaUtensils /> App de Recetas
      </h1>

      <div className="text-center mb-4">
        <button className="btn btn-success" onClick={handleAddNew}>
          <FaPlus /> Nueva Receta
        </button>
      </div>

      <RecipeForm
        show={showForm}
        handleClose={() => setShowForm(false)}
        onSave={handleSave}
        initialData={selectedRecipe}
      />

      <div className="row">
        {recipes.length > 0 ? (
          recipes.map((r) => (
            <div className="col-md-4 col-sm-6 mb-3" key={r.id}>
              <div className="card h-100 shadow-sm">
                {r.image && (
                  <img
                    src={r.image}
                    className="card-img-top"
                    alt={r.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{r.name}</h5>
                  <p className="card-text">{r.description}</p>
                  <p>
                    <strong>Tiempo:</strong> {r.time} min
                  </p>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleEdit(r)}
                  >
                    <FaEdit /> Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(r.id)}
                  >
                    <FaTrash /> Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No hay recetas para mostrar.</p>
        )}
      </div>
    </div>
  );
}

export default App;
