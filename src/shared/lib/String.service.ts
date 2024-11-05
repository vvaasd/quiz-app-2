export class StringService {
  static getCountByRegExp(str: string, regExp: RegExp): number {
    return (str.match(regExp) || []).length;
  }

  static getDigitsCount(str: string): number {
    const digitRegExp = /\d/g;
    return StringService.getCountByRegExp(str, digitRegExp);
  }

  static getCapitalsCount(str: string): number {
    const capitalLetterRegExp = /[A-ZА-ЯЁ]/g;
    return StringService.getCountByRegExp(str, capitalLetterRegExp);
  }
}
