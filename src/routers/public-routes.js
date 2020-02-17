import React, { lazy, memo } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import useReactRouter from 'use-react-router'

import { Routes } from 'common/routes'

const Login = lazy(() => import('views/screens/login'))
const NotFound = lazy(() => import('views/screens/not-found'))

const PublicRoutes = () => {
  const { location } = useReactRouter()
  const {
    public: { login },
  } = Routes
  const privateRoutes = Object.values(Routes.private)

  return (
    <Switch>
      <Route exact path={login} component={Login} />

      {/* If the path contains a private route when is unauthenticated, redirect to login */}
      {privateRoutes.includes(location.pathname) ? (
        <Redirect to={login} />
      ) : (
        <Route component={NotFound} />
      )}
    </Switch>
  )
}

export default memo(PublicRoutes)
