import { SVGProps } from 'react'
import { EIcons } from './icon.enum'

export interface IIconProps extends SVGProps<SVGSVGElement> {
  name: EIcons
}
