import {HTTP} from '../util/http.js'//相对路径

class ClassicModel extends HTTP{
  getLatest(sCallback){
    //来着classic.jsc
    this.request({
      url: "/classic/latest",
      success: (res) => {
        console.log("this is classic.js  "+res);
        sCallback(res);
      }
    })
    console.log('111111111')
  }

  getPrevious(index,sCallback){
    this.request({
       url:'classic/'+index+'/previous',
       success:(res)=>{
         sCallback(res)
       }
    })
  }
}

export {ClassicModel}