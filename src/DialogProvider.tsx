import * as React from 'react'
import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  PropTypes,
  Theme
} from '@material-ui/core'
import { DEFAULT_DIALOG_OPTIONS, IDialogOptions } from './IDialogOptions'
import { DialogContext } from './IDialogContext'
import { IAlertOptions } from './IAlertOptions'
import { createStyles, makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minWidth: 400,
      minHeight: 150,
      paddingTop: theme.spacing(3)
    },
    title: (props: IDialogOptions) => (
      {
        backgroundColor: getRGB(props.okColor),
        color: '#FFF'
      }
    )
  })
)

const getRGB = (color?: PropTypes.Color) => {
  switch (color) {
    case 'primary':
      return '#3f50b5'
    case 'secondary':
      return '#f44336'
    default:
      return '#000'
  }
}

export const DialogProvider: React.FunctionComponent = ({ children }) => {

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState(DEFAULT_DIALOG_OPTIONS)
  const {
    className,
    title,
    message,
    element,
    okColor,
    cancelColor,
    hideOk,
    hideCancel,
    oKText,
    cancelText,
    onOk,
    onCancel
  } = options

  const html = {
    __html: message || ''
  }

  const classes = useStyles(options)

  const confirmHandler = (options: IDialogOptions) => {
    setOptions(options)
    setOpen(true)
  }

  const alertHandler = (options: IAlertOptions) => {
    setOptions({
      ...options,
      okColor: options.color,
      hideCancel: true
    })
    setOpen(true)
  }

  const okHandler = () => {
    setOpen(false)
    if (onOk) {
      onOk()
    }
  }

  const closeHandler = () => {
    setOpen(false)
    if (onCancel) {
      onCancel()
    }
  }

  return (
    <React.Fragment>
      <DialogContext.Provider value={{
        openConfirm: confirmHandler,
        openAlert: alertHandler,
        close: closeHandler
      }}>
        {children}

        <Dialog
          open={open}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          {
            title &&
            <DialogTitle id="dialog-title" className={classes.title}>{title}</DialogTitle>
          }
          <DialogContent className={`${classes.content} ${className}`}>
            <DialogContentText id="confirm-dialog-description">
              {
                message &&
                <span dangerouslySetInnerHTML={html}/>
              }
              {element}
            </DialogContentText>
          </DialogContent>
          <Divider/>
          <DialogActions>
            {
              !hideOk &&
              <Button
                color={okColor || 'primary'}
                onClick={okHandler}
              >
                {oKText || '确定'}
              </Button>
            }
            {
              !hideCancel &&
              <Button
                color={cancelColor || 'default'}
                onClick={closeHandler}
              >
                {cancelText || '取消'}
              </Button>
            }
          </DialogActions>
        </Dialog>
      </DialogContext.Provider>
    </React.Fragment>
  )
}
