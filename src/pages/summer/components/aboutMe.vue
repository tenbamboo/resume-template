<template>
  <div class="aboutMeContainer cardContainer">
    <div class="cardTitle">
      关于我
    </div>
    <div class="cardBody">
      <div class="iconArea">
        <img src="@/static/imgs/orginOne/icon1.png" />
        <span>{{baseInfo.name}} / {{baseInfo.sex}}</span>
      </div>
      <div class="iconArea">
        <img src="@/static/imgs/orginOne/icon2.png" />
        <span>{{baseInfo.birthday}}</span>
      </div>
      <div class="iconArea">
        <img src="@/static/imgs/orginOne/icon3.png" />
        <span>{{baseInfo.diploma}} / {{baseInfo.school}}</span>
      </div>
      <div class="iconArea">
        <img src="@/static/imgs/orginOne/icon4.png" />
        <span>{{baseInfo.workAge}} (工作年限)</span>
      </div>
      <div class="iconArea">
        <img src="@/static/imgs/orginOne/icon5.png" />
        <span>{{baseInfo.location}}</span>
      </div>
      <div class="iconArea">
        <img src="@/static/imgs/orginOne/icon6.png" />
        <span>{{baseInfo.wantPosition}}</span>
      </div>
      <div class="iconArea">
        <img src="@/static/imgs/orginOne/icon7.png" />
        <span>{{baseInfo.salary}}</span>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

//  @Component({
//    components: {
//      Card
//    }
//  })

@Component
export default class AboutMe extends Vue {
  @Prop(Object) baseInfo;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/pages/summer/style/common.scss";

.aboutMeContainer {
}
</style>
