import React, { useId, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useAuth } from '@/features/auth';
import { Button, Input, Loader } from '@/shared/ui';

type FormProps = React.HTMLAttributes<HTMLFormElement>;

export const Form: React.FC<FormProps> = observer(() => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { login, isPending } = useAuth(name, password);

  const inputNameId = useId();
  const inputPasswordId = useId();

  const isDisabled = isPending || name.length === 0 || password.length === 0;

  return (
    <form
      className='w-full flex flex-col self-start gap-y-4 text-sm'
      onSubmit={login}
    >
      <div className='flex flex-col gap-y-1.5'>
        <label className='w-fit' htmlFor={inputNameId}>
          Логин
        </label>
        <Input
          autoComplete='name'
          type='name'
          id={inputNameId}
          placeholder={'Ваше имя'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-y-1.5'>
        <label className='w-fit' htmlFor={inputPasswordId}>
          Пароль
        </label>
        <Input
          autoComplete='off'
          type='password'
          id={inputPasswordId}
          placeholder={'Ваш пароль'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button disabled={isDisabled} type='submit'>
        {isPending ? <Loader /> : 'Начать'}
      </Button>
    </form>
  );
});
