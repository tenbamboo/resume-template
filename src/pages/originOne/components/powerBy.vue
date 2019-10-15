<template>
  <div class="powerByContainer area">
    Powered By
    <span class="link"
      @click="setClipboard('https://github.com/tenbamboo/resume-template')">GitHub : @tenbamboo</span>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import Cain from '@/components/cain/'

@Component
export default class PowerBy extends Vue {
  // 设置剪切板内容
  setClipboard (val) {
    Cain.setClipboard(val)
  }
}
</script>

<style scoped lang="scss">
.powerByContainer {
  text-align: center;
  padding-bottom: 20px;
  font-size: 14px;
  .link {
    color: #4395ff;
  }
}
</style>
