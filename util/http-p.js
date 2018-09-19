//---import /config.js under project of config and function of fun1
//import {config ,fun1} from '/config.js'
import {config} from '../config.js'

const tips={
   1005:"不正确的开发者key",
   3000:"该期内容不存在",
   1:"抱歉，发生一个错误"
}

class HTTP
{
  //小程序里叫解构
  //以下代码加上花括号 以后变成了一个对象   
  //request({url, resolve, data = {}, method = 'GET'})
  request({url,resolve, data = {}, method = 'GET'})
     {
        return new Promise((resolve,reject)=>{
          this._request(url,resolve,reject,data,method)
          
        })
     }
   _request(url,resolve,reject,data={},method='GET'){
     // url ,data, method
 
     wx.request({
        url:config.api_base_url+url,
        method:method,
        data:data,
        header:{
          'content-type':"application/json",
          'appkey':config.appkey
        },
        success: (res) => {
         //startsWith
         //endsWith
          const code = res.statusCode.toString();
         if (code.startsWith('2')) {
          resolve(res)
         } else {
            //这里是服务去异常才会调用这里
            //提示错误信息
            // wx.showToast({
            //   title: '服务去异常错误',
            //   icon:"loading",
            //   duration:2000
            // })
            //提示错误 建立表从tip获取
           const error_code=res.data.error_code;
           reject()
            this._show_error(error_code)
         }

       },
       fail: (err) => {
          //API调用失败
          //提示错误信息
        //  wx.showToast({
        //    title: 'API调用失败错误',
        //    icon: "loading",
        //    duration: 2000
        //  })

        //提示错误 建立表从tip获取
         reject()
         this._show_error(1)
       }
     })
     
       

   }
   _show_error(error_code)
   {
     //提示错误信息
     if(error_code)
     {
       error_code=1;
     }
     const tip = tips[error_code]
     wx.showToast({
       title: tip?tip:tips[1],
       icon: "loading",
       duration: 2000
     })
   }
}

export {HTTP}