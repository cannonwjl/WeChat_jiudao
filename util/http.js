//---import /config.js under project of config and function of fun1
//import {config ,fun1} from '/config.js'
import {config} from '/config.js'
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
        }
     })
     success:(res)=>
     {
       //startsWith
       //endsWith
       let code=res.startsWith
       if(code.startsWith('2'))
       {

       }else
       {

       }

     },
     fail:(err)=>{

     };
       

   }
}