import RecipeCard from './RecipeCard';

function RecipeList({ recipes, onDelete }) {
  if (recipes.length === 0) {
    return <p className="text-center">No hay recetas para mostrar.</p>;
  }

  return (
    <div className="row">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="col-12 col-md-6 col-lg-4 mb-4">
          <RecipeCard recipe={recipe} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
