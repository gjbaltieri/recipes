import { AddRecipe } from '../../domain/db/add-recipe';
import { AddRecipeModel } from '../../domain/usecases/add-recipe-model';
import RepositoryModel from '../../domain/usecases/repository-model';
import { Recipe } from '../../shared/typeorm/entity/recipe.entity';

export default class AddRecipeRepository implements AddRecipe {
  constructor(private readonly respository: RepositoryModel) {}
  async add(recipe: AddRecipeModel): Promise<AddRecipeModel> {
    const recipeRepository = this.respository.get(Recipe);
    console.log(recipe);
    const createRecipe = recipeRepository.create(recipe);
    const saveRecipe = await recipeRepository.save(createRecipe);
    return saveRecipe as AddRecipeModel;
  }
}
