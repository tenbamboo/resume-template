import Cain from '@cain'
import ResumeMap from '@/model/dto/ResumeMap'
/**
 * @class ResumeService
 */
class ResumeService {
  // isShow:boolean =false;
  // projectList:Array<Object> = [];
  // title:String='';
  // subTitle:String='';
//   constructor () { }
  // 通过resumecode对应信息
  getResumeCode (code: string) {
    return new Promise(async (resolve, reject) => {
      if (!code) {
        resolve(undefined)
        return
      }
      const arrayRes:Array<ResumeMap> = await Cain.post(`service/resumeMap.json`) as Array<ResumeMap>
      resolve(arrayRes.find(item => item.code === code))
    })
  }
  // 获取resume详情
  getResumeByName (name: string) {
    return Cain.post(`service/resume/${name}.json`)
  }
}

export default ResumeService
