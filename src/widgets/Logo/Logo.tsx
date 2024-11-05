import React, { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/shared/lib';
import { Icon } from '@/shared/ui/';
import { userStore } from '@/entities/user';

interface LogoProps extends HTMLAttributes<SVGSVGElement> {
  size?: 'mini' | 'default';
}

export const Logo: React.FC<LogoProps> = ({ size = 'default', ...props }) => {
  const { setUser } = userStore;

  return (
    <Link
      to='/'
      onClick={() => {
        setUser(null);
      }}
    >
      <Icon
        icon='logo'
        className={cn({
          ['w-[94px] h-[18px]']: size === 'mini',
        })}
        {...props}
      />
    </Link>
  );
};
