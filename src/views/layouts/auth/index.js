import React, { memo } from 'react'

import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Colors } from 'common/colors'
import GlobalLayout from 'views/layouts/global'

const useStyles = makeStyles(theme => ({
  container: {
    background: `${Colors.white}`,
    minHeight: '100vh',
  },
  imageContainer: {
    background: `${Colors.regalBlue}`,
    [theme.breakpoints.up('sm')]: {
      height: '100vh',
    },
  },
  rightContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: '70%',

    [theme.breakpoints.between('sm', 'md')]: {
      marginLeft: '20%',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
      paddingTop: '15%',
      width: '85%',
    },
  },
}))

function AuthLayout({ children }) {
  const classes = useStyles()

  return (
    <GlobalLayout>
      <Box flexGrow={1}>
        <Grid container justify="center" className={classes.container}>
          <Grid
            item
            xs={false}
            sm={6}
            md={8}
            className={classes.imageContainer}
          />

          <Grid item xs={12} sm={6} md={4}>
            <Box className={classes.rightContainer} height="100%">
              {children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </GlobalLayout>
  )
}

export default memo(AuthLayout)
