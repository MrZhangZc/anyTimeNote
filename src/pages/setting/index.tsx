import React, { forwardRef }from 'react'
import { View } from '@tarojs/components'
import 'taro-ui/dist/style/index.scss'
import { AtButton } from 'taro-ui'
import './index.less'

function Setting() {

  return (
    <View>
      <AtButton>hello settings</AtButton>
    </View>
  )
}

export default React.memo(forwardRef(Setting))
