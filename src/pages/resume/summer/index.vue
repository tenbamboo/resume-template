<template>
  <div class="summerContainer">
    <banner :baseInfo="baseInfo.baseInfo"
      :staticUrl="staticUrl"
      v-if="baseInfo.baseInfo" />

    <about-me :baseInfo="baseInfo.baseInfo"
      :staticUrl="staticUrl"
      v-if="baseInfo.baseInfo" />

    <certificate :certificateList="baseInfo.certificateList"
      :staticUrl="staticUrl"
      v-if="baseInfo.certificateList" />

    <accordion-list :list="baseInfo.workList"
      :staticUrl="staticUrl"
      v-if="baseInfo.workList"
      :title="'工作经验'" />

    <accordion-list :list="baseInfo.otherWork"
      :staticUrl="staticUrl"
      v-if="baseInfo.otherWork"
      :title="'其他作品'" />

    <skill-list :skillList="baseInfo.skillList"
      :staticUrl="staticUrl"
      v-if="baseInfo.skillList" />

    <star-list :starList="baseInfo.starList"
      :staticUrl="staticUrl"
      v-if="baseInfo.starList" />

    <contact-list :baseInfo="baseInfo.baseInfo"
      :staticUrl="staticUrl"
      v-if="baseInfo.baseInfo"
      :isShowContact="baseInfo.isShowContact" />

    <thanks v-if="baseInfo.baseInfo"
      :staticUrl="staticUrl" />

    <power-by v-if="baseInfo.baseInfo" />

  </div>
</template>
<config>
{
  "navigationBarBackgroundColor": "#e7fafe",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "StarCv",
  "backgroundColor": "#e7fafe",
}
</config>
<script lang="ts">
import Banner from './components/banner.vue'
import AboutMe from './components/aboutMe.vue'
import Certificate from './components/certificate.vue'
import AccordionList from './components/accordionList.vue'
import SkillList from './components/skillList.vue'
import StarList from './components/starList.vue'
import ContactList from './components/contactList.vue'
import Thanks from './components/thanks.vue'
import PowerBy from '@/components/powerBy.vue'
import BaseInfoMixins from '@/pages/resume/mixins/baseInfoMixins.ts'

import { Vue, Component, Mixins } from 'vue-property-decorator'

@Component({
  components: {
    Banner,
    AboutMe,
    Certificate,
    AccordionList,
    SkillList,
    StarList,
    ContactList,
    Thanks,
    PowerBy
  }
})
export default class Summer extends Mixins(BaseInfoMixins) {}
</script>

<style lang="scss" scoped>
.summerContainer {
}
</style>
