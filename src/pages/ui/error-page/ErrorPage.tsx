import { ErrorIdEnum } from '@/shared/types';
import { Layout, Button, Logo } from '@/shared/ui';
import { useNavigate } from 'react-router-dom';
import { ErrorDescription } from '@/entities/error-description/ui/ErrorDescription';
import { ErrorPageProps } from '@/pages/types';

type ErrorInfoType = {
  [key: number]: {
    message: string;
    button: {
      text: string;
      action: () => void;
    };
  };
};

export const ErrorPage: React.FC<ErrorPageProps> = ({ errorId }) => {
  const navigate = useNavigate();

  const errors: ErrorInfoType = {
    [ErrorIdEnum.NotFound]: {
      message: 'Такой страницы не существует или она была удалена.',
      button: {
        text: 'На главную',
        action: () => {
          navigate('/');
        },
      },
    },
    [ErrorIdEnum.ServerError]: {
      message:
        'При обработке запроса произошла ошибка на сервере или превышен лимит времени обработки.',
      button: {
        text: 'Обновить страницу',
        action: () => {
          navigate('/');
          location.reload();
        },
      },
    },
  };

  const error = errors[errorId];

  return (
    <Layout.Root>
      <Layout.Container>
        <Layout.Header className="mb-3">
          <div>
            <Logo to={'/'} />
          </div>
        </Layout.Header>
        <Layout.ContentWrapper>
          <Layout.Main className="flex flex-col gap-4">
            <ErrorDescription errorId={errorId} text={error.message} />
            <Button onClick={error.button.action}>{error.button.text}</Button>
          </Layout.Main>
          <Layout.Footer />
        </Layout.ContentWrapper>
      </Layout.Container>
    </Layout.Root>
  );
};
