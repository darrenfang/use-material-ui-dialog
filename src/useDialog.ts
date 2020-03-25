import { useContext } from 'react'
import { DialogContext } from './IDialogContext'

export const useDialog = () => {
  return useContext(DialogContext)
}
