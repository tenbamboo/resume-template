<template>
 <div class="skillListContainer area">
      <p class="title">技能栈</p>
      <div class="content">
        <div class="item"
          v-for="(item,index) in skillList"
          :key="index">{{item}}</div>
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
.skillListContainer {
    .content {
      & > .item{
        padding: 5px;
      }
  }
}
</style>
