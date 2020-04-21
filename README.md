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

Wrap your app inside the ConfirmProvider component.

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
