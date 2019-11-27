<template>
  <div class="starListContainer area">
    <p class="title">技能关键字</p>
    <div class="content">
      <div class="item"
        v-for="(item,index) in starList"
        :key="index">
        <span>{{item.name}}</span>
        <img :src="`${staticUrl}orginOne/star.png`"
          v-for="(itemS,indexS) in item.star"
          :key="indexS" />
        <img :src="`${staticUrl}orginOne/star_e.png`"
          v-for="(itemS1,indexS1) in (5-item.star)"
          :key="indexS1" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
const base = namespace('base')
@Component
export default class StarList extends Vue {
  @Prop(Array) starList;

  @base.State('staticUrl') staticUrl;
}
</script>

<style scoped lang="scss">
.starListContainer {
  .content .item {
    padding: 5px;
    display: flex;
    span {
      margin-right: 10px;
      width: 100px;
    }
    img {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
}
</style>
