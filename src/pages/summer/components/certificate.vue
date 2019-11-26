<template>
  <div class="certificateListContainer cardContainer">
    <div class="cardTitle">
      我的证书
    </div>
    <div class="cardBody">
      <div class="iconArea"
        v-for="(item,index) in certificateList"
        :key="index">
        <img src="@/static/imgs/orginOne/iconCent.png" />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class Certificate extends Vue {
  @Prop(Array) certificateList;
}
</script>

<style scoped lang="scss">
@import "@/pages/summer/style/common.scss";

.certificateListContainer {
}
</style>
