<template>
  <div class="certificateListContainer area">
    <p class="title">我的证书</p>
      <div class="content">
        <div class="iconArea"
          v-for="(item,index) in certificateList"
          :key="index">
          <img :src="`${staticUrl}orginOne/iconCent.png`" />
          <span>{{item.name}}</span>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
const base = namespace('base')
@Component
export default class Certificate extends Vue {
  @Prop(Array) certificateList;
  @base.State('staticUrl') staticUrl;
}
</script>

<style scoped lang="scss">
.certificateListContainer {
  .iconArea {
    margin-bottom: 10px;
    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 10px;
      display: inline-block;
    }
  }
}
</style>
