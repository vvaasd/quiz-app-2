import { HTMLAttributes } from 'react'

export const Layout = ({
  children,
  className
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`${className} flex h-full min-h-screen w-full min-w-[375px] flex-col items-center justify-center bg-lime-400 bg-[url(/bg-image.jpg)] bg-cover bg-fixed bg-no-repeat p-4`}
    >
      {children}
    </div>
  )
}
