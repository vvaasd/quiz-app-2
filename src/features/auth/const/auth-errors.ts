export type AuthError = {
  loginMessage: string;
  passwordMessage: string;
};

export const AUTH_ERRORS: { [key: string]: AuthError } = {
  'Неверный пароль': {
    loginMessage: 'Пользователь с таким именем уже существует',
    passwordMessage:
      'Неверный пароль. Проверьте правильность ввода или создайте новый аккаунт',
  },
};
