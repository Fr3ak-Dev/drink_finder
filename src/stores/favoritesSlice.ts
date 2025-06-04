import type { StateCreator } from "zustand";
import type { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favorites.some(fav => fav.idDrink === recipe.idDrink)) {
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
    }
})