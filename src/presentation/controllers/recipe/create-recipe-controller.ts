import { HttpRequest, HttpResponse } from '../../protocols/http';
import { Controller } from '../../protocols/controller';
import { badRequest, ok, serverError } from '../../helper/http/http-helper';
import { AddRecipe } from '../../../domain/db/add-recipe';
import { Validation } from '../../protocols/fields-validator';

export default class CreateRecipeController implements Controller {
  constructor(
    private readonly requiredFieldsValidator: Validation,
    private readonly addRecipe: AddRecipe
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const isValid = this.requiredFieldsValidator.validate(httpRequest.body);
      if (isValid) {
        return badRequest(isValid);
      }
      const { name, category, preparation_time, servings, author } =
        httpRequest.body;
      const addRecipe = await this.addRecipe.add({
        name,
        category,
        preparation_time,
        servings,
        author,
      });
      return ok(addRecipe);
    } catch (error) {
      console.log(error);
      return serverError();
    }
  }
}
