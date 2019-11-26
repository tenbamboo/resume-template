<template>
  <div class="winterContainer">
    <banner :baseInfo="baseInfo.baseInfo"></banner>

    <about-me :baseInfo="baseInfo.baseInfo" />

    <certificate :certificateList="baseInfo.certificateList" />

    <accordion-list :list="baseInfo.workList"
      :title="'工作经验'" />

    <accordion-list :list="baseInfo.otherWork"
      :title="'其他作品'" />

    <skill-list :skillList="baseInfo.skillList" />

    <star-list :starList="baseInfo.starList" />

    <contact-list :baseInfo="baseInfo.baseInfo"
      :isShowContact="baseInfo.isShowContact" />

    <thanks />

    <power-by/>

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
import baseInfoJson from '@/components/haze.liu.js'
import Banner from './components/banner.vue'
import AboutMe from './components/aboutMe.vue'
import Certificate from './components/certificate.vue'
import AccordionList from './components/accordionList.vue'
import SkillList from './components/skillList.vue'
import StarList from './components/starList.vue'
import ContactList from './components/contactList.vue'
import Thanks from './components/thanks.vue'
import PowerBy from '@/pages/common/components/powerBy.vue'

import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Banner,
    AboutMe,
    Certificate,
    AccordionList,
    SkillList,
    StarList,
    ContactList,
    Thanks,
    PowerBy
  }
})
export default class My extends Vue {
  baseInfo = baseInfoJson;

  async beforeCreate () {
    console.log('Page [my] Vue beforeCreate')
  }

  created () {
    console.log('Page [my] Vue created')
    const appInstance: any = getApp()
    // console.log(appInstance.globalData) // I am global data
  }

  beforeMount () {
    console.log('Page [my] Vue beforeMount')
  }

  mounted () {
    wx.setNavigationBarTitle({
      title: 'hadflalsjd'
    })
    console.log('Page [my] Vue mounted', this.baseInfo, this.baseInfo.starList)
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
}
</script>

<style lang="scss" scoped>
.winterContainer {
  .bg {
    color: #ffffff;
    // background: $Bg repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: 100% 100%;
  }
}
</style>
