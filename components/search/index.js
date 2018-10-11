// components/search/index.js
import {KeywordModel} from '../../models/keyword.js'
import { BookModel } from '../../models/book.js'
const keywordModel=new KeywordModel()
const bookModel = new BookModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
     historyWords:[],
     hotWords:[],
     dataArray:[],
     searching:false,
     q:""
  },

  // 生命周期函数 在组件初始化是调用
  attached() {
                      // KeywordModel
    //const historyWords=keywordModel.getHistory()
    //const hotWords=keywordModel.getHot()
    //console.log(historyWords)
    //console.log("++++++++++++++++"+hotWords)
    this.setData({
      historyWords: keywordModel.getHistory()
    })

    keywordModel.getHot().then(res => {
      this.setData({
        hotWords:res.hot
      })
      console.log("+++++++++++++++++++++++++++++++++++++"+res)
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(event)
    {
      this.triggerEvent('cancel',{},{})
    },
    onDelete(event)
    {

      this.setData({
        searching: false
      })
    },

    onConfirm(event)
    {
     // const word=event.detail.value
      this.setData({
        searching:true
      })
      const q=event.detail.value || event.detail.text
      bookModel.search(0,q)
      .then(res=>{
        this.setData({
          dataArray: res.books,
          q:q
        })
          
      })
      keywordModel.addToHistory(q)
    }
  }
})
