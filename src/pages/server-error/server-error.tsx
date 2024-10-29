import { FC, HTMLAttributes } from 'react';
import { Button, Paragraph, Title, Layout } from '@/shared/ui';
import { TEXT_STORE } from '@/shared/const';
import { useNavigate } from 'react-router-dom';

interface ServerErrorProps extends HTMLAttributes<HTMLDivElement> {
  path?: string;
}

export const ServerError: FC = ({ path = '/', ...props }: ServerErrorProps) => {
  const nanigate = useNavigate();

  return (
    <Layout {...props}>
      <Title text={'Ошибка 500'} className='mb-3' />
      <Paragraph text={TEXT_STORE.errors.message500} className='mb-4' />
      <Button
        onClick={() => {
          nanigate(path);
        }}
      >
        Обновить страницу
      </Button>
    </Layout>
  );
};
