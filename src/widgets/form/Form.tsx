import { cn } from '@/shared/lib';
import { Button, Icon, Input, InputFeedback } from '@/shared/ui';
import { validateForm, auth } from '@/features/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconsEnum } from '@/shared/types';

export const Form = () => {
  const navigate = useNavigate();
  const [inputLoginValue, setInputLoginValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasLoginError, setHasLoginError] = useState<boolean>(false);
  const [hasPasswordError, setHasPasswordError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorApiMessage, setErrorApiMessage] = useState<string>('');

  const onResetLogin = () => {
    setInputLoginValue('');
  };

  const onResetPassword = () => {
    setInputPasswordValue('');
  };

  const handleFormSubmit = () => {
    const notHasError = validateForm(
      setHasLoginError,
      setHasPasswordError,
      setErrorApiMessage,
      inputLoginValue,
      inputPasswordValue,
    );

    if (notHasError) {
      auth(
        inputLoginValue,
        inputPasswordValue,
        setIsLoading,
        setHasLoginError,
        setHasPasswordError,
        setErrorApiMessage,
        navigate,
      );
    }
  };

  return (
    <form className="grid grid-cols-1 gap-4">
      <h1 className="font-unbounded text-2xl font-normal">Добро пожаловать!</h1>
      <div className="relative flex flex-col gap-1.5">
        <Input
          id="login"
          placeholder="Ваше имя"
          label="Логин"
          value={inputLoginValue}
          disabled={isLoading}
          className={cn(
            { ['border-light-neutral-300']: !hasLoginError },
            { ['border-danger-200']: hasLoginError },
            { ['border-success-200']: !hasLoginError && hasPasswordError },
            'pr-8',
          )}
          onChange={(event) => {
            setInputLoginValue(event.target.value);
          }}
        />
        {inputLoginValue && (
          <div className="flex absolute top-[40px] right-[12px]">
            <button
              type="button"
              disabled={isLoading}
              onClick={(e) => {
                e.preventDefault();
                onResetLogin();
              }}
            >
              <Icon name={IconsEnum.cross} />
            </button>
          </div>
        )}
        <InputFeedback
          error={hasLoginError}
          errorMessage={
            errorApiMessage
              ? errorApiMessage
              : 'Неверный логин. Проверьте правильность ввода или создайте новый аккаунт'
          }
        />
        <InputFeedback
          success={!hasLoginError && hasPasswordError}
          successMessage="Валидация пройдена"
        />
        <p className="text-light-neutral-600 text-xs">
          Имя должно начинаться с заглавной буквы, содержать 2–30 символов, без
          пробелов
        </p>
      </div>
      <div className="relative flex flex-col gap-1.5">
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Ваш пароль"
          label="Пароль"
          value={inputPasswordValue}
          disabled={isLoading}
          className={cn(
            {
              ['border-light-neutral-300']: !hasLoginError && !hasPasswordError,
            },
            { ['border-danger-200']: hasPasswordError },
            { ['border-success-200']: !hasPasswordError && hasLoginError },
            'pr-12',
          )}
          onChange={(event) => {
            setInputPasswordValue(event.target.value);
          }}
        />
        {inputPasswordValue && (
          <div className="flex absolute top-[40px] right-[12px]">
            <button
              type="button"
              disabled={isLoading}
              onClick={(e) => {
                e.preventDefault();
                onResetPassword();
              }}
            >
              <Icon name={IconsEnum.cross} />
            </button>
            <button
              type="button"
              disabled={isLoading}
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((prevState) => !prevState);
              }}
            >
              {showPassword ? (
                <Icon name={IconsEnum.visibilityOff} />
              ) : (
                <Icon name={IconsEnum.visibilityOn} />
              )}
            </button>
          </div>
        )}
        <InputFeedback
          error={hasPasswordError}
          errorMessage="Неверный пароль. Проверьте правильность ввода или создайте новый аккаунт"
        />
        <InputFeedback
          success={!hasPasswordError && hasLoginError}
          successMessage="Валидация пройдена"
        />
        <p className="text-light-neutral-600 text-xs">
          Пароль должен содержать 8–30 символов, без пробелов. Минимум 2 цифры и
          3 заглавные буквы
        </p>
      </div>
      <Button
        fullWidth
        onClick={(event) => {
          event.preventDefault();
          handleFormSubmit();
        }}
        isLoading={isLoading}
        className={
          inputLoginValue === '' || inputPasswordValue === ''
            ? 'text-light-neutral-400'
            : undefined
        }
        bgType={
          inputLoginValue === '' || inputPasswordValue === ''
            ? 'neutral'
            : 'primary'
        }
        disabled={inputLoginValue === '' || inputPasswordValue === ''}
      >
        Начать
      </Button>
    </form>
  );
};
