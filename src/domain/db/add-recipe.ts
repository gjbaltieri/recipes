import { AddRecipeModel } from '../usecases/add-recipe-model';

export interface AddRecipe {
  add(recipe: AddRecipeModel): Promise<AddRecipeModel | void>;
}
