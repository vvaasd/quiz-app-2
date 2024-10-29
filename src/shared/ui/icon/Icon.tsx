import {
  LogoIcon,
  VisibilityOnIcon,
  VisibilityOffIcon,
  EditIcon,
  InfoIcon,
  CrossIcon,
  UserIcon,
  LogoutIcon,
  DayIcon,
  NightIcon,
  LoadingIcon,
  BurgerIcon,
  StarOutlinedIcon,
  StarFilledIcon,
} from './icons';
import { IconsEnum } from '@/shared/types';
import { IIconProps } from './icon.props';

export const Icon: React.FC<IIconProps> = (props: IIconProps) => {
  const { name, className } = props;

  switch (name) {
    case IconsEnum.logo:
      return <LogoIcon className={className} {...props} />;
    case IconsEnum.visibilityOn:
      return <VisibilityOnIcon className={className} {...props} />;
    case IconsEnum.visibilityOff:
      return <VisibilityOffIcon className={className} {...props} />;
    case IconsEnum.edit:
      return <EditIcon className={className} {...props} />;
    case IconsEnum.info:
      return <InfoIcon className={className} {...props} />;
    case IconsEnum.cross:
      return <CrossIcon className={className} {...props} />;
    case IconsEnum.user:
      return <UserIcon className={className} {...props} />;
    case IconsEnum.logout:
      return <LogoutIcon className={className} {...props} />;
    case IconsEnum.day:
      return <DayIcon className={className} {...props} />;
    case IconsEnum.night:
      return <NightIcon className={className} {...props} />;
    case IconsEnum.loading:
      return <LoadingIcon className={className} {...props} />;
    case IconsEnum.burger:
      return <BurgerIcon className={className} {...props} />;
    case IconsEnum.starOutlined:
      return <StarOutlinedIcon className={className} {...props} />;
    case IconsEnum.starFilled:
      return <StarFilledIcon className={className} {...props} />;

    default:
      return <></>;
  }
};
