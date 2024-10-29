import { Button, Layout, Logo } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@/shared/ui';
import { IconsEnum } from '@/shared/types';

export const ThemePick = () => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  return (
    <Layout.Root className="items-stretch">
      <Layout.Container className="px-8 py-7">
        <Layout.Header>
          <Logo to={'/'} className="h-[18px] w-[94px]" />
          <Button onClick={handleExit} paddingSquare bgType={'neutral'}>
            <Icon
              name={IconsEnum.logout}
              className="w-6 text-light-neutral-600 group-active:text-light-neutral-50"
            />
          </Button>
        </Layout.Header>
      </Layout.Container>
    </Layout.Root>
  );
};
