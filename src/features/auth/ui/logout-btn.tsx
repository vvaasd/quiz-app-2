import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { userStore } from '@/entities/user';
import { Icon } from '@/shared/ui';

import styles from './styles.module.css';

export const LogoutButton: FC = () => {
  const { setUser } = userStore;
  const navigate = useNavigate();

  const onClick = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <button
      className='w-10 h-10 flex items-center justify-center bg-light-neutral-200 rounded-lg active:bg-primary-400 focus-visible:outline-none transition-colors'
      onClick={onClick}
    >
      <Icon icon='logout' className={styles.icon} />
    </button>
  );
};
