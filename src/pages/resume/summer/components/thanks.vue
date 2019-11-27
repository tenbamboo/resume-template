<template>
  <div class="thanksContainer cardContainer">
    <div class="cardTitle">
      致谢
    </div>
    <div class="cardBody">
      <div class="iconArea">
        <img :src="`${staticUrl}orginOne/icon13.png`" />
        <span>感谢您花时间阅读我的简历，期待能有机会和您共事。</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
const base = namespace('base')

@Component
export default class SkillList extends Vue {
  @base.State('staticUrl') staticUrl;
}
</script>

<style scoped lang="scss">
@import "@/pages/resume/summer/style/common.scss";
.thanksContainer {
}
</style>
