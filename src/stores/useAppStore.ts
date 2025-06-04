import { create } from "zustand";
import { createRecipeSlice, type RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
})))