export class EmptyRequiredFieldError extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, EmptyRequiredFieldError.prototype);
  }
}

export class MismatchedFieldsError extends Error {
  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, MismatchedFieldsError.prototype);
  }
}