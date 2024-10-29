import React, { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/shared/lib';
import { Icon } from '../Icon/Icon';

interface LogoProps extends HTMLAttributes<SVGSVGElement> {
  size?: 'mini' | 'default';
}

export const Logo: React.FC<LogoProps> = ({ size = 'default', ...props }) => {
  return (
    <Link to='/' className='outline-none'>
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
