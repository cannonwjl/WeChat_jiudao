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
   request(params){
     // url ,data, method
     if(!params.method)
     {
       params.method="GET"
     }
     wx.request({
        url:config.api_base_url+params.url,
        method:params.method,
        data:params.data,
        header:{
          'content-type':"application/json",
          'appkey':config.appkey
        },
        success: (res) => {
         //startsWith
         //endsWith
         let code = res.statusCode.toString();
         if (code.startsWith('2')) {
           params.success(res)
         } else {
            //这里是服务去异常才会调用这里
            //提示错误信息
            // wx.showToast({
            //   title: '服务去异常错误',
            //   icon:"loading",
            //   duration:2000
            // })
            //提示错误 建立表从tip获取
           let error_code=res.data.error_code;
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
         this._show_error(1)
       }
     })
     
       

   }
   _show_error(error_code)
   {
     //提示错误信息
     wx.showToast({
       title: tips[error_code],
       icon: "loading",
       duration: 2000
     })
   }
}

export {HTTP}