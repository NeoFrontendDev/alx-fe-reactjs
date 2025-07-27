import { create } from 'zustand';

export const useRecipeStore = 
  create((set, get) => ({
    recipes: [],
    searchTerm: '',
    filteredRecipes: [],

    setSearchTerm: (term) => {
      set({ searchTerm: term });
      get().filteredRecipes();
    },
    filteredRecipes: () =>
      set((state) => ({
        filteredRecipes: state.recipes.filter((recipes) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
          ),
          })),
addRecipe: (recipe) => {
  set((state) => {
    const newRecipe = [...state.recipes, recipe];
    return {
      recipes: newRecipes,
      filteredRecipes: newRecipes.filter((recipe) =>
        (recipe.title.toLowerCase().indudes(state.searchTerm.toLowerCase())
         ),
        },
      });
},
    
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
