<template>
  <div class="baseProfileContainer">
    <div class="infoArea">
      <p class="userName">
        {{baseInfo.name}}
        <img class="editIcon"
          :src="`${staticUrl}common/edit.png`" />
      </p>
      <p class="otherInfo">{{baseInfo.firstWorkYear | workAgeFilter}} | {{baseInfo.birthday | ageFilter}} | {{baseInfo.diploma}} </p>
    </div>
    <div class="imgArea">
      <img v-if="baseInfo.avatar"
        :src="avatarUrl+baseInfo.avatar"
        class="head " />
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { State, namespace } from 'vuex-class'
import { workAgeFilter, ageFilter } from '@/pages/filters/index'
const base = namespace('base')

@Component({
  components: {},
  filters: {
    workAgeFilter,
    ageFilter
  }
})
export default class BaseProfile extends Vue {
  @base.State('myCVInfo') myCVInfo;
  @base.State('avatarUrl') avatarUrl;
  @base.State('staticUrl') staticUrl;

  mounted () {
  }

  get baseInfo () {
    return this.myCVInfo.baseInfo
  }
}
</script>

<style lang="scss" scoped>
.baseProfileContainer {
  display: flex;
  .infoArea {
    margin: 10px;
    padding: 10px;
    flex: 1;
    .userName {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 10px;
      .editIcon {
        width: 26px;
        height: 26px;
        vertical-align: middle;
        display: inline-block;
        margin-top: -5px;
        padding-left: 5px;
      }
    }
    .otherInfo {
        color: #5a5a5a;
    }
  }
  .imgArea {
    width: 100px;
    margin: 10px;
    text-align: center;
    .head {
      width: 80px;
      height: 80px;
      border-radius: 100%;
    }
  }
}
</style>
