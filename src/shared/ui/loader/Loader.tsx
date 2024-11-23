import { Icon } from '@/shared/ui';
import { DivProps, IconsEnum } from '@/shared/types';

export const Loader: React.FC<DivProps> = ({ ...props }) => {
  return (
    <div {...props}>
      <Icon name={IconsEnum.loading} className="animate-spin" />
    </div>
  );
};
