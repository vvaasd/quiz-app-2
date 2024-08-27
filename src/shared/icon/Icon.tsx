import { LogoIcon } from '../ui'
import { EIcons } from './icon.enum'
import { IIconProps } from './icon.props'

export const Icon = (props: IIconProps) => {
  const { name, className } = props

  switch (name) {
    case EIcons.logo:
      return <LogoIcon className={className} {...props} />
    default:
      return <></>
  }
}
