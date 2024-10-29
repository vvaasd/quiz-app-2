import { SVGProps } from 'react';
import { LogoIcon, LogOutIcon, SpinnerWhiteIcon } from './Icons';


export type IconType = 'logout' | 'logo' | 'spinner'

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconType;
}

export function Icon({ icon, ...props }: IconProps) {
  const config = {
    ['logout']: <LogOutIcon {...props} />,
    ['logo']: <LogoIcon {...props} />,
    ['spinner']: <SpinnerWhiteIcon {...props} />

  }
  return config[icon]
}