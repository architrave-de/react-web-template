import React, { Suspense } from 'react'

import { CssBaseline, MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'

import useTheme from './hooks/theme.hook'
import Routers from './routers'
import { useStoreState } from './store'
import Loader from './views/components/loader'

function App() {
  const { theme } = useTheme()

  const { token } = useStoreState(state => state.user)

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Loader />}>
          <Routers isAuthenticated={Boolean(token)} />
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App
