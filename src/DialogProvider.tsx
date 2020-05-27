import * as React from 'react'
import { useState } from 'react'
import {
  Box,
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
import { IMessageOptions } from './IMessageOptions'

const DEFAULT_OK_COLOR = 'primary'
const DEFAULT_CANCEL_COLOR = 'default'
const DEFAULT_OK_TEXT = '确定'
const DEFAULT_CANCEL_TEXT = '取消'
const DEFAULT_FULL_SCREEN = false
const DEFAULT_FULL_WIDTH = true
const DEFAULT_MAX_WIDTH = 'xs'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      minHeight: 150
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
    okText,
    cancelText,
    onOk,
    onCancel,
    fullScreen,
    fullWidth,
    maxWidth
  } = options

  const html = {
    __html: message || ''
  }

  const classes = useStyles(options)
  const showActions = !(hideOk && hideCancel)

  const confirmHandler = (options: IDialogOptions) => {
    setOptions(options)
    setOpen(true)
  }

  const alertHandler = (options: IAlertOptions) => {
    setOptions({
      ...options,
      okColor: options.color,
      hideOk: true,
      hideCancel: true
    })
    setOpen(true)
  }

  const messageHandler = (options: IMessageOptions) => {
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
        openMessage: messageHandler,
        close: closeHandler
      }}>
        {children}

        <Dialog
          fullWidth={fullWidth || DEFAULT_FULL_WIDTH}
          fullScreen={fullScreen || DEFAULT_FULL_SCREEN}
          maxWidth={maxWidth || DEFAULT_MAX_WIDTH}
          open={open}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          {
            title &&
            <DialogTitle
              id="dialog-title"
              className={classes.title}
            >
              {title}
            </DialogTitle>
          }
          {
            message &&
            <DialogContent className={`${classes.content} ${className}`}>
              <DialogContentText id="confirm-dialog-description">
                <span dangerouslySetInnerHTML={html}/>
              </DialogContentText>
            </DialogContent>
          }
          {
            element &&
            <Box className={`${classes.content} ${className}`}>
              {element}
            </Box>
          }
          <Divider/>
          {
            showActions &&
            <DialogActions>
              {
                !hideOk &&
                <Button
                  color={okColor || DEFAULT_OK_COLOR}
                  onClick={okHandler}
                >
                  {okText || DEFAULT_OK_TEXT}
                </Button>
              }
              {
                !hideCancel &&
                <Button
                  color={cancelColor || DEFAULT_CANCEL_COLOR}
                  onClick={closeHandler}
                >
                  {cancelText || DEFAULT_CANCEL_TEXT}
                </Button>
              }
            </DialogActions>
          }
        </Dialog>
      </DialogContext.Provider>
    </React.Fragment>
  )
}

