import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set((state) => ({ recipes: state.recipe.filters((recipe) => recipe. })),
  updateRecipe: (updateRecipe) => set((state) => ({ recipe: state.recipes.map((recipe) => recipe.id === updateRecipe.id ? updateRecipe), })),
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
