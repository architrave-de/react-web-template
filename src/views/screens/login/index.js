import React, { memo } from 'react'

import { Box, Button, Typography } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { TextField } from 'formik-material-ui'
import { makeStyles } from '@material-ui/core/styles'

import AuthLayout from 'views/layouts/auth'

import useLogin from './login.hook'

const useStyles = makeStyles(theme => ({
  buttonSubmit: {
    justifyContent: 'space-between',
    width: '100%',
  },
}))

function Login() {
  const classes = useStyles()
  const { formConfig } = useLogin()

  return (
    <AuthLayout>
      <Box>
        <Box>
          <Typography className={classes.title} variant="h1">
            Login
          </Typography>
        </Box>

        <Box mt={6}>
          <Typography className={classes.subtitle} variant="subtitle1">
            Login to your account using your email and password down below.
          </Typography>
        </Box>

        <Box mt={8} pb={8}>
          <Formik {...formConfig}>
            {({ isSubmitting }) => (
              <Form>
                <Box>
                  <Field
                    component={TextField}
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                  />
                </Box>

                <Box mt={4}>
                  <Field
                    component={TextField}
                    fullWidth
                    label="Password"
                    name="password"
                    type={'password'}
                    variant="outlined"
                  />
                </Box>

                <Box mt={8}>
                  <Button
                    className={classes.buttonSubmit}
                    color="primary"
                    disabled={isSubmitting}
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </AuthLayout>
  )
}

export default memo(Login)
