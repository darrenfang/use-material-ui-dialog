import { PropTypes } from '@material-ui/core'
import { ReactElement } from 'react'

export interface IAlertOptions {
  className?: string
  title?: string
  message?: string
  element?: ReactElement
  color?: PropTypes.Color
}
