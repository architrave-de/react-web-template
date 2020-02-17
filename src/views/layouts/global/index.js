import React, { memo } from 'react'

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core'

import Loader from 'views/components/loader'
import useGlobal from './global.hook'

function GlobalLayout({ children }) {
  const { handleConfirm, hasScreenError, isScreenLoading } = useGlobal()

  return (
    <Box width="100vw">
      {children}

      {hasScreenError && (
        <Dialog
          open={hasScreenError}
          disableBackdropClick
          aria-labelledby="Error"
          aria-describedby="An unexpected error has occurred. Please try again."
        >
          <DialogContent>
            <DialogContentText
              color="textPrimary"
              style={{ marginTop: '16px' }}
            >
              An unexpected error has occurred. Please try again.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleConfirm} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      )}

      {isScreenLoading && (
        <Box
          position="fixed"
          width="100vw"
          height="100vh"
          zIndex={100}
          bgcolor="background.paper"
          top={0}
          left={0}
        >
          <Loader />
        </Box>
      )}
    </Box>
  )
}

export default memo(GlobalLayout)
