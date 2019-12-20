import Cain from '@cain'
import ResumeMap from '@/model/dto/ResumeMap'
/**
 * @class ResumeService
 */
class MyService {
  // isShow:boolean =false;
  // projectList:Array<Object> = [];
  // title:String='';
  // subTitle:String='';
//   constructor () { }
  // 通过resumecode对应信息
  getCVInfoByUserId (userId: string) {
    console.log(userId)
    return Cain.post(`service/resume/damao.json`)
    // return new Promise(async (resolve, reject) => {
    //   if (!userId) {
    //     resolve(undefined)
    //     return
    //   }

    //   resolve()
    //   const arrayRes:Array<ResumeMap> = await Cain.post(`service/resumeMap.json`) as Array<ResumeMap>
    //   resolve(arrayRes.find(item => item.code === code))
    // })
  }
//   // 获取resume详情
//   getResumeByName (name: string) {
//     return Cain.post(`service/resume/${name}.json`)
//   }
//   // 获取模板列表信息
//   getTemplateList () {
//     return Cain.post(`service/templateList.json`)
//   }
}

export default MyService
