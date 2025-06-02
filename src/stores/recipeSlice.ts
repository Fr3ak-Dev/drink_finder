import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories, SearchFilters } from "../types"

export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
    searchRecipes: (SearchFilters:SearchFilters) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipesSliceType> =  (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (filters) => {
        console.log(filters)
    }
})