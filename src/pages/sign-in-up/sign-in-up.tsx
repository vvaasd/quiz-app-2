import React from 'react';
import { Form } from '@/widgets';
import { Title, Layout } from '@/shared/ui';

export const SignInUp: React.FC = () => {
  return (
    <Layout>
      <Title text='Добро пожаловать!' className='mb-4' />
      <Form />
    </Layout>
  );
};
