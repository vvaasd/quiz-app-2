type LengthOptions = {
  min: number;
  max: number;
};

type LoginOptions = {
  length: LengthOptions;
};

type PasswordOptions = {
  length: LengthOptions;
  digits: { min: number };
  capitals: { min: number };
};

export const LOGIN_OPTIONS: LoginOptions = {
  length: { min: 2, max: 30 },
};

export const PASSWORD_OPTIONS: PasswordOptions = {
  length: { min: 8, max: 30 },
  digits: { min: 2 },
  capitals: { min: 3 },
};
