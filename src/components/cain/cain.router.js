let router = {
  storageKey: 'cainRouter',
  // 通过映射值查找对应的数据
  getPageInfo (value) {
    let url = value.split('?')[0]
    let list = wx.getStorageSync(this.storageKey)
    let res = list.find((item) => {
      if (item.url === url) {
        return item
      }
    })
    if (res) {
      return res
    }
    return false
  },
  // 把参数格式化成MpVue能用的参数
  formatePages (list) {
    // return new Promise((resolve, reject) => {
    let pages = []
    // let startPageFlag = false
    let firstPage = null
    for (let item of list) {
      if (item.indexPage) {
        firstPage = item.component
      } else {
        pages.push(item.component)
      }
    }

    wx.setStorageSync('cainRouter', list)
    pages = pages.reverse()
    if (firstPage) {
      pages.unshift(firstPage)
    }

    return pages
  }

}
export default router
