import { RequiredFieldValidation } from '../../../../presentation/helper/validator/required-fields-validator';
import ValidatorComposite from '../../../../presentation/helper/validator/validator-composite';
import { Validation } from '../../../../presentation/protocols/fields-validator';

export const makeRecipeValidator = (): ValidatorComposite => {
  const validations: Validation[] = [];
  for (const field of ['name', 'category', 'preparation_time', 'servings']) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidatorComposite(validations);
};
