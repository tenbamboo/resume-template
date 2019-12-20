<template>
  <div class="bannerContainer">
    <img :src="avatarUrl+baseInfo.avatar"
      class="head " />
    <div class="info ">
      <p class="titleResume">RESUME</p>
      <p class="enName">{{baseInfo.enName}}</p>
      <p class="title">{{baseInfo.title}}</p>
    </div>
    <img :src="`${staticUrl}orginOne/bg.jpg`"
      class="bannerBg" />
    <div class="bannerOverlay"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
const base = namespace('base')

@Component
export default class Banner extends Vue {
  // avatarHost= process.env.VUE_APP_AVATAR_HOST
  @Prop(Object) baseInfo;
  @base.State('staticUrl') staticUrl;
  @base.State('avatarUrl') avatarUrl;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bannerContainer {
  position: relative;
  margin-bottom: 30px;
  .bannerBg {
    width: 100%;
    height: 300px;
  }
  .bannerOverlay {
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(41, 41, 41, 0.2);
    z-index: 1;
  }
  .info {
    color: #fff;
    position: absolute;
    z-index: 3;
    text-align: center;
    width: 100%;
    top: 85px;
  }
  .titleResume {
    padding-bottom: 4px;
    margin-bottom: 5px;
    font-size: 22px;
    font-weight: 900;
    &::after {
      border-bottom: 2px solid #fff;
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
    top: 260px;
    left: 40%;
    width: 80px;
    height: 80px;
    border: 2px solid #fff;
    border-radius: 50%;
    z-index: 4;
  }
}
</style>
