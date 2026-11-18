/**
 * Basic client-side validation helpers for the Login and Register forms.
 * Each validator returns an object of { fieldName: "error message" }.
 * An empty object means the form is valid.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const MIN_PASSWORD_LENGTH = 8;
export const MIN_NAME_LENGTH = 2;

export function validateEmail(email) {
  const value = email.trim();
  if (!value) return "Email is required.";
  if (!EMAIL_PATTERN.test(value)) return "Please enter a valid email address.";
  return "";
}

export function validatePassword(password) {
  if (!password) return "Password is required.";
  if (password.length < MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  }
  return "";
}

export function validateName(name) {
  const value = name.trim();
  if (!value) return "Name is required.";
  if (value.length < MIN_NAME_LENGTH) return `Name must be at least ${MIN_NAME_LENGTH} characters.`;
  return "";
}

export function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) return "Please confirm your password.";
  if (password !== confirmPassword) return "Passwords do not match.";
  return "";
}

function removeEmpty(errors) {
  return Object.fromEntries(Object.entries(errors).filter(([, message]) => message));
}

export function validateLogin({ email, password }) {
  return removeEmpty({
    email: validateEmail(email),
    // Login only checks that a password was entered; strength rules apply on Register.
    password: password ? "" : "Password is required.",
  });
}

export function validateRegister({ name, email, password, confirmPassword }) {
  return removeEmpty({
    name: validateName(name),
    email: validateEmail(email),
    password: validatePassword(password),
    confirmPassword: validateConfirmPassword(password, confirmPassword),
  });
}
