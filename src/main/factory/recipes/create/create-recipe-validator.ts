import AddRecipeRepository from '../../../../infra/db/add-recipe';
import { RepositoryAdapter } from '../../../../infra/db/helper/repository-adapter';
import CreateRecipeController from '../../../../presentation/controllers/recipe/create-recipe-controller';
import { Controller } from '../../../../presentation/protocols/controller';
import { makeRecipeValidator } from './create-recipe-factory';

export const makeCreateRecipeController = (): Controller => {
  const validator = makeRecipeValidator();
  const repositoryAdapter = new RepositoryAdapter();
  const addRepository = new AddRecipeRepository(repositoryAdapter);
  return new CreateRecipeController(validator, addRepository);
};
