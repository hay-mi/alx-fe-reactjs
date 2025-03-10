import { create } from "zustand";
import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  setSearchTerm: (term) =>
    set((state) => {
      set({ searchTerm: term });
      state.filterRecipes();
    }),
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      set({ recipes: updatedRecipes });
      state.filterRecipes(); // Update filtered recipes
    }),
  deleteRecipe: (recipeId) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter(
        (recipe) => recipe.id !== recipeId
      );
      set({ recipes: updatedRecipes });
      state.filterRecipes(); // Update filtered recipes
    }),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      set({ recipes: updatedRecipes });
      state.filterRecipes();
    }),
    favorites:,
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations:,
  generateRecommendations: () => set(state => {
    
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  })
}));

export { useRecipeStore };
