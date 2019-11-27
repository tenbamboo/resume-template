import { Vue, Component } from 'vue-property-decorator'
import Cain from '@cain'

@Component
export default class BaseInfoMixins extends Vue {
    baseInfo: any = {};

    async getData () {
      this.baseInfo = await Cain.post(`${this.$mp.query.name}.json`)
      wx.setNavigationBarTitle({
        title: `${this.baseInfo.baseInfo.name}的简历`
      })
      wx.hideLoading()
      wx.showShareMenu({
        withShareTicket: true
      })
    }
    mounted () {
      this.getData()
    }
    created () {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
    }
}
