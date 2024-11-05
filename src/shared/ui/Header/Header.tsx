import React from 'react';
import { Logo } from '@/widgets';

export const Header: React.FC = () => {
  return (
    <header className='flex self-start mb-3'>
      <Logo />
    </header>
  );
};
