import {HTTP} from '../util/http.js'

class LikeModel extends HTTP{
  like(behavior,artID,category){
    let url = behavior === 'cancel' ? 'like/cancel' : 'like'
    this.request({
      url: url,
      method: 'post',
      data:{
        art_id:artID,
        type:category,
      },
      success: (data) => {
        console.log(data)
      }
    })
  }
}

export {LikeModel}