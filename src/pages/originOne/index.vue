<template>
  <div class="originOneContainer">
    <banner :baseInfo="baseInfo.baseInfo" />

    <about-me :baseInfo="baseInfo.baseInfo" />

    <certificate :certificateList="baseInfo.certificateList" />

    <accordion-list :list="baseInfo.workList"
      :title="'工作经验'" />

    <accordion-list :list="baseInfo.otherWork"
      :title="'其他作品'" />

    <skill-list :skillList="baseInfo.skillList" />

    <star-list :starList="baseInfo.starList" />

    <contact-list  :baseInfo="baseInfo.baseInfo" :isShowContact="baseInfo.isShowContact" />

    <thanks />

    <power-by/>

  </div>
</template>

<script lang="ts">
import Banner from './components/banner.vue'
import AboutMe from './components/aboutMe.vue'
import Certificate from './components/certificate.vue'
import AccordionList from './components/accordionList.vue'
import SkillList from './components/skillList.vue'
import StarList from './components/starList.vue'
import ContactList from './components/contactList.vue'
import Thanks from './components/thanks.vue'
import PowerBy from './components/powerBy.vue'

import { Vue, Component } from 'vue-property-decorator'

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
export default class My extends Vue {
  baseInfo = {
    isShowContact: true,
    certificateList: [
      {
        name: 'PMI-ACP(敏捷认证)'
      }
    ],
    workList: [
      {
        title: 'IBM',
        subTitle: '2018年9月~至今',
        projectList: [
          {
            projectName: '中国移动供应链系统',
            duty: '前端TL',
            info:
              '二次封装ElementUI组件，编写业务代码，协助解答其他伙伴的前端技术问题',
            skill: 'Java,微服务,Vue,ElementUI'
          },
          {
            projectName: '华为内部项目',
            duty: '前端TL、Scrum master',
            info:
              '管理并查看整个CBG产品线的生命周期，通过敏捷的方式与团队成员一起合作完成项目。编写符合项目的共通组件',
            skill: 'Java,微服务,Vue,ElementUI'
          }
        ]
      },
      {
        title: '倍通健康',
        subTitle: '2017年9月~2018年9月',
        projectList: [
          {
            projectName: '医学众包',
            duty: '前端架构、前端开发',
            info: '内部项目',
            skill: '小程序,Mpvue,Java,Vue'
          },
          {
            projectName: '内部数据爬虫项目',
            duty: '数据分析爬取数据',
            info:
              '通过此项目极大减少人力成本，之前在无此项目时，公司通过人工形式获取各个网站数据，并整理分析。',
            skill: 'Java,Vue'
          },
          {
            projectName: '内部流程项目',
            duty: '整理优化并重写项目代码（ES6）',
            info: '内部流程项目，维护之前老代码，并优化为ES6的新代码。',
            skill: 'Java,Vue'
          },
          {
            projectName: '磷界点医疗社区（公众号）',
            duty: '前台架构，PC端前端业务代码',
            info: '维系医院、医生、护士、病友的社区。',
            skill: 'Java,Vue,ES6,Webpack'
          }
        ]
      },
      {
        title: '东软集团',
        subTitle: '2016年3月~2017月09月',
        projectList: [
          {
            projectName: '上海福利彩票即开票系统',
            duty: '前台架构，组件二次封装，封装自有UI库',
            info:
              '彩票行业，本系统囊括即开票（刮刮乐）的整个生命周期，主要包含：创建、印刷、分发、调拨、兑奖、销毁等。',
            skill: 'Java,Jquery,Pjax'
          },
          {
            projectName: '蓝熙健康、绿城健康社区',
            duty:
              '前台架构，组件二次封装，与客户协调和沟通需求，细化需求，并抽离需求给相关开发人员',
            info:
              '医疗行业，使用相关检测设备（血糖仪，血压仪等）检测之后上传到云端，再推送到设备的关注者，让关注者实时了解使用的数据。以此衍生附属功能，比如月度报表、分析数据并给出改善病情的建议、专属家庭医生和健康管理师实时解答相关问题等功能。',
            skill: 'Java,Jquery,Pjax'
          },
          {
            projectName: '彩票O2O项目',
            info:
              '通过Cordova和相关Plugin来封装成IOS和Android的APP,并实现门店端和用户端整个前端页面逻辑 ',
            duty: '调研需求，前台架构，组件二次封装，后期的维护',
            skill: 'Cordova,Java,Jquery,Pjax'
          }
        ]
      },
      {
        title: '大连楼兰',
        subTitle: '2015年5月~2016年3月',
        projectList: [
          {
            projectName: '公司内部微信服务号',
            duty: 'Demo原型编写，前端业务代码',
            info: '公司内部流程',
            skill: 'Java,Jquery'
          },
          {
            projectName: '内部项目',
            duty:
              '优化之前老代码，提升代码的可阅读性，并已插件的形式支持各个模块',
            info: '内部流程项目，主要是维护代码',
            skill: 'Java,Jquery'
          },
          {
            projectName: '预言性项目（PICC合作）',
            duty: '复用之前的插件来开发，前端开发，前端简单架构',
            info:
              '此项目是预言性项目，公司和保险公司合作，监控车辆详细数据，并生成第二年的保单。',
            skill: 'Java,Jquery'
          }
        ]
      },
      {
        title: '博彦科技',
        subTitle: '2014年3月~2015年5月',
        projectList: [
          {
            projectName: '外派IBM',
            duty: '前端业务代码',
            info: '内部孵化项目，通过WorkLight来Hybrid开发想法池的需求',
            skill: 'Cordova,Java,Jquery'
          }
        ]
      },
      {
        title: '中软国际',
        subTitle: '2013年3月~2014年3月',
        projectList: [
          {
            projectName: '中信证劵对外服务平台',
            duty: '按模块开发（前后端）',
            info:
              '本项目是为各个劵商提供信息和咨询的分析上传和下载，通过客户端来自动分发信息。',
            skill: 'Flex,Java'
          },
          {
            projectName: '英大财险微信公众平台',
            duty: '前端业务代码',
            info: '本项目通过通过微信关注英大财险公众平台来投保车险等。',
            skill: 'JqueryMobile,Jquery,Java'
          }
        ]
      }
    ],
    otherWork: [
      {
        title: '51惠补',
        subTitle: '微信小程序',
        projectList: [
          {
            projectName: '线下商铺优惠补贴',
            duty: '独立前端开发',
            info:
              '本项目为线下商铺实现导流进店、支付、评价、再次消费的整个闭环流程 ',
            skill: '小程序，MpVue,Vue,Java'
          }
        ]
      },
      {
        title: '大连红娘',
        subTitle: '微信公众号',
        projectList: [
          {
            projectName: '本地相亲交友平台',
            duty: '独立前端开发',
            info: '大连本地相亲交友平台',
            skill: 'Vue,Java'
          }
        ]
      },
      {
        title: '福寿康乐园',
        subTitle: '微信公众号',
        projectList: [
          {
            projectName: '养老院关怀项目',
            duty: '独立前端开发',
            info:
              '通过鱼跃云设备来上传检测数据，并实时推送给老人的家人，使家人能实时获取老人在养老院中的近况',
            skill: 'Java,Jquery,Pjax'
          }
        ]
      },
      {
        title: '臻田健康',
        subTitle: '微信公众号',
        projectList: [
          {
            projectName: '保健品销售',
            duty: '独立前端开发',
            info: '通过医疗设备上传数据，定制保健品方案',
            skill: 'Java,Jquery,Pjax'
          }
        ]
      },
      {
        title: '嗖嗖汽配',
        subTitle: '管理平台',
        projectList: [
          {
            projectName: '汽配后市场项目',
            duty: '与其他伙伴共同前端开发',
            info:
              '定位汽配后市场，来搭建后市场的O2O，通过此项目，和其他前端伙伴一起在闲时开发共同完成的项目',
            skill: 'Java,Jquery'
          }
        ]
      }
    ],
    baseInfo: {
      enName: 'Tom.Wang',
      title: 'FE Engineer',
      name: '小明',
      sex: '男',
      birthday: '1999/10/14',
      diploma: '本科',
      school: '清华大学计算机系',
      workAge: '6年',
      location: '大连',
      wantPosition: '前端工程师、全栈工程师',
      salary: '100.5K ~ 120K',
      mobilePhone: '1333333333',
      email: 'abc@163.com',
      wechatNo: 'mc_fly',
      github: '@tenbamboo',
      githubUrl: 'https://github.com/tenbamboo'
    },
    skillList: [
      '前端框架： Vue / Jquery / AngularJS / React',
      'Web开发：Java / NodeJs',
      'Web框架：SSI / express',
      'CSS框架：Bootstrap  / ElementUI',
      'CSS预处理器：Sass / LESS / Stylus',
      '构建工具：Webpack / Bower  / Grunt ',
      'Hybird开发：Cordova / Ionic',
      '数据库相关：MySQL / Oracle / IndexedDB',
      '版本管理：Svn / Git',
      '测试：Selenium / Junit',
      '微信：公众号开发 / 小程序开发',
      '图表工具：HighChars / EChars / D3'
    ],
    starList: [
      {
        name: 'JavaScript',
        star: 4
      },
      {
        name: 'Css3',
        star: 4
      },
      {
        name: 'Html5',
        star: 4
      },
      {
        name: 'Jquery',
        star: 4
      },
      {
        name: 'Vue',
        star: 4
      },
      {
        name: '小程序',
        star: 4
      },
      {
        name: 'Bootstrap',
        star: 4
      },
      {
        name: 'Cordova',
        star: 4
      },
      {
        name: 'Git/SVN',
        star: 4
      },
      {
        name: 'Charts',
        star: 4
      },
      {
        name: 'Webpack',
        star: 3
      },
      {
        name: 'Java',
        star: 3
      },
      {
        name: 'NodeJs',
        star: 3
      },
      {
        name: 'Ionic',
        star: 3
      },
      {
        name: 'Mysql',
        star: 3
      },
      {
        name: 'AngularJS',
        star: 2
      },
      {
        name: 'React',
        star: 2
      },
      {
        name: 'Python',
        star: 2
      }
    ]
  };
  color = '#007d37';
  acc = 'hello bigMeow';

