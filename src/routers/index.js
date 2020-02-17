import React, { lazy, memo } from 'react'

const PublicRoutes = lazy(() => import('./public-routes'))
const PrivateRoutes = lazy(() => import('./private-routes'))

function Routers(props) {
  return (
    <React.Fragment>
      {props.isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </React.Fragment>
  )
}

export default memo(Routers)
