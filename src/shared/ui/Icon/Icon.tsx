import { SVGProps } from 'react';
import {
  LogoIcon,
  LogOutIcon,
  SpinnerWhiteIcon,
  DangerIcon,
  CheckIcon,
  EyeIcon,
  XmarkIcon,
  EyeslashIcon,
} from './Icons';

export type IconType =
  | 'logout'
  | 'logo'
  | 'spinner'
  | 'danger'
  | 'check'
  | 'xmark'
  | 'eye'
  | 'eyeslash';

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconType;
}

export function Icon({ icon, ...props }: IconProps) {
  const config = {
    ['logout']: <LogOutIcon {...props} />,
    ['logo']: <LogoIcon {...props} />,
    ['spinner']: <SpinnerWhiteIcon {...props} />,
    ['danger']: <DangerIcon {...props} />,
    ['check']: <CheckIcon {...props} />,
    ['xmark']: <XmarkIcon {...props} />,
    ['eye']: <EyeIcon {...props} />,
    ['eyeslash']: <EyeslashIcon {...props} />,
  };
  return config[icon];
}
