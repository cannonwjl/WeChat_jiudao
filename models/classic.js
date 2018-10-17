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

        //第一次写入是强置加载
        let key=this._getKye(res.data.index)
        wx.setStorageSync(key, res)
      }
    })
  //  console.log(res.data.index)
  }
//获取下一期或者上一期
//
  getClassic(index,nextOrPrevious,sCallback){
    //缓存中寻找 OR API写入缓存
    //key 确定key
    //引入缓存系统
    let key =nextOrPrevious=='next'?this._getKye(index+1):this._getKye(index-1);
    let classic=wx.getStorageSync(key)
    if(!classic)
    {
      this.request({
        //模板字符串应用
        //以下下代码用了模板字符串等效为 url: 'classic/' + index + '/' + nextOrPrevious,
        url: `'classic/ ${index}/${nextOrPrevious} `,
        success: (res) => {
          wx.setStorageSync(this._getKye(res.data.index), res)
          sCallback(res)
        }
      })
    }
    else{
      sCallback(classic)
    }
    
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
  getMyFavor(success) {
    const params = {
      url: 'classic/favor',
      success: success
    }
    this.request(params)
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


  _getKye(index){
     let key = 'classic-' +index
     return key 
  }
}

export {ClassicModel}