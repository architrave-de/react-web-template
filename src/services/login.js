// import apiServiceClient from './api-service-client'

/**
 * Login post to API.
 * @param {string} email
 * @param {string} password
 */
export async function login(email, password) {
  // TODO: Call login API to get the session token
  // const response = await apiServiceClient.post('/api/token/', {
  //   username: email,
  //   password,
  // })

  // return { token: response.data.access }

  return {
    token: '123456789',
  }
}
