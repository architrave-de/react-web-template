import { action } from 'easy-peasy'

const initialState = {
  email: null,
  token: null,
}

const UserStore = {
  ...initialState,
  resetStore: action(state => {
    return { ...state, ...initialState }
  }),
  setEmail: action((state, email) => {
    return { ...state, email }
  }),
  setToken: action((state, token) => {
    return { ...state, token }
  }),
  setUser: action((state, payload) => {
    return { ...state, ...payload }
  }),
}

export default UserStore
