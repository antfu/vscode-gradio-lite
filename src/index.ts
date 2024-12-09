import { defineExtension } from 'reactive-vscode'

const { activate, deactivate } = defineExtension(() => {
  // window.showInformationMessage('Hello')
})

export { activate, deactivate }
