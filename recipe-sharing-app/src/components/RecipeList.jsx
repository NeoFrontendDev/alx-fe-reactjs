import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

  const RecipeList = () => {
    const filteredRecipes =
      useRecipeStore((state) =>
        state.filteredRecipes);

    return (
      <div>
        {filterdedRecipes.lenghth === 0 ? (
        <p>No recipes found.</p>
          ) : (
          <ul>
            {filteredRecipes.map((recipe) =>
          (
            <li key={recipe.id>
              <Link to={'/recipe/${recipe.id} '} >{recipe.title}</Link>
              </li>
              ))}
          </ul>
          )}
      </div>
      );
  };

  export default RecipeList;
