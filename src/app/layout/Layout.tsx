import { HTMLAttributes } from 'react'

export const Layout = ({
  children,
  className
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`${className} w-full h-full min-h-screen min-w-[375px] flex justify-center items-center p-8 bg-fixed flex-col bg-[url(/bg-image.jpg)] bg-no-repeat bg-cover bg-lime-400`}
    >
      {children}
    </div>
  )
}
