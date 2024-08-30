export function isEmail(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}
export function optionalInput(value) {
  return true;
}

export function isPasswordValid(value) {
  return value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);
}

// const isEmailInvalid = isEdited.email && (!enteredValue.email || !enteredValue.email.includes('@'))
// const isPasswordInvalid = isEdited.password && !enteredValue.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}
