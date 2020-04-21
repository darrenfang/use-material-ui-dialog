import { PropTypes } from '@material-ui/core'
import { ReactElement } from 'react'

export interface IMessageOptions {
  className?: string
  title?: string
  message?: string
  element?: ReactElement
  color?: PropTypes.Color
  okText?: string
  onOk?: () => void
}
