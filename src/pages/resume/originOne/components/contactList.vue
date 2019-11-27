<template>
  <div class="contactListContainer area">
    <p class="title">联系方式</p>
    <div class="haveData content"
      v-if="isShowContact">
      <div class="iconArea"
        @click="callPhone()">
        <img :src="`${staticUrl}orginOne/icon8.png`" />
        <span class="link">{{baseInfo.mobilePhone}}</span>
      </div>
      <div class="iconArea"
        @click="setClipboard(baseInfo.email)">
        <img :src="`${staticUrl}orginOne/icon9.png`" />
        <span class="link">{{baseInfo.email}}</span>
      </div>
      <div class="iconArea"
        @click="setClipboard(baseInfo.wechatNo)">
        <img :src="`${staticUrl}orginOne/icon10.png`" />
        <span class="link">{{baseInfo.wechatNo}}</span>
      </div>
      <div class="iconArea"
        @click="setClipboard(baseInfo.githubUrl)">
        <img :src="`${staticUrl}orginOne/icon11.png`" />
        <span class="link">{{baseInfo.githubUrl}}</span>
      </div>
    </div>
    <div class="noData content"
      v-if="!isShowContact">
      <img :src="`${staticUrl}orginOne/icon12.png`" />
      <p>作者暂时隐藏了联系方式，可能最近没有找工作的想法</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import Cain from '@/components/cain/'
import { State, namespace } from 'vuex-class'
const base = namespace('base')

@Component
export default class ContactList extends Vue {
  @Prop(Array) baseInfo;
  @Prop(Boolean) isShowContact;

  @base.State('staticUrl') staticUrl;

  // 设置剪切板内容
  setClipboard (val) {
    Cain.setClipboard(val)
  }
  // 打电话
  callPhone (val) {
    Cain.callPhone(this.baseInfo.mobilePhone)
  }
}
</script>

<style scoped lang="scss">
.contactListContainer {
  .link {
    color: #4395ff;
  }
  .iconArea {
    margin-bottom: 10px;
    img {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
  .noData {
    text-align: center;
    font-size: 15px;
    img {
      display: inline-block;
      width: 100px;
      height: 100px;
    }
  }
}
</style>
