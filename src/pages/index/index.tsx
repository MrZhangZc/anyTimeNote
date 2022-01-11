import { useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import 'taro-ui/dist/style/index.scss'
import { AtTabBar, AtTabsPane }  from 'taro-ui'
import './index.less'

import Mine from '../mine'
import Home from '../home'
import Setting from '../setting'


export default function Index() {
  const [current, setCount] = useState(0);
  const handleClick = value => setCount(value)

  return (
    <>
      <>
        <AtTabsPane current={current} index={0} >
          <Home />
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <Setting />
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <Mine />
        </AtTabsPane>
      </>
    <AtTabBar
      fixed
      backgroundColor='#ececec'
      color='#000'
      tabList={[
        { title: '首页', iconType: 'home' },
        { title: '设置', iconType: 'settings' },
        { title: '我的', iconType: 'user'}
      ]}
      onClick={handleClick}
      current={current}
    />
    </>
  )
}
