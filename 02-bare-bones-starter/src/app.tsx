
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
      styleSheet={windowStylesheet}
    >
      <View style={viewStyle}>
      </View>
    </Window>
  )
}

const viewStyle = ``

const windowStylesheet = ``

export default hot(App)
