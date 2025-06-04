import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipeSlice, type RecipesSliceType } from "./recipeSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice";

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (recipe: Recipe['idDrink']) => boolean
    loadFromLocalStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            // set({
            //     favorites: get().favorites.filter(fav => fav.idDrink !== recipe.idDrink)
            // })
            set((state) => ({
                favorites: state.favorites.filter(fav => fav.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Recipe removed from favorites',
                error: false
            })
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Recipe added to favorites',
                error: false
            })
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