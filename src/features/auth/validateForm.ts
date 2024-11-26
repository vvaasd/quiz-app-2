import { Dispatch, SetStateAction } from 'react';

export const validateForm = (
  setHasLoginError: Dispatch<SetStateAction<boolean>>,
  setHasPasswordError: Dispatch<SetStateAction<boolean>>,
  setErrorApiMessage: Dispatch<SetStateAction<string>>,
  inputLoginValue: string,
  inputPasswordValue: string,
): boolean => {
  const resetErrors = () => {
    setHasLoginError(false);
    setHasPasswordError(false);
    setErrorApiMessage('');
  };

  resetErrors();

  const validateLogin = (login: string): boolean => {
    const isValidLogin = /^[A-ZА-Я][a-zA-Zа-яёЁ0-9]{1,29}$/.test(login);
    setHasLoginError(!isValidLogin);
    return isValidLogin;
  };

  const validatePassword = (password: string): boolean => {
    const isValidPassword =
      /^(?=(.*[A-ZА-ЯЁ].*[A-ZА-ЯЁ].*[A-ZА-ЯЁ]))(?=(.*\d.*\d)).{8,30}$/.test(
        password,
      );
    setHasPasswordError(!isValidPassword);
    return isValidPassword;
  };

  const isValidLogin = validateLogin(inputLoginValue);
  const isValidPassword = validatePassword(inputPasswordValue);

  return isValidLogin && isValidPassword;
};
