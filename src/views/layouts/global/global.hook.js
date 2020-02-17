import { useCallback } from 'react'

import { useStoreActions, useStoreState } from 'store'

function useGlobal() {
  const { hasScreenError, isScreenLoading } = useStoreState(
    state => state.global,
  )

  const setHasScreenErrorStore = useStoreActions(
    actions => actions.global.setHasScreenError,
  )

  const handleConfirm = useCallback(() => {
    setHasScreenErrorStore(false)
  }, []) // eslint-disable-line

  return { handleConfirm, hasScreenError, isScreenLoading }
}

export default useGlobal
