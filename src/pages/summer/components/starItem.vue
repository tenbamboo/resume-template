<template>
  <div class="starItemContainer">
    <div class="complete bar"
      :class="`w${+star*20}`"></div>
    <div class="incomplete bar"></div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class StarList extends Vue {
  @Prop(Array) title;
  @Prop(String) star;
}
</script>

<style scoped lang="scss">
.starItemContainer {
  position: relative;
  margin: 7px 0;
  height: 30px;
  .bar {
    padding: 10px;
    border-radius: 6px;
    width: 100%;
    height: 30px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
  }
  .complete {
    z-index: 2;
    background-color: #50b3ff;
    &.w20 {
      width: 20%;
    }
    &.w40 {
      width: 40%;
    }
    &.w60 {
      width: 60%;
    }
    &.w80 {
      width: 80%;
    }
    &.w100 {
      width: 100%;
    }
  }
  .incomplete {
    z-index: 1;
    background-color: #aed9fa;
  }

  .title {
    position: relative;
    z-index: 3;
    color: #fff;
    line-height: 25px;
    margin-left:10px;
  }
  &::after {
    content: " ";
    display: table;
    clear: both;
  }
}
</style>
