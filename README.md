# use-material-ui-dialog

![Node.js Package](https://github.com/darrenfang/use-material-ui-dialog/workflows/Node.js%20Package/badge.svg)
![NPM](https://img.shields.io/npm/l/use-material-ui-dialog)
[![npm](https://img.shields.io/npm/v/use-material-ui-dialog)](https://www.npmjs.com/package/use-material-ui-dialog)

React hook for Material-UI dialog.

## Installation

```shell
yarn add use-material-ui-dialog
```

## Usage

Wrap your app inside the DialogProvider component.

```typescript jsx
import React from 'react'
import { DialogProvider } from 'use-material-ui-dialog'

const App = () => {
  return (
    <DialogProvider>
      {/* ... */}
    </DialogProvider>
  )
}

export default App
```

Call the `useDialog` hook in the components.

```typescript jsx
import React from 'react'
import { Button } from '@material-ui/core'
import { useDialog } from 'use-material-ui-dialog'

export const MyComponent: React.FunctionComponent = () => {
  const dialog = useDialog()

  const handleClick = () => {
    dialog.openAlert({
      title: 'ALERT',
      message: 'this is alert',
      color: 'secondary'
    })
  }

  return (
    <Button onClick={handleClick}>
      Click Me
    </Button>
  )
}
```

Use the `DialogContext.Provider` object in the components.

```typescript jsx
import React from 'react'
import { AppProps } from 'next/app'
import { DialogProvider } from 'use-material-ui-dialog'

export default class Welcome extends React.Component {
  constructor(props: AppProps) {
    super(props)
    this.context = null
  }

  componentDidMount() {
    this.context.openMessage({
      title: 'ALERT',
      message: 'this is alert'
    })
  }

  render() {
    return (
      <DialogProvider
        context={(context) => this.context = context}
      >
      </DialogProvider>
    )
  }
}
```
