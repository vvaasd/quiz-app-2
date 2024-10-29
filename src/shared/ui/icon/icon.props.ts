import { SVGProps } from 'react';
import { IconsEnum } from '@/shared/types';

export interface IIconProps extends SVGProps<SVGSVGElement> {
  name: IconsEnum;
  className?: string;
}
