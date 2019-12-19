<template>
  <div class="aboutContainer">
    <skyFullOfStars />
    <div class="logoArea">
      <img :src="`${staticUrl}/common/logo_white.png`"
        class="logo" />
    </div>
    <p class="slogan">简历模板超多的个人简历管理工具</p>
    <p class="templateMore link" @click="lookMoreTemplate">查看更多简历模板</p>
    <ul class="thanksList">
      <li>作者：<span class="link"
          @click="setClipboard('https://github.com/tenbamboo/resume-template')">@tenbamboo</span> </li>
      <li>logo设计：<span class="link"
          @click="setClipboard('https://github.com/ljlong315')">@ljlong315</span> </li>
    </ul>

  </div>
</template>
<config>
{
  "navigationBarBackgroundColor": "#282a3a",
  "navigationBarTextStyle": "white",
  "navigationBarTitleText": "关于星选简历",
  "backgroundColor": "#282a3a",
}
</config>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

import Cain from '@cain'

import SkyFullOfStars from '@/components/skyFullOfStars.vue'
// import ResumeService from '@/model/service/ResumeService'
// import ResumeMap from '@/model/dto/ResumeMap'
const base = namespace('base')

@Component({
  components: {
    SkyFullOfStars
  }
})
export default class About extends Vue {
  @base.State('staticUrl') staticUrl;

  code: string = '';

  //   resumeService:ResumeService = new ResumeService();

  async beforeCreate () {}

  created () {}

  beforeMount () {}

  mounted () {}
  // 设置剪切板内容
  setClipboard (val) {
    Cain.setClipboard(val)
  }
  lookMoreTemplate () {
    Cain.navigateTo(`/templateList`)
  }
}
</script>

<style lang="scss" scoped>
.aboutContainer {
  .logoArea {
    margin-top: 100px;
    text-align: center;
    .logo {
      width: 200px;
      height: 50px;
    }
  }
  .slogan,.templateMore {
    text-align: center;
    color: #fff;
    font-size: 14px;
    margin-top:10px;
  }
  .thanksList {
    margin-top: 30px;
    text-align: center;
    color: #fff;
    font-size: 12px;
    li {
      padding: 8px;
    }
  }
  .link {
    color: #03a9f4;
  }
}
</style>
