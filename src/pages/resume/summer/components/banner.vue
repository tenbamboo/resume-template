<template>
  <div class="bannerContainer">
    <img :src="avatarUrl+baseInfo.avatar"
      class="head " />
    <div class="info ">
      <p class="titleResume">RESUME</p>
      <p class="enName">{{baseInfo.enName}}</p>
      <p class="title">{{baseInfo.title}}</p>
    </div>
    <img :src="`${staticUrl}summer/bannerBg.jpeg`"
      class="bannerBg" />
    <img :src="`${staticUrl}summer/wave.gif`"
      class="waveBg" />
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
const base = namespace('base')

@Component
export default class Banner extends Vue {
  @Prop(Object) baseInfo;
  @base.State('staticUrl') staticUrl;
  @base.State('avatarUrl') avatarUrl;
}
</script>

<style scoped lang="scss">
.bannerContainer {
  position: relative;
  margin-bottom: 10px;
  .bannerBg {
    width: 100%;
    height: 250px;
  }
  .waveBg{
    position: absolute;
    width: 100%;
    bottom: 4px;
    left: 0;
    z-index: 99;
    mix-blend-mode: screen;
    height: 50px;
  }
  .info {
    color: #3caaea;
    position: absolute;
    z-index: 3;
    text-align: center;
    width: 100%;
  }
  .titleResume {
    padding-bottom: 4px;
    margin-bottom: 5px;
    font-size: 22px;
    font-weight: 900;
    &::after {
      border-bottom: 2px solid #3caaea;
      content: " ";
      width: 100px;
      height: 2px;
      display: block;
      margin-left: 38%;
    }
  }
  .enName {
    font-size: 18px;
  }
  .title {
    font-size: 18px;
  }
  .head {
    position: absolute;
    top: 130px;
    left: 40%;
    width: 80px;
    height: 80px;
    border: 2px solid #fff;
    border-radius: 50%;
    z-index: 4;
  }
}
</style>
