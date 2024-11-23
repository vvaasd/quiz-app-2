import { Button, Layout, Logo } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@/shared/ui';
import { IconsEnum } from '@/shared/types';
import { Header, Footer } from '@/widgets';



export const Main: React.FC = () => {
  const navigate = useNavigate();


  const handleExit = () => {
    navigate('/');
  };

  return (
    <Layout.Root className="items-stretch">
      <Layout.Container className="flex flex-col">
        <Header>
          <Logo to={'/'} className="h-[18px] w-[94px]" />
          <Button onClick={handleExit} paddingSquare bgType={'neutral'}>
            <Icon
              name={IconsEnum.logout}
              className="w-6 text-light-neutral-600 group-active:text-light-neutral-50"
            />
          </Button>
        </Header>
        <Layout.Main className='bg-light-neutral-50 p-4 grow flex flex-col rounded-b-lg'>
          <Footer />
        </Layout.Main>
      </Layout.Container>
    </Layout.Root>
  );
};
