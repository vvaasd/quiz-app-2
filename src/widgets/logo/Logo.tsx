import { Icon, EIcons, clsx } from '../../shared'

type LogoProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <a href='#'>
      <Icon name={EIcons.logo} className={clsx(className, 'h-7 w-[146px]')} />
    </a>
  )
}
