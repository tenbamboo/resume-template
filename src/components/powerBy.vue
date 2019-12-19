<template>
  <div class="powerByContainer ">
    <span class="link" @click="gotoAbout">— 关于 —</span>
    <!-- <span class="link"
      @click="setClipboard('https://github.com/tenbamboo/resume-template')"> @tenbamboo</span> -->
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import Cain from '@/components/cain/'

@Component
export default class PowerBy extends Vue {
  gotoAbout () {
    Cain.navigateTo(`/about`)
  }
}
</script>

<style scoped lang="scss">
.powerByContainer {
  text-align: center;
  padding-bottom: 20px;
  font-size: 14px;
   padding: 10px;
  color: #000;
  .link {
    color: #4395ff;
  }
  .title {
    padding-bottom: 10px;
    border-bottom: 1px solid #3d3b3b;
    margin-bottom: 10px;
    font-size: 20px;
    &::before {
      content: " ";
      display: inline-block;
      border-left: 4px solid #3d3b3b;
      width: 1px;
      height: 20px;
      margin-right: 10px;
      margin-left: 5px;
      margin-top: -4px;
      vertical-align: middle;
    }
  }
}
</style>
