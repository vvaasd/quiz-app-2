import { LOGIN_OPTIONS, PASSWORD_OPTIONS } from '@/features/auth';
import { StringService } from '@/shared/lib';

export class AuthValidator {
  static getIsLoginValid = (login: string): boolean => {
    if (
      !login ||
      !StringService.getCapitalsCount(login[0]) ||
      login.length < LOGIN_OPTIONS.length.min ||
      login.includes(' ') ||
      login.length > LOGIN_OPTIONS.length.max
    ) {
      return false;
    }

    return true;
  };

  static getIsPasswordValid = (password: string): boolean => {
    if (
      !password ||
      password.length < PASSWORD_OPTIONS.length.min ||
      password.includes(' ') ||
      StringService.getDigitsCount(password) < PASSWORD_OPTIONS.digits.min ||
      StringService.getCapitalsCount(password) <
        PASSWORD_OPTIONS.capitals.min ||
      password.length > PASSWORD_OPTIONS.length.max
    ) {
      return false;
    }

    return true;
  };
}
