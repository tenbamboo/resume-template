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
      const arrayRes:Array<ResumeMap> = await Cain.get(`service/resumeMap.json`) as Array<ResumeMap>
      resolve(arrayRes.find(item => item.code === code))
    })
  }
  // 获取resume详情
  getResumeByName (name: string) {
    return Cain.get(`service/resume/${name}.json`)
  }
  // 获取模板列表信息
  getTemplateList () {
    return Cain.get(`service/templateList.json`)
  }
}

export default ResumeService
