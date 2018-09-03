import {HTTP} from '../util/http.js'//相对路径

class ClassicModel extends HTTP{
  getLatest(sCallback){
    //来着classic.jsc
    this.request({
      url: "/classic/latest",
      success: (res) => {
        console.log(res);
        sCallback(res);
      }
    })
    console.log('111111111')
  }
}

export {ClassicModel}