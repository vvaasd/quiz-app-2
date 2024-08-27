import { Input, Button, clsx } from '../../shared'

type FormProps = React.FormHTMLAttributes<HTMLFormElement>

export const Form: React.FC<FormProps> = ({ action, className, id }) => {
  const idPrefix = id ? `${id}-` : ''

  return (
    <form
      action={action}
      id={id}
      className={clsx(className, 'flex flex-col gap-4')}
    >
      <Input
        placeholder='Ваше имя'
        label='Логин'
        id={`${idPrefix}input-login`}
      />
      <Input
        placeholder='Ваш пароль'
        type='password'
        label='Пароль'
        id={`${idPrefix}input-password`}
      />
      <Button type={'submit'}>Начать</Button>
    </form>
  )
}
