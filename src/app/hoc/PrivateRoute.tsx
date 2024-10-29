import React, { FC, ReactNode } from "react"
import userStore from "../../entities/user/model/userStore"
import { Navigate, useLocation } from "react-router-dom"


interface PrivateRouteProps {
  children: ReactNode
}

export const PrivateRoute: FC<PrivateRouteProps> = (props) => {
  const location = useLocation()
  const { user } = userStore
  const isAuth = !!user

  if (!isAuth) {
    return <Navigate to={'/'} state={{ from: location.pathname }} />
  }

  return props.children
}