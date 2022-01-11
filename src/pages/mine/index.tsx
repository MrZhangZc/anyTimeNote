import React, { forwardRef }from 'react'
import { View } from '@tarojs/components'
import 'taro-ui/dist/style/index.scss'
import { AtButton } from 'taro-ui'
import './index.less'

function Mine() {

  return (
    <View>
      <AtButton>hello zzc</AtButton>
    </View>
  )
}

export default React.memo(forwardRef(Mine))
