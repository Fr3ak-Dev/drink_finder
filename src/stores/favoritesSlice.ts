import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipeSlice, type RecipesSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (recipe: Recipe['idDrink']) => boolean
    loadFromLocalStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            // set({
            //     favorites: get().favorites.filter(fav => fav.idDrink !== recipe.idDrink)
            // })
            set((state) => ({
                favorites: state.favorites.filter(fav => fav.idDrink !== recipe.idDrink)
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        createRecipeSlice(set, get, api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(fav => fav.idDrink === id)
    },
    loadFromLocalStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})