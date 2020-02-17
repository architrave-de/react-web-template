import useReactRouter from 'use-react-router'
import * as yup from 'yup'

import { Routes } from 'common/routes'
import ApiService from 'services'
import { useStoreActions } from 'store'

function useLogin() {
  const { history } = useReactRouter()

  // Store Actions
  const setUser = useStoreActions(actions => actions.user.setUser)
  const setIsScreenLoadingStore = useStoreActions(
    actions => actions.global.setIsScreenLoading,
  )

  // Form configuration
  const genericError = 'Error: Invalid login credentials.'
  const validationSchema = yup.object().shape({
    email: yup.string().required(genericError),
    // Uncomment to add email validation to field
    // .email('Error: Invalid email'),
    password: yup
      .string()
      .required(genericError)
      .min(8, 'Error: Invalid password length'),
  })

  const formConfig = {
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values, actions) => {
      try {
        // Show global loader
        setIsScreenLoadingStore(true)

        // Post login to API
        const { token } = await ApiService.login(values.email, values.password)
        setUser({
          email: values.email,
          token,
        })

        // Push to home screen
        history.push(Routes.private.home)
      } catch (error) {
        // Set error message in form inputs.
        actions.setErrors({
          email: genericError,
          password: genericError,
        })

        // Reset form submit state
        actions.setSubmitting(false)
      }

      // Hide global loader
      setIsScreenLoadingStore(false)
    },
  }

  return {
    formConfig,
  }
}

export default useLogin
