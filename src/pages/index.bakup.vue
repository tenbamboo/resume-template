<template>
  <div class="indexContainer">
    <!-- <div class="formArea">
      <div class="formItem">
        <label>123123</label>
        <input class="weui-input"
          auto-focus
          placeholder="将会获取焦点" />
      </div>
      <div class="formItem">
        <label>2223</label>
        <input type="text">
      </div>
    </div> -->
    <canvas type="2d"
      id="canvasBg"
      :style="`width: 100%; height: ${windowHeight}px;`"></canvas>
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
// 此方案暂时实现不了，微信小程序不支持canvas的zindex
import { Vue, Component } from 'vue-property-decorator'
import Cain from '@cain'
import { State, namespace } from 'vuex-class'

import Starfield from '@/components/starfield.js'

const base = namespace('base')

@Component
export default class ResumeIndex extends Vue {
  @base.State('staticUrl') staticUrl;

  windowHeight = 0;

  areaV=false;

  async beforeCreate () {}

  created () {}

  beforeMount () {}

  mounted () {
    this.initCanvas()
  }
  async initCanvas () {
    const sysInfo = wx.getSystemInfoSync()
    const res = await Cain.selectorQuery('#canvasBg', {
      node: true,
      size: true
    })
    const canvas = res[0].node
    this.windowHeight = sysInfo.windowHeight

    setTimeout(() => {
      Starfield.start(canvas, sysInfo)
    }, 300)
    setTimeout(() => {
      this.areaV = true
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.indexContainer {
  canvas {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .cover-view {
    width: 100px;
    height: 100px;
    background-color: red;
    z-index: 1000;
    top: 0;
    left: 0;
    position: absolute;
    .weui-input {
      // top: 0;
      // left: 0;
      // position: absolute;
      z-index: 100;
      background-color: red;
    }
    .formItem {
    }
  }
}
</style>
