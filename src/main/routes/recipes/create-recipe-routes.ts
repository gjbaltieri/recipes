import { Router } from 'express';
import { makeCreateRecipeController } from '../../factory/recipes/create/create-recipe-validator';
import routeAdapter from '../adapter/route-adapter';

export default (router: Router): void => {
  router.post('/enviar', routeAdapter(makeCreateRecipeController()));
};
