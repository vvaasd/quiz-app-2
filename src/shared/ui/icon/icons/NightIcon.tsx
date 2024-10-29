import { IIconProps } from './icon.props';

export function NightIcon({ ...props }: IIconProps) {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.01837 7.9499C2.25837 11.3832 5.1717 14.1766 8.65837 14.3299C11.1184 14.4366 13.3184 13.2899 14.6384 11.4832C15.185 10.7432 14.8917 10.2499 13.9784 10.4166C13.5317 10.4966 13.0717 10.5299 12.5917 10.5099C9.3317 10.3766 6.66504 7.6499 6.6517 4.4299C6.64504 3.56323 6.82504 2.74323 7.1517 1.99656C7.5117 1.1699 7.07837 0.776563 6.24504 1.1299C3.60504 2.24323 1.79837 4.90323 2.01837 7.9499Z"
        stroke="#727272"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
