import App from './App.vue'
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import VHtmlPlugin from '@megalo/vhtml-plugin'
import Vuex from 'vuex'

Vue.use(VHtmlPlugin)
Vue.use(Vuex)

const store = require('./store').default
Vue.prototype.$store = store

// https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
Component.registerHooks([
  'onLoad', // 监听页面加载
  'onShow', // 监听页面显示
  'onReady', // 监听页面初次渲染完成
  'onHide', // 监听页面隐藏
  'onUnload', // 监听页面卸载
  'onPullDownRefresh', // 监听用户下拉动作
  'onReachBottom', // 页面上拉触底事件的处理函数
  'onShareAppMessage', // 用户点击右上角分享
  'onPageScroll', // 页面滚动
  'onTabItemTap' // 当前是 tab 页时， 点击 tab 时触发
])

const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/originOne/index'
      // 'pages/my/my',
      // 'pages/vuex/vuex'
    ],
    // tabBar: {
    //   color: '#333',
    //   selectedColor: '#007d37',
    //   list: [
    //     {
    //       pagePath: 'pages/hello',
    //       text: 'home',
    //       iconPath: 'native/tabbar/home.png',
    //       selectedIconPath: 'native/tabbar/home_on.png'
    //     },
    //     {
    //       pagePath: 'pages/my/my',
    //       text: 'my',
    //       iconPath: 'native/tabbar/mine.png',
    //       selectedIconPath: 'native/tabbar/mine_on.png'
    //     },
    //     {
    //       pagePath: 'pages/vuex/vuex',
    //       text: 'vuex',
    //       iconPath: 'native/tabbar/vue.png',
    //       selectedIconPath: 'native/tabbar/vue_on.png'
    //     }
    //   ]
    // },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#303538',
      navigationBarTitleText: 'Test',
      navigationBarTextStyle: 'white'
    }
  }
}
