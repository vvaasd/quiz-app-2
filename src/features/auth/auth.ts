import { Api, AuthUserType } from '@/shared/lib';
import { NavigateFunction } from 'react-router-dom';
import { UserStore } from '@/entities/user/store';

export const auth = async (
  login: string,
  password: string,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setHasLoginError: React.Dispatch<React.SetStateAction<boolean>>,
  setHasPasswordError: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorApiMessage: React.Dispatch<React.SetStateAction<string>>,
  navigate: NavigateFunction,
) => {
  try {
    setIsLoading(true);
    const data: AuthUserType = await Api.fetchAuth(login, password);
    UserStore.setUser(data);
    navigate('/themes');
  } catch (error) {
    console.log(error);
    setHasLoginError(true);
    setHasPasswordError(true);
    if (error === 'Network response was not ok Unauthorized') {
      setErrorApiMessage('Пользователь с таким именем уже существует');
    } else {
      if (typeof error === 'string') setErrorApiMessage(error);
    }
  } finally {
    setIsLoading(false);
  }
};
