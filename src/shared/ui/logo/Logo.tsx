import { cn } from '@/shared/lib';
import { IconsEnum } from '@/shared/types';
import { Link, LinkProps } from 'react-router-dom';
import { Icon } from '@/shared/ui';

export const Logo: React.FC<LinkProps> = ({ className, to = '/' }) => {
  return (
    <Link to={to} className={cn('block h-7', className)}>
      <Icon name={IconsEnum.logo} className="fill-light-neutral-950" />
    </Link>
  );
};
