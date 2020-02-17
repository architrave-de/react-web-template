import { createStore, createTypedHooks } from 'easy-peasy'
import { persistReducer, persistStore } from 'redux-persist'
import createEncryptor from 'redux-persist-transform-encrypt'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'

import GlobalStore from './global'
import UserStore from './user'

const isProduction = process.env.ENVIRONMENT === 'production'
const encryptor = createEncryptor({
  secretKey: process.env.REACT_APP_STORE_KEY || '',
})
const { useStoreActions, useStoreState } = createTypedHooks()

/**
 * Store model.
 */
const model = {
  global: GlobalStore,
  user: UserStore,
}

/**
 * Global store.
 */
const store = createStore(model, {
  disableImmer: true,
  reducerEnhancer: reducer =>
    persistReducer(
      {
        key: `${process.env.REACT_APP_STORE_NAME}`,
        storage,
        // Encrypt the storage only in production for debugging purposes
        ...(isProduction && {
          stateReconciler: autoMergeLevel2,
          transforms: [encryptor],
        }),
      },
      reducer,
    ),
})

/**
 * Persistor instance that persist the store into the local storage.
 */
const persistor = persistStore(store)

/**
 * Returns all stores to its initial state.
 */
export function resetStores() {
  Object.values(store.dispatch).forEach(
    storeAction => storeAction.resetStore && storeAction.resetStore(),
  )
}

export { persistor, useStoreActions, useStoreState }

export default store
