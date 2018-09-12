import {HTTP} from '../util/http.js'//相对路径

class ClassicModel extends HTTP{
  getLatest(sCallback){
    //来着classic.jsc
    this.request({
      url: "/classic/latest",
      success: (res) => {
        console.log("this is classic.js  "+res);
        sCallback(res);
        this._setLatestIndex(res.data.index);
        console.log(res.data.index);
      }
    })
  //  console.log(res.data.index)
  }
//获取下一期或者上一期
  getClassic(index,nextOrPrevious,sCallback){
    this.request({
      url: 'classic/' + index + '/' + nextOrPrevious,
       success:(res)=>{
         sCallback(res)
       }
    })
  }
  isFirst(index)
  {
    return index == 1 ? false : true
   // return true

  }
  isLatest(index)
  {
    let latestIndex=this._getLatestIndex();
    return latestIndex == index ? false:true
   // return true
  }

  _setLatestIndex(index)
  {
    //同步写入缓存
    wx.setStorageSync('latest', index)
  }
  _getLatestIndex()
  {
    //获取缓存
    let index=wx.getStorageSync('latest')
    return index
  }
}

export {ClassicModel}