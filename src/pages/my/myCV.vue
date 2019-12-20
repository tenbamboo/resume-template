<template>
  <div class="myCVContainer">
    <base-profile/>
  </div>
</template>
<config>
{
  "navigationBarBackgroundColor": "#282a3a",
  "navigationBarTextStyle": "white",
  "navigationBarTitleText": "编辑我的简历",
  "backgroundColor": "#282a3a",
}
</config>
<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import BaseProfile from './components/baseProfile.vue'
import MyService from '@/model/service/MyService'
import { State, namespace } from 'vuex-class'
const base = namespace('base')
@Component({
  components: {
    BaseProfile
  }
})
export default class MyCV extends Vue {
  @base.Mutation('setMyCVInfo') setMyCVInfo

  myService:MyService = new MyService();

  created () {
    this.getMyCVInfo()
  }
  async getMyCVInfo () {
    const res = await this.myService.getCVInfoByUserId('123')
    console.log(res)
    this.setMyCVInfo(res)
  }
}
</script>

<style lang="scss" scoped>
.myCVContainer{
}
</style>