  async beforeCreate () {
    console.log('Page [my] Vue beforeCreate')
  }

  created () {
    console.log('Page [my] Vue created')
    const appInstance: any = getApp()
    console.log(appInstance.globalData) // I am global data
  }

  beforeMount () {
    console.log('Page [my] Vue beforeMount')
  }

  mounted () {
    console.log('Page [my] Vue mounted')
  }

  onLoad (options) {
    // Do some initialize when page load.
    console.log('Page [my] onLoad')
  }

  onReady () {
    // Do something when page ready.
    console.log('Page [my] onReady')
  }

  onShow () {
    // Do something when page show.
    console.log('Page [my] onShow')
  }
  onHide () {
    // Do something when page hide.
    console.log('Page [my] onHide')
  }

  onUnload () {
    // Do something when page close.
    console.log('Page [my] onUnload')
  }
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  changeStat () {
    this.color = '#' + Math.floor(Math.random() * 0xffffff).toString(16)
  }
}
</script>

<style lang="scss" scoped>
.originOneContainer {
  background: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx4BBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/AABEIAZwBnAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APsegYUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHxr/wUx/5p/wD9xL/21oEfZVAwoAKACgAoAKACgAoAhcn7WgycbaAJqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA+Nf+CmP/NP/wDuJf8AtrQI+yqBhQAUAFABQAUAFABQAwoDKJMnIGMUAPoAKACgAoAKACgAPAyaAIPOdyREm4DuaBC+cyHEqbQe46UDJqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA+Nf+CmP/NP/wDuJf8AtrQI+yqBhQAUAFABQAUAFABQAUAFABQAUAFABQAUAQ3ZIiwO5xQBKqhVCjoKAB1DKVPQ0AR2pJhGexxQBLQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAEc8nlxkjqelADo/9Wv0FADqACgAoAKACgAoA+Nf+CmP/NP/APuJf+2tAj7KoGFABQAUAFABQAUAFABQAUAFABQAUAFABQAyVPMjK/lQBGk20bZQVYd/WgQPNvGyHLE9/SgZJEnlxhfSgB9ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAVJMyh5P4V4WgRZj/1a/QUDHUAFABQAUAFABQB8a/8ABTH/AJp//wBxL/21oEfZVAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgBCAeoBoAAAOgAoAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAILl+kYOC3U+goAJSgtiisDgetAiWP/Vr9BQMdQAUAFABQAUAFAHxr/wUx/5p/wD9xL/21oEfZVAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAIpBKG3odw7qaAHRSq/A4buD1oAfQAUAFABQAUAFABQAUAFABQAUAFABQAxoo2YllyT70AJ5EX9wfnQA8AAADoKAFoAKACgAoAKACgD41/wCCmP8AzT//ALiX/trQI+yqBhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFADJIlfnow6EdaACISAEOQcdCO9AD6ACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA+Nf+CmP/ADT/AP7iX/trQI+yqBhQAjsqLuY4FAFcyyn96F/djt60CLCsGUMDkGgYtABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHxr/wUx/5p/8A9xL/ANtaBH2VQMKAK9wuJBIwLJ6elAiYsuzcSNuKBkNtnzG2A+X70CLFAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD41/4KY/8ANP8A/uJf+2tAj7KoGFACEAggjINAEAtzu2sxMYOQKBFgAAYAwKBhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB8a/8ABTH/AJp//wBxL/21oEfZVAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPjX/gpj/zT/8A7iX/ALa0CPsqgYUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAFeWcrIVVQcdc0CJ0YMoYdCKBi0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAfGv/BTH/mn/wD3Ev8A21oEfZVAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAI5IUdtxBz3wetADwABgdBQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAjHCk4zgUAJG29A2MZoAdQAUAFABQAUAFABQAUAFAHxr/wUx/5p/wD9xL/21oEfZVAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAhtf9WV/usRQBNQAUAFABQAUAFABQAUAFAHxr/wUx/5p/wD9xL/21oEfZVAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAhjnDSFTwD90+tAE1ABQAUAFABQAUAFABQAUAFABQBDFkTSjscGgCagAoAKACgAoAKACgAoAKAPjX/gpj/zT/wD7iX/trQI+yqBhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAENyxwI1+838qAFaFTEE9OhoASCQ58uThx+tAE1ABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB8a/wDBTH/mn/8A3Ev/AG1oEfZVAyEpOSf3oAz2FAD4lZQQzlsnvQA+gAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCCdWV/OTkjqPagCQSKY/MzxQAy3UsTK3VunsKAJqACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD41/4KY/8ANP8A/uJf+2tAj7KoGFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAFd4Dv+XhGPzCgRYHAwKBhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAfGv/BTH/mn/AP3Ev/bWgR9lUDCgAoAKACgAoAKACgAoAill8tlBXIPpQA9JEcfK2aAHUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAfGv/BTH/mn/AP3Ev/bWgR9lUDCgAoAKACgAoAKACgAoAhf/AI+o/oaAEnjiA3n5D6igBbYyFcufl7Z60ATUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFACEgdSB9aAAEHoQaAFoAKAPjX/gpj/wA0/wD+4l/7a0CPsqgYUAFABQAUAFABQAUAFAFeVwlzuPZaBCxxs7eZN+C+lAyegAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAZK/lxlvyoAjSHcN8uWY9vSgQPDtG+LKsO3rQMkiffGG9aAH0AfGv/BTH/mn/wD3Ev8A21oEfZVAwoAKACgAoAKACgAoAKAGeWvmmQ8nt7UAPoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCK4RnjAUZIOaAJaACgAoAKAPjX/gpj/zT/8A7iX/ALa0CPsqgYUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFADZHVACx6nFAAjq4yrA0AOoAKACgAoAKACgAoAKACgAoAKACgAoAa4Yqdpwe1ADLfeVLOTknoe1AEtABQAUAFABQAUAFABQAUAFABQAUAFAHxr/wUx/5p/wD9xL/21oEfZVAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAIbiNpMbSOOxoAW2Qoh3DBJoAloAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA+Nf+CmP/ADT/AP7iX/trQI+yqBhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAfGv8AwUx/5p//ANxL/wBtaBH2VQMKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD41/4KY/80/8A+4l/7a0CPsqgYUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHxr/wAFMf8Amn//AHEv/bWgR9lUDCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA+Nf+CmP/NP/wDuJf8AtrQI+yqBhQAUAFABQAUAFABQAUAFABQAUAFAEcsgQYAyx6CgB46DIxQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAfGv/AAUx/wCaf/8AcS/9taBH2VQMKACgAoAKACgAoAKACgAoAKACgCKWXB2INzn9KAFii2fMx3OepoAkoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAGs6L95gPxoAcORkUAFABQAUAFABQAUAFABQAUAFABQAUAfGv/BTH/mn/wD3Ev8A21oEfZVAwoAKACgAoAKACgAoAKACgAoAKAGqiqSQACetADqACgAoAKACgAoAKACgAoAKAEdgilmOBQAtABQAUAFABQAUAFABQAUAFABQAUAQTZeZYgSBjJxQA5YIh/Dn60AMUmB9jcoeh9KBFigYUAFABQAUAFABQAUAFABQAUAFAHxr/wAFMf8Amn//AHEv/bWgR9lUDCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCG8/1X4igCagAoAKACgAoAKACgAoAKACgAoAKAK+fLuSX6PwD6UCLFAyCT57hE7L8xoET0DCgAoAKACgAoAKACgCvek7VwTQIli2iMKpBxxxQMfQAUAfGv8AwUx/5p//ANxL/wBtaBH2VQMKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgBGZVGWIAoAZ50X98UARXMiPHhWBOaBFmgYUAFABQAUAFABQAUAFABQAUAFADXVXXaw4oAiEDYw0rY9BQBJHEkeSucnuTQA+gAoAKACgAoAKACgAoAiuVUxljnKg4oAdCuyIDv3oAfQAUAfGv/BTH/mn/wD3Ev8A21oEfZVAwoAKACgAoAQso6kD6mgBqyxs20MCaAH0AFABQAUAFABQAUAFABQAUAFABQAUAFACMqt95QfqKAE8tP7i/lQAeWn9xfyoAdQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAI6hlwelAC0AFABQB8a/8ABTH/AJp//wBxL/21oEfZVAwoAKACgAoAguFBmjJGQTg0CCVVjliKgAZxxQBPQMKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPjX/gpj/zT/wD7iX/trQI+yqBhQAUAFABQBDd/6sN/dYGgAu+YQw7EGgCYHIzQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAJkZx3oAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA+Nf+CmP/NP/wDuJf8AtrQI+yqBhQAUAFABQAycZhYe1AEJkLw7BGx4xnFAieLPlruGDigY6gAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCKWNmkVlYLtoAloAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPjX/gpj/zT/8A7iX/ALa0CPsqgYUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHxr/wUx/5p/wD9xL/21oEfZVAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPjX/AIKY/wDNP/8AuJf+2tAj7KoGFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAI5IUlRk9hQA2KRZFyOD3HpQA+gAoAKACgAoAKACgAoAKAPjX/AIKY/wDNP/8AuJf+2tAj7KoGFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAEUsZ3eZGcOP1oAWKQOMdGHUUASUAFABQAUAFABQAUAFAHxr/wAFMf8Amn//AHEv/bWgR9lUDCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAK0s0iSFfl46cUCLCkMoYdCKBi0AFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQA3Yu/fj5vWgB1ABQAUAFABQAUAFABQB8a/8ABTH/AJp//wBxL/21oEfZVAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgBrIjHLKCfcUAKAAMAACgBaACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA+Nf8Agpj/AM0//wC4l/7a0CPsqgYUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHxr/wUx/5p/8A9xL/ANtaBH2VQMKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAr3BkQ5DnYfQdKBCOhEZczsRjt3oAfbIVTc2ct/KgZNQAUAFABQAUAFABQAUAFABQAUAFABQBDOzF1iU43dTQA2RGhHmI7EDqCetAiwORmgYUAFABQAUAfGv/BTH/mn/AP3Ev/bWgR9lUDCgBu9N+zcN3pQA6gAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgBCAQQRkGgCv5LeYEzmPOf/AK1AizQMKACgAoAKACgAoAKACgAoAKACgAoAKAI5oy+GU4ZehoAYUlkwJCoUdh3oAnoAKACgAoAKAPjX/gpj/wA0/wD+4l/7a0CPsqgYUAReQvm78nrnHvQBLQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFAHxr/AMFMf+af/wDcS/8AbWgR9lUDCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA+Nf+CmP/NP/APuJf+2tAj7KoGFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB8a/8ABTH/AJp//wBxL/21oEfZVAwoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAPjX/gpj/zT/8A7iX/ALa0CD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegA/4bl/6pf8A+V//AO56AD/huX/ql/8A5X//ALnoAP8AhuX/AKpf/wCV/wD+56AD/huX/ql//lf/APuegDxr9pj45f8AC6P+Ef8A+KX/ALC/sf7T/wAv/wBp87zvK/6Zptx5Xvnd2xyAf//Z")
    repeat;
  font-size: 15px;
  & /deep/.area {
    padding: 10px;
    color: #000;
    & > .title {
      padding-bottom: 10px;
      border-bottom: 1px solid #3d3b3b;
      margin-bottom: 10px;
      font-size: 20px;
      &::before {
        content: " ";
        display: inline-block;
        border-left: 4px solid #3d3b3b;
        width: 1px;
        height: 20px;
        margin-right: 10px;
        margin-left: 5px;
        margin-top: -4px;
        vertical-align: middle;
      }
    }
  }
  & /deep/.accordion {
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
        }
      }
    }
  }
}
</style>
