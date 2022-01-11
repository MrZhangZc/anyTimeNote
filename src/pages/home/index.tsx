import React, { forwardRef }from 'react'
import { View } from '@tarojs/components'
import 'taro-ui/dist/style/index.scss'
import { AtButton } from 'taro-ui'
import './index.less'

function Home() {

  return (
    <View>
      <AtButton>hello home</AtButton>
    </View>
  )
}

export default React.memo(forwardRef(Home))
