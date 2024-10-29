import { useNavigate } from 'react-router-dom';
import { userStore } from '@/entities/user';

import { FormEvent, useState } from 'react';
import { getUserData } from '../api';

/**
 * This hook recieve name and password as arguments and return function that must be used by onSubmit props in authorization form
 * @param name - name of user
 * @param password - password of user
 * @returns function that must be used by onSubmit props
 */
export const useAuth = (name: string, password: string) => {
  const [isPending, setIsPending] = useState(false)
  const { setUser } = userStore;

  const navigate = useNavigate();

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsPending(true)
      const userData = await getUserData(name, password);
      if (userData.statusCode === 401) {
        console.log(userData.message);
      }

      if (userData.statusCode === 500) {
        console.log(userData.message);
        setUser(null);
        navigate('/server-error');
        throw new Error('Server error');
      }
      if (userData.name || userData.user?.name) {
        setUser(userData.user ? userData.user : userData);
        navigate('/themes');
      }
    } catch (e) {
      console.log(e);
      throw e
    } finally {
      setIsPending(false)
    }
  };

  return { login, isPending };
};
