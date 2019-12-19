
// 工作年限计算
export function workAgeFilter (year) {
  if (year) {
    const now = new Date()
    const res:number = now.getFullYear() - year
    if (res <= 0) {
      return '未毕业'
    }
    return res + '年'
  }
  return '暂无'
}
