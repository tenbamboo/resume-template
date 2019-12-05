<template>
  <div class="indexContainer">
    <skyFullOfStars />
    <div class="formArea">
      <div class="logo">
        <img :src="`${staticUrl}/common/logo_white.png`" />
      </div>
      <div class="formItem">
        <img :src="`${staticUrl}/common/vercode.png`"
          class="icon" />
        <input type="text"
          v-model="code"
          confirm-type="go"
          @confirm="submit"
          placeholder-style="color:#fff"
          placeholder="识别码"
          maxlength="30">
      </div>
      <div class="formItem">
        <div class="accessBtn" @click="submit">访问</div>
      </div>
    </div>

  </div>
</template>
<config>
{
  "navigationBarBackgroundColor": "#282a3a",
  "navigationBarTextStyle": "white",
  "navigationBarTitleText": "Test",
  "backgroundColor": "#282a3a",
}
</config>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

import Cain from '@cain'

import SkyFullOfStars from '@/components/skyFullOfStars.vue'
import ResumeService from '@/model/service/ResumeService'
import ResumeMap from '@/model/dto/ResumeMap'
const base = namespace('base')

@Component({
  components: {
    SkyFullOfStars
  }
})
export default class ResumeIndex extends Vue {
  @base.State('staticUrl') staticUrl;

  code:string = ''

  resumeService:ResumeService = new ResumeService();

  async beforeCreate () {}

  created () {

  }

  beforeMount () {}

  mounted () {}
  submit2 ($event) {
    console.log($event)
  }

  async submit () {
    const res:ResumeMap = await this.resumeService.getResumeCode(this.code) as ResumeMap
    if (!res) {
      Cain.showToastE('未找到识别码')
      return
    }
    Cain.showLoading()
    Cain.navigateTo(`/resume/${res.theme}`, { name: res.name })
  }
}
</script>

<style lang="scss" scoped>
.indexContainer {
  .formArea {
    position: absolute;
    width: 50%;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    .logo {
      img {
        width: 200px;
        height: 50px;
      }
    }
    .formItem {
      margin-top: 20px;
      text-align: center;
      input {
        padding: 10px;
        border-bottom: 1px solid #fff;
        color: #fff;
        display: inline-block;
        width: 55%;
      }
      .icon {
        vertical-align: middle;
        width: 30px;
        height: 30px;
        display: inline-block;
        line-height:30px;
      }
      .inputPlaceholder {
        color: #fff;
      }
      .accessBtn {
        width: 100%;
        margin: 40px auto;
        padding: 10px;
        // box-shadow: 0px 0px 10px 2px #babac4;
        border-radius: 20px;
        color: #fff;
        background-color: #2196F3;
      }
    }
  }
}
</style>
