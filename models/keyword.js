import {HTTP} from '../util/http-p.js'

class KeywordModel extends HTTP{
  key='q'
  maxLength=10
  
  getHistory(){
    const words=wx.getStorageSync(this.key)
      if(!words)
      {
       return []
      }
      return words
  }

  getHot() {
    return this.request({
      url: '/book/hot_keyword'
    })
  }

  addToHistory(keyword){
      let words = this.getHistory()
      const has =words.includes(keyword)
      //队列 栈

      //为了增加体验 历史数据不能无限增长 可以限制长度
      if(!has){
        //数组末尾删除，keyword 数组第一位
        const length=words.length
        if(length>=this.maxLength)
        {
          words.pop()
        }
        words.unshift(keyword)
        wx.setStorageSync(this.key, words)
      }
      
  }
}
export {KeywordModel}