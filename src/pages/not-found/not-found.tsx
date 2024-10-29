import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Paragraph, Title, Layout } from '@/shared/ui';
import { TEXT_STORE } from '@/shared/const';

export const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Title text='Ошибка 404' className='mb-3' />
      <Paragraph text={TEXT_STORE.errors.message404} className='mb-4' />
      <Button onClick={() => navigate('/')}>На главную</Button>
    </Layout>
  );
};
