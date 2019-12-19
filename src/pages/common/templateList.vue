<template>
  <div class="templateListContainer">
    <skyFullOfStars />
    <ul class="templateList">
      <li v-for="(item,index) in templateList"
        :key="index"
        @click="gotoDetail(item)">
        <img :src="`${staticUrl}/${item.cover}`"
          class="cover" />
        <p class="title">
          {{item.name}}
        </p>
      </li>
    </ul>

  </div>
</template>
<config>
{
  "navigationBarBackgroundColor": "#282a3a",
  "navigationBarTextStyle": "white",
  "navigationBarTitleText": "简历模板",
  "backgroundColor": "#282a3a",
}
</config>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'

import Cain from '@cain'

import SkyFullOfStars from '@/components/skyFullOfStars.vue'
import ResumeService from '@/model/service/ResumeService'
import TemplateItem from '@/model/dto/TemplateItem'
const base = namespace('base')

@Component({
  components: {
    SkyFullOfStars
  }
})
export default class TemplateList extends Vue {
  @base.State('staticUrl') staticUrl;

  resumeService: ResumeService = new ResumeService();

  templateList: Array<TemplateItem> = [];

  async beforeCreate () {}

  created () {}

  beforeMount () {}

  async mounted () {
    this.templateList = (await this.resumeService.getTemplateList()) as Array<
      TemplateItem
    >
    console.log(this.templateList)
  }

  gotoDetail (item: TemplateItem) {
    Cain.navigateTo(`/resume/${item.code}`, { name: 'damao' })
  }
}
</script>

<style lang="scss" scoped>
.templateListContainer {
  li {
    background-color: #fff;
    display: inline-block;
    width: 46%;
    box-sizing: content-box;
    margin: 5px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .cover {
      width: 100%;
      height: 170px;
    }
    .title {
      border-top: 1px solid #e3e3e3;
      padding: 10px;
    }
  }
}
</style>
