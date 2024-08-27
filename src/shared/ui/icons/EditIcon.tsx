import { IIconProps } from './icon.props'

export function EditIcon({ className, ...props }: IIconProps) {
  return (
    <svg
      className={className ?? ''}
      {...props}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.0839 1.55692C11.2605 1.38036 11.4701 1.2403 11.7008 1.14474C11.9315 1.04918 12.1788 1 12.4285 1C12.6782 1 12.9254 1.04918 13.1561 1.14474C13.3868 1.2403 13.5964 1.38036 13.773 1.55692C13.9496 1.73349 14.0896 1.94311 14.1852 2.1738C14.2807 2.4045 14.3299 2.65176 14.3299 2.90146C14.3299 3.15116 14.2807 3.39842 14.1852 3.62912C14.0896 3.85981 13.9496 4.06943 13.773 4.24599L4.69739 13.3216L0.99992 14.33L2.00832 10.6325L11.0839 1.55692Z'
        stroke='#727272'
        strokeWidth='1.3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}