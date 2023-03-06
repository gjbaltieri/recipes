import { Validation } from '../../protocols/fields-validator';

export default class ValidatorComposite implements Validation {
  constructor(private readonly validators: Validation[]) {}
  validate(inputs: any) {
    for (const validation of this.validators) {
      const error = validation.validate(inputs);
      if (error) {
        return error;
      }
    }
  }
}
