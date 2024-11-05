import { FormEvent, useId, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  useAuth,
  AuthValidator,
  LOGIN_OPTIONS,
  PASSWORD_OPTIONS,
} from '@/features/auth';
import { Button, Input, Hint } from '@/shared/ui';

type FormProps = React.HTMLAttributes<HTMLFormElement>;

export const Form: React.FC<FormProps> = observer(() => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isValidationErrorsHighlighted, setIsValidationErrorsHighlighted] =
    useState(false);

  const { login, isPending, authError, resetAuthError } = useAuth(
    name,
    password,
  );

  const inputNameId = useId();
  const inputPasswordId = useId();

  const isDisabled = isPending || name.length === 0 || password.length === 0;

  const isLoginValid = AuthValidator.getIsLoginValid(name);
  const isPasswordValid = AuthValidator.getIsPasswordValid(password);

  const loginColorVariant = isValidationErrorsHighlighted
    ? isLoginValid
      ? 'success'
      : 'error'
    : 'default';

  const passwordColorVariant = isValidationErrorsHighlighted
    ? isPasswordValid
      ? 'success'
      : 'error'
    : 'default';

  const onInput = (): void => {
    resetAuthError();
  };

  const handleLoginInput = (value: string): void => {
    onInput();
    setName(value);
  };

  const handlePasswordInput = (value: string): void => {
    onInput();
    setPassword(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isFormValid = isLoginValid && isPasswordValid;
    if (isFormValid) {
      setIsValidationErrorsHighlighted(false);
      login();
    } else {
      setIsValidationErrorsHighlighted(true);
    }
  };

  return (
    <form
      className='w-full flex flex-col self-start gap-y-4 text-sm'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col gap-y-1.5'>
        <label className='relative' htmlFor={inputNameId}>
          Логин
          <div className='relative mt-1.5'>
            <Input
              autoComplete='name'
              type='name'
              id={inputNameId}
              placeholder={'Ваше имя'}
              value={name}
              onChange={(event) => handleLoginInput(event.target.value)}
              onClear={() => handleLoginInput('')}
              borderVariant={authError ? 'error' : loginColorVariant}
              disabled={isPending}
              required
            />
          </div>
        </label>
        {authError && (
          <Hint colorVariant='error'>{authError.loginMessage}</Hint>
        )}
        <Hint colorVariant={loginColorVariant}>
          Имя должно начинаться с заглавной буквы, содержать{' '}
          {LOGIN_OPTIONS.length.min}–{LOGIN_OPTIONS.length.max} символов, без
          пробелов
        </Hint>
      </div>
      <div className='flex flex-col gap-y-1.5'>
        <label htmlFor={inputPasswordId}>
          Пароль
          <div className='relative mt-1.5'>
            <Input
              autoComplete='off'
              type='password'
              id={inputPasswordId}
              placeholder={'Ваш пароль'}
              value={password}
              onChange={(e) => handlePasswordInput(e.target.value)}
              onClear={() => handlePasswordInput('')}
              borderVariant={authError ? 'error' : passwordColorVariant}
              disabled={isPending}
              required
            />
          </div>
        </label>
        {authError && (
          <Hint colorVariant='error'>{authError.passwordMessage}</Hint>
        )}
        <Hint colorVariant={passwordColorVariant}>
          Пароль должен содержать {PASSWORD_OPTIONS.length.min}–
          {PASSWORD_OPTIONS.length.max} символов,
          <br />
          без пробелов. Минимум 2 цифры и 3 заглавные буквы
        </Hint>
      </div>
      <Button disabled={isDisabled} isLoading={isPending} type='submit'>
        Начать
      </Button>
    </form>
  );
});
