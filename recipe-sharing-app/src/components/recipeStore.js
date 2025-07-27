import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated =
        state.recipe.map((recipe) =>
          recipe.id ===
          updatedRecipe.id ?
          uodatedRecipe : recipe
          );
      return {
        recipes: updated,
        filteredRecipes : updated.filter((recipe) =>
          recipe.title.toLowerCase().includes (state.searchTerm.toLowerCase())
          ),
      };
    }),
  deleteRecipe: (id) =>
    set((state) => ({
      const remaining =
      state.recipes.filter((recipe) => recipe.id !== id);
      return {
      recipes: remaining,
      filteredRecipes: remaining.filter((recipe) =>
        Recipe.title.toLowerCase().includes(state.searchTerm.toLoweCase())  
         ),
      };
    }),
  }));
