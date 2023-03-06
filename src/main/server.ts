import express from 'express';
import { myDataSource } from './data-source';
import CreateRecipeController from '../presentation/controllers/recipe/create-recipe-controller';
import AddRecipeRepository from '../infra/db/add-recipe';
import { RepositoryAdapter } from '../infra/db/helper/repository-adapter';
import RouteAdapter from './route/adapter/route-adapter';
import { bodyParser } from './middlewares/body-parser';
import { makeRecipeValidator } from './factory/create-recipe-factory';
const app = express();

app.listen(3000, () => {
  myDataSource
    .initialize()
    .then(() => {
      console.log(`Data Source has been initialized`);
      console.log(`Server is running on port ${3000} `);
    })
    .catch((err) => {
      console.error(`Data Source initialization error`, err);
    });
});

const makeController = () => {
  const validator = makeRecipeValidator();
  const repositoryAdapter = new RepositoryAdapter();
  const addRepository = new AddRecipeRepository(repositoryAdapter);
  return new CreateRecipeController(validator, addRepository);
};

app.use(bodyParser);
app.post('/enviar', RouteAdapter(makeController()));
