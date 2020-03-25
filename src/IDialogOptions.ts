import { PropTypes } from '@material-ui/core'
import { ReactElement } from 'react'

export interface IDialogOptions {
  className?: string
  title?: string
  message?: string
  element?: ReactElement
  okColor?: PropTypes.Color
  cancelColor?: PropTypes.Color
  hideOk?: boolean
  hideCancel?: boolean
  oKText?: string
  cancelText?: string
  onOk?: () => void
  onCancel?: () => void
}

export const DEFAULT_DIALOG_OPTIONS: IDialogOptions = {}
