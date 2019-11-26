<template>
  <div class="skillListContainer cardContainer">
    <div class="cardTitle">
      技能栈
    </div>
    <div class="cardBody">
      <div class="content">
        <div class="item"
          v-for="(item,index) in skillList"
          :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class SkillList extends Vue {
  @Prop(Array) skillList;
}
</script>

<style scoped lang="scss">
@import "@/pages/summer/style/common.scss";
.skillListContainer {
  .content {
    & > .item {
      padding: 5px;
    }
  }
}
</style>
