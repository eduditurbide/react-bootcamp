import { SaveOutlined } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'

export const DeleteButton = ({
  title = '',
  text = '',
  onAgreeClickEvent = null
}) => {

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        // variant="contained"
        color="error"
        sx={{ padding: 1, width: { xs: '100%', sm: 'auto' } }}
        onClick={handleClickOpen}
      >
        <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
        Eliminar
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={e => { handleClose(); onAgreeClickEvent(e); }} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
