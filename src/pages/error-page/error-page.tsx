import { FC, HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Paragraph, Title, Layout } from '@/shared/ui';

interface ServerErrorProps extends HTMLAttributes<HTMLDivElement> {
  path?: string;
  message?: string;
}

export const ErrorPage: FC<ServerErrorProps> = ({
  path = '/',
  message = 'Что-то пошло не так...',
  ...props
}) => {
  const nanigate = useNavigate();
  return (
    <Layout {...props}>
      <Title text='Ошибка' className='mb-3' />
      <Paragraph text={message} className='mb-4' />
      <Button
        onClick={() => {
          nanigate(path);
          window.location.href = path;
        }}
      >
        Обновить страницу
      </Button>
    </Layout>
  );
};
