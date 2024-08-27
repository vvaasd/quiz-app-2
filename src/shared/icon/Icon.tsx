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
  StarFilledIcon
} from '../ui'
import { EIcons } from './icon.enum'
import { IIconProps } from './icon.props'

export const Icon = (props: IIconProps) => {
  const { name, className } = props

  switch (name) {
    case EIcons.logo:
      return <LogoIcon className={className} {...props} />
    case EIcons.visibilityOn:
      return <VisibilityOnIcon className={className} {...props} />
    case EIcons.visibilityOff:
      return <VisibilityOffIcon className={className} {...props} />
    case EIcons.edit:
      return <EditIcon className={className} {...props} />
    case EIcons.info:
      return <InfoIcon className={className} {...props} />
    case EIcons.cross:
      return <CrossIcon className={className} {...props} />
    case EIcons.user:
      return <UserIcon className={className} {...props} />
    case EIcons.logout:
      return <LogoutIcon className={className} {...props} />
    case EIcons.day:
      return <DayIcon className={className} {...props} />
    case EIcons.night:
      return <NightIcon className={className} {...props} />
    case EIcons.loading:
      return <LoadingIcon className={className} {...props} />
    case EIcons.burger:
      return <BurgerIcon className={className} {...props} />
    case EIcons.starOutlined:
      return <StarOutlinedIcon className={className} {...props} />
    case EIcons.starFilled:
      return <StarFilledIcon className={className} {...props} />

    default:
      return <></>
  }
}
