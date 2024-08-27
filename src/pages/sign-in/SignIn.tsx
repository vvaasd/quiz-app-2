import { Footer } from '../../shared'
import { Form, Logo } from '../../widgets'

export const SignIn: React.FC = () => {
  return (
    <div className={'w-[calc(375px-32px)]'}>
      <header className='mb-3'>
        <Logo />
      </header>
      <div className='flex flex-col gap-4 rounded-lg bg-light-neutral-50 p-4'>
        <main className='flex flex-col gap-4'>
          <h2
            className={
              'font-unbounded text-2xl leading-8 text-light-neutral-950'
            }
          >
            Добро пожаловать!
          </h2>
          <Form />
        </main>
        <Footer />
      </div>
    </div>
  )
}
