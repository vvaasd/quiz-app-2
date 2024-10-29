import { Api, AuthUserType } from '@/shared/lib';
import { Button, Input } from '@/shared/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserStore } from '@/entities/store';

export const Form = () => {
  const navigate = useNavigate();
  const [inputLoginValue, setInputLoginValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (login: string, password: string) => {
    try {
      setIsLoading(true);
      const data: AuthUserType = await Api.fetchAuth(login, password);
      if (data) {
        UserStore.setUser(data);
        navigate('/themes');
      } else {
        navigate('/server-error');
      }
    } catch (error) {
      console.log(error);
      navigate('/server-error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = () => {
    login(inputLoginValue, inputPasswordValue);
  };

  return (
    <form className="grid grid-cols-1 gap-4">
      <h1 className="font-unbounded text-2xl font-normal">Добро пожаловать!</h1>
      <Input
        id="login"
        placeholder="Ваше имя"
        label="Логин"
        onChange={(event) => {
          setInputLoginValue(event.target.value);
        }}
      />
      <Input
        id="password"
        type="password"
        placeholder="Ваш пароль"
        label="Пароль"
        onChange={(event) => {
          setInputPasswordValue(event.target.value);
        }}
      />
      <Button
        fullWidth
        onClick={(event) => {
          event.preventDefault();
          handleFormSubmit();
        }}
        isLoading={isLoading}
      >
        Начать
      </Button>
    </form>
  );
};
