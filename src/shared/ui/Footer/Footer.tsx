import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer>
      <p className='font-montserrat text-light-neutral-600 text-xs text-center'>
        {' '}
        Проект выполнен в рамках стажировки{' '}
        <a
          className='underline'
          target='_blank'
          href='https://preax.ru'
          rel='noopener noreferrer'
        >
          {' '}
          PREAX{' '}
        </a>
      </p>
    </footer>
  );
};
