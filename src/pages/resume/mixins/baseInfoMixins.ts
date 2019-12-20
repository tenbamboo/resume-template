import { Vue, Component } from 'vue-property-decorator'
import ResumeService from '@/model/service/ResumeService'

@Component
export default class BaseInfoMixins extends Vue {
    baseInfo: any = {};
    resumeService:ResumeService = new ResumeService();
    homeBtnAnimating:Boolean = false

    async getData () {
      this.baseInfo = await this.resumeService.getResumeByName(this.$mp.query.name)
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
