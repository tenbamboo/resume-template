<template>
  <div class="accordionListContainer cardContainer">
    <div class="cardTitle">
      {{title}}
    </div>
    <div class="cardBody">
      <div class="accordion">
        <div class="accordionItem"
          v-for="(item,index) in listProxy"
          :key="index">
          <p class="title"
            :id="item.itemId"
            :class="item.isShow == true?'isShow':''"
            @click="toggleAccordionItem($event,item)">
            <span>{{item.title}} <font>({{item.subTitle}})</font></span>
          </p>

          <div class="contentWrap"
            :class="item.isShow == true?'isShow':''"
            v-if="item.isShow == true">
            <div class="content">
              <div v-for="(child,indexC) in item.projectList"
                :key="indexC"
                class="item">
                <div class="hr"></div>
                <div class="detail">
                  <font class="fontBold">项目名：</font>{{child.projectName}}
                </div>
                <div class="detail">
                  <font class="fontBold">介绍：</font>{{child.info}}
                </div>
                <div class="detail">
                  <font class="fontBold">职责：</font>{{child.duty}}
                </div>
                <div class="detail">
                  <font class="fontBold">技术：</font>{{child.skill}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch } from 'vue-property-decorator'
import AccordionItem from '@/model/dto/AccordionItem'
import Cain from '@cain'
@Component
export default class AccordionList extends Vue {
  @Prop(Array) list;
  @Prop(String) title;

  listProxy: Array<AccordionItem> = [];

  @Watch('list', { immediate: true, deep: true })
  workListChange (newVal: Array<AccordionItem>, oldVal: Array<AccordionItem>) {
    this.listProxy = this.list.map(item => {
      item.itemId = Cain.getUUID()
      item.isShow = false
      return item
    })
  }

  toggleAccordionItem ($event, item) {
    item.isShow = !item.isShow
    this.$forceUpdate()
    // 显示时有动效
    if (item.isShow) {
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: $event.detail.y - 50
        })
      }, 100)
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/pages/resume/summer/style/common.scss";
.accordionListContainer {
  .accordion {
    .accordionItem {
      margin-bottom: 15px;
      padding: 1px;
      // border: 1px solid #50b3ff;
      background-clip:padding-box,border-box;
      background-origin:padding-box,border-box;
      background-image: linear-gradient(101deg, #50b3ff 24%, #84d043 96%);
      // border:1px transparent solid;
      border-radius: 4px;
      .title {
        border-radius: 4px;
        padding: 8px;
        display: flex;
        position: sticky;
        top: 45px;
        background-color: #fff;
        z-index: 99;
        span {
          flex: 1;
        }
        font {
          font-size: 13px;
        }
        &.isShow{
          border-bottom-left-radius: 0px;
          border-bottom-right-radius: 0px;
        }
        &::after {
          content: " ";
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABnklEQVR4Xu3azVEDMQwFYGkpAEpIB3CNw9YAJUALNECogBJCB6SHhd0caQXusZi98DNkOMnSc6wUYOt9lvbgmKnxHzeenwIgOqBxgRiBxhsgPoIxAjECygIppYuO6J6IFizyMEzTVnkL1eXUR6BPaUvMV19VitwO4/ikWrXiYuoAl6vVGxOd/6oRGEEdoF8ur6nrnv8cEiiCOsAcvE/phpg3NSAUAagJoRhALQhFAWpAKA6AjmACgIxgBoCKYAqAiGAOgIbgAoCE4AaAguAKgIDgDuCNAAHgiQAD4IUABeCBAAfwH0Le7+9ed7tHxRsx3P8FDl6q5Pw+TNNZOwBEG+LvJhWRj5dxPD16gJ+nLyI0I7AI5ZyPfwSs7xOhPoLW4edRggHwCA8D4BUeAsAzvDuAd3hXAITwbgAo4V0AkMKbA6CFNwVADG8GgBreBAA5fHEA9PBFAWoIXwyglvBFAJp/JBXP5Fp/KDk/lT0hWgvzgnNeN/dUVvPG1mItmCsxi7CH9ggAL3mUfaMDUE7Cq47oAC95lH2jA1BOwquOTy3GPVCReXKAAAAAAElFTkSuQmCC")
            no-repeat;
          background-size: 100% 100%;
          width: 20px;
          height: 20px;
          display: inline-block;
          vertical-align: middle;
          transition: 0.5s all;
        }
        &.isShow::after {
          transform: rotate(90deg);
        }
      }
      .contentWrap {
        padding: 10px 4px 4px 4px ;
        background-color: #fff;
        animation: all 0.7s;
        min-height: 100px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        .content {
          line-height: 30px;
          padding: 5px;
          .detail {
            margin: 20px 0;
          }
          .item + .item {
            & .hr {
              width: 80%;
              height: 1px;
              margin: auto;
              background-color: #666161;
            }
          }
        }
      }
    }
  }
}
</style>
