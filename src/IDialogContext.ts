import * as React from 'react'
import { IDialogOptions } from './IDialogOptions'
import { IAlertOptions } from './IAlertOptions'
import { IMessageOptions } from './IMessageOptions'

export interface IDialogContext {
  openConfirm: (options: IDialogOptions) => void
  openAlert: (options: IAlertOptions) => void
  openMessage: (options: IMessageOptions) => void
  close: () => void
}

const DEFAULT_CONTEXT: IDialogContext = {
  openConfirm: (options: IDialogOptions) => {
  },
  openAlert: (options: IAlertOptions) => {
  },
  openMessage: (options: IMessageOptions) => {
  },
  close: () => {
  }
}

export const DialogContext = React.createContext(DEFAULT_CONTEXT)
