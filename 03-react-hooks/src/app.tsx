
import React from 'react'
import { Window, hot, View } from '@nodegui/react-nodegui'
import { QIcon } from '@nodegui/nodegui'
import nodeguiIcon from '../assets/nodegui.jpg'

const minSize = { width: 500, height: 520 }
const winIcon = new QIcon(nodeguiIcon)
const App = () => {
  return (
    <Window
      windowIcon={winIcon}
      windowTitle=''
      minSize={minSize}
      styleSheet={styleSheet}
    >
      <View style={containerStyle}>
      </View>
    </Window>
  )
}

const containerStyle = ``

const styleSheet = ``

export default hot(App)
