import { useNavigate } from 'react-router-dom';
import { userStore } from '@/entities/user';

import { useState } from 'react';
import { getUserData } from '@/features/auth';
import { AuthError, AUTH_ERRORS } from '@/features/auth/const';

/**
 * @param name - name of user
 * @param password - password of user
 * @returns login - function that must be used by onSubmit props
 * @returns isPending - API response loading state
 * @returns authError - response error state
 * @returns resetAuthError
 */
export const useAuth = (name: string, password: string) => {
  const { setUser } = userStore;
  const [isPending, setIsPending] = useState(false);
  const [authError, setAuthError] = useState<null | AuthError>(null);

  const resetAuthError = () => {
    setAuthError(null);
  };

  const navigate = useNavigate();

  const login = async () => {
    try {
      resetAuthError();
      setIsPending(true);
      const userData = await getUserData(name, password);
      if (userData.statusCode === 401) {
        setAuthError(AUTH_ERRORS[userData.message]);
      }

      if (userData.statusCode === 500) {
        setUser(null);
        navigate('/server-error');
        throw new Error('Server error');
      }

      if (userData.name || userData.user?.name) {
        setUser(userData.user ? userData.user : userData);
        navigate('/themes');
      }
    } catch (error) {
      console.log(error);
      navigate('/server-error');
    } finally {
      setIsPending(false);
    }
  };

  return { login, isPending, authError, resetAuthError };
};
