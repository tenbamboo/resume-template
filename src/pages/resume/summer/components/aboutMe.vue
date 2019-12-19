<template>
  <div class="aboutMeContainer cardContainer">
    <div class="cardTitle">
      关于我
    </div>
    <div class="cardBody">
      <div class="iconArea">
        <img :src="`${staticUrl}orginOne/icon1.png`" />
        <span>{{baseInfo.name}} / {{baseInfo.sex}}</span>
      </div>
      <div class="iconArea">
        <img :src="`${staticUrl}orginOne/icon2.png`" />
        <span>{{baseInfo.birthday}}</span>
      </div>
      <div class="iconArea">
        <img :src="`${staticUrl}orginOne/icon3.png`" />
        <span>{{baseInfo.diploma}} / {{baseInfo.school}}</span>
      </div>
      <div class="iconArea">
        <img :src="`${staticUrl}orginOne/icon4.png`" />
        <span>{{baseInfo.firstWorkYear | workAgeFilter}} (工作年限)</span>
      </div>
      <div class="iconArea">
        <img :src="`${staticUrl}orginOne/icon5.png`" />
        <span>{{baseInfo.location}}</span>
      </div>
      <div class="iconArea">
        <img :src="`${staticUrl}orginOne/icon6.png`" />
        <span>{{baseInfo.wantPosition}}</span>
      </div>
      <div class="iconArea"  v-if="baseInfo.isShowSalary">
        <img :src="`${staticUrl}orginOne/icon7.png`" />
        <span>{{baseInfo.salary}}</span>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import { workAgeFilter } from '@/pages/filters/index'
const base = namespace('base')

@Component({
  filters: {
    workAgeFilter
  }
})
export default class AboutMe extends Vue {
  @Prop(Object) baseInfo;
  @base.State('staticUrl') staticUrl;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/pages/resume/summer/style/common.scss";

.aboutMeContainer {
}
</style>
