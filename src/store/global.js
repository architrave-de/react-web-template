import { action } from 'easy-peasy'

const initialState = {
  hasScreenError: false,
  isScreenLoading: false,
}

const GlobalStore = {
  ...initialState,
  resetStore: action(state => {
    return { ...state, ...initialState }
  }),
  setIsScreenLoading: action((state, isScreenLoading) => {
    return { ...state, isScreenLoading }
  }),
  setHasScreenError: action((state, hasScreenError) => {
    return { ...state, hasScreenError }
  }),
}

export default GlobalStore
