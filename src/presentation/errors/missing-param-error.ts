export default class MissingParamError extends Error {
  constructor(stack: string) {
    super(`Missing param: ${stack}`);
    this.name = 'MissingParamError';
    this.stack = stack;
  }
}
