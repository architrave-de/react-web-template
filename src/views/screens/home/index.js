import React, { memo } from 'react'

import { Box, Typography } from '@material-ui/core'

import useHome from './home.hook'

function Home() {
  const { greeting } = useHome()

  return (
    <Box mt={10}>
      <Typography variant="h3">{greeting}</Typography>
    </Box>
  )
}

export default memo(Home)
