import * as React from 'react'
import { IDialogOptions } from './IDialogOptions'
import { IAlertOptions } from './IAlertOptions'

export interface IDialogContext {
  openConfirm: (options: IDialogOptions) => void
  openAlert: (options: IAlertOptions) => void
  close: () => void
}

const DEFAULT_CONTEXT: IDialogContext = {
  openConfirm: (options: IDialogOptions) => {
  },
  openAlert: (options: IAlertOptions) => {

  },
  close: () => {
  }
}

export const DialogContext = React.createContext(DEFAULT_CONTEXT)
