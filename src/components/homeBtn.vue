<template>
  <div class="linkHomeBtnContainer "  @click="gotoAbout" >
      <img v-if="type === 'white'" :src="`${staticUrl}/common/home_white.png`" />
      <img v-if="type === 'black'" :src="`${staticUrl}/common/home_black.png`" />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import Cain from '@/components/cain/'

const base = namespace('base')

@Component
export default class HomeBtn extends Vue {
  @base.State('staticUrl') staticUrl;
  // 图片类型，有black、white
  @Prop(String) type = 'white';
  // // 是否开启动效
  // @Prop(Boolean) isAnimated = true
  // // 是否在动效中
  // @Prop(Boolean) animationing = false

  gotoAbout () {
    Cain.navigateTo(`/about`)
  }
}
</script>

<style scoped lang="scss">
.linkHomeBtnContainer {
    position: fixed;
    padding: 3px 8px;
    right: 10px;
    bottom: 40px;
    border-radius: 20px;
    font-size: 12px;
    transition: all 0.5s;
    img {
      margin-left: 5px;
      display: inline-block;
      vertical-align: middle;
      width: 30px;
      height: 30px;
      background-color: rgba(255, 255, 255,0.6);
      padding: 5px;
      border-radius: 100%;
      box-shadow: 0 0 10px #cecece;
    }
    &.animationing{
      right: -29px;
    }
}
</style>
