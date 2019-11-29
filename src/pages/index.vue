<template>
  <div class="indexContainer">
    <skyFullOfStars />
    <div class="formArea">
      <div class="logo">
        <img :src="`${staticUrl}/common/logo_white.png`" />
      </div>
      <div class="formItem">
        <img :src="`${staticUrl}/common/vercode.png`"
          class="icon" />
        <input type="text"
          placeholder-style="color:#fff"
          placeholder="识别码"
          maxlength="30">
      </div>
      <div class="formItem">
        <div class="accessBtn">访问</div>
      </div>
    </div>

  </div>
</template>
<config>
{
  "navigationBarBackgroundColor": "#282a3a",
  "navigationBarTextStyle": "white",
  "navigationBarTitleText": "Test",
  "backgroundColor": "#282a3a",
}
</config>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

import Cain from '@cain'

import SkyFullOfStars from '@/components/skyFullOfStars.vue'

const base = namespace('base')

@Component({
  components: {
    SkyFullOfStars
  }
})
export default class ResumeIndex extends Vue {
  @base.State('staticUrl') staticUrl;

  areaV = false;

  async beforeCreate () {}

  created () {}

  beforeMount () {}

  mounted () {}
  // async initCanvas () {
  //   // const sysInfo = wx.getSystemInfoSync()
  //   // const res = await Cain.selectorQuery('#canvasBg', {
  //   //   node: true,
  //   //   size: true
  //   // })
  //   // const canvas = res[0].node
  //   // this.windowHeight = sysInfo.windowHeight

  //   // setTimeout(() => {
  //   //   Starfield.start(canvas, sysInfo)
  //   // }, 300)
  //   // setTimeout(() => {
  //   //   this.areaV = true
  //   // }, 5000)
  // }
}
</script>

<style lang="scss" scoped>
.indexContainer {
  .formArea {
    position: absolute;
    width: 50%;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    .logo {
      img {
        width: 200px;
        height: 50px;
      }
    }
    .formItem {
      margin-top: 20px;
      text-align: center;
      input {
        padding: 10px;
        border-bottom: 1px solid #fff;
        color: #fff;
        display: inline-block;
        width: 55%;
      }
      .icon {
        vertical-align: middle;
        width: 30px;
        height: 30px;
        display: inline-block;
      }
      .inputPlaceholder {
        color: #fff;
      }
      .accessBtn {
        width: 70%;
        margin: 40px auto;
        padding: 10px;
        box-shadow: 0px 0px 10px 2px #babac4;
        border-radius: 20px;
        color: #fff;
      }
    }
  }
}
</style>
