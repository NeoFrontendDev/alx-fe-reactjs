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
          favorites: 
        state.favorites.filter((favId) =>
          favId !== id),
      },
    }),

    addFavorite: (recipeId) =>
        set((state) =>
          state.favorite.includes(recipeId) ? {} :
          { favorites: [...state.favorites.recipeId] }
            ),

    removeFavorite: (recipeId) =>
        set((state) => ({
          favorites: state.favorites.filter((Id) =>
            id !== recipeId
          })),

    generateRecommendations: () => {
        const { recipes, favorites } =
        get();
        const recommended = recipes.filter((recipe) =>
          ! favorites.include(recipe.id) && favorites.some((favId) =>
            recipe.title[0] ===
            get(0).recipes.find(f => f.id ===favId) ?.title[0] &&
            Math.random() > 0.5
          );
          set({ recommendations: recommend });
        },
      }));

