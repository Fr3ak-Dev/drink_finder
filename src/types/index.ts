import type { z } from "zod";
import type { CategoriesAPIResponseSchema, DrinkAPIResponse, DrinksAPIResponseSchema, RecipeAPIResponseSchema, SearchFiltersSchema } from "../utils/recipes-schema";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilters = z.infer<typeof SearchFiltersSchema>
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>