import React, { lazy, memo } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Routes } from 'common/routes'

const Home = lazy(() => import('views/screens/home'))
const NotFound = lazy(() => import('views/screens/not-found'))

const PrivateRouters = () => {
  const {
    private: { home },
  } = Routes

  return (
    <React.Fragment>
      <Switch>
        <Route exact path={home} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  )
}

export default memo(PrivateRouters)
