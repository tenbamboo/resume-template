<template>
  <div class="winterContainer">
    hello would
    <p @click="gotoPage('summer','haze.liu.new')">summerHaze</p>
    <p @click="gotoPage('originOne','haze.liu.new')">originOneHaze</p>
    <p @click="gotoPage('summer','damao')">summerDamao</p>
    <p @click="gotoPage('originOne','damao')">originOneDamao</p>
  </div>
</template>
<config>
{
  "navigationBarBackgroundColor": "#e7fafe",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "Test",
  "backgroundColor": "#e7fafe",
}
</config>
<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import Cain from '@cain'
import { State, namespace } from 'vuex-class'

const base = namespace('base')

@Component
export default class ResumeIndex extends Vue {
  // baseInfo = baseInfoJson;
  @base.State('staticUrl') staticUrl;

  async beforeCreate () {
    console.log('Page [my] Vue beforeCreate')
  }

  created () {
    // const appInstance: any = getApp()
    // console.log(appInstance.globalData) // I am global data
  }

  beforeMount () {
    console.log('Page [my] Vue beforeMount')
  }

  mounted () {
    console.log(this.staticUrl)
    console.log(process.env.VUE_APP_STATIC_HOST)
    wx.setNavigationBarTitle({
      title: 'hadflalsjd'
    })
    // console.log('Page [my] Vue mounted', this.baseInfo, this.baseInfo.starList)
  }

  onLoad (options) {
    // Do some initialize when page load.
    console.log('Page [my] onLoad')
  }

  onReady () {
    // Do something when page ready.
    console.log('Page [my] onReady')
  }

  onShow () {
    // Do something when page show.
    console.log('Page [my] onShow')
  }
  onHide () {
    // Do something when page hide.
    console.log('Page [my] onHide')
  }

  onUnload () {
    // Do something when page close.
    console.log('Page [my] onUnload')
  }
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  changeStat () {}

  gotoPage (url, name) {
    console.log(url)
    Cain.navigateTo(`/resume/${url}`, { name })
  }
}
</script>

<style lang="scss" scoped>
</style>
