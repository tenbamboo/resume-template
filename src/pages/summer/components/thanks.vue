<template>
  <div class="thanksContainer cardContainer">
    <div class="cardTitle">
      致谢
    </div>
    <div class="cardBody">
      <div class="iconArea">
        <img src="@/static/imgs/orginOne/icon13.png" />
        <span>感谢您花时间阅读我的简历，期待能有机会和您共事。</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class SkillList extends Vue {}
</script>

<style scoped lang="scss">
@import "@/pages/summer/style/common.scss";
.thanksContainer {
}
</style>
