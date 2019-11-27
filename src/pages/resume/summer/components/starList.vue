<template>
  <div class="starListContainer cardContainer">
   <div class="cardTitle">
      技能关键字
    </div>
    <div class="cardBody">
      <star-item v-for="(item,index) in starList"
        :key="index"
        :star="item.star"
        :title="item.name"></star-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import StarItem from './starItem.vue'
// @Component
@Component({
  components: {
    StarItem
  }
})
export default class StarList extends Vue {
  @Prop(Array) starList;
}
</script>

<style scoped lang="scss">
@import "@/pages/resume/summer/style/common.scss";
.starListContainer {
  // .content .item {
  //   padding: 5px;
  //   display: flex;
  //   span {
  //     margin-right: 10px;
  //     width: 100px;
  //   }
  //   img {
  //     width: 20px;
  //     height: 20px;
  //     vertical-align: middle;
  //     margin-right: 5px;
  //   }
  // }
}
</style>
