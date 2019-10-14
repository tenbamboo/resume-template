<template>
  <div class="accordionListContainer area">
    <p class="title">{{title}}</p>
    <div class="accordion">
      <div class="accordionItem"
        v-for="(item,index) in listProxy"
        :key="index">
        <p class="title"
          :class="item.isShow == true?'isShow':''"
          @click="toggleAccordionItem(item)">
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
</template>

<script lang="ts">
import { Vue, Prop, Component, Watch } from 'vue-property-decorator'
import AccordionItem from '@/model/dto/AccordionItem'
@Component
export default class AccordionList extends Vue {
  @Prop(Array) list;
  @Prop(String) title;

  listProxy: Array<AccordionItem> = [];

  @Watch('list', { immediate: true, deep: true })
  workListChange (newVal: Array<AccordionItem>, oldVal: Array<AccordionItem>) {
    this.listProxy = this.list.map(item => {
      item.isShow = false
      return item
    })
  }

  toggleAccordionItem (item) {
    item.isShow = !item.isShow
    this.$forceUpdate()
  }
}
</script>

<style scoped lang="scss">
.accordionListContainer {
  .accordion {
    .accordionItem {
      margin-bottom: 15px;
      padding: 5px;
      border: 1px solid #666161;
      border-radius: 4px;
      .title {
        display: flex;
        padding: 5px;
        span {
          flex: 1;
        }
        font{
          font-size:13px;
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
        margin-top: 10px;
        animation: all 0.7s;
        min-height: 100px;
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
