// components/search/index.js
import {
  KeywordModel
} from '../../models/keyword.js'
import {
  BookModel
} from '../../models/book.js'
import {
  paginationBev
} from "../behaviors/pagination.js"
// "../behaviours/pagination.js"
const keywordModel = new KeywordModel()
const bookModel = new BookModel()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [paginationBev],
  properties: {

    more: {
      type: String,

      observer: 'loadmore'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords: [],
    hotWords: [],
    // dataArray:[],
    searching: false,
    q: "",
    loading: false,
    loadingCenter: false
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
        hotWords: res.data.hot
      })
      // console.log("+++++++++++++++++++++++++++++++++++++" + hotWords)
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    loadmore(event) {
     // console.log(1232)
      if (!this.data.q) {
        return
      }
      if (this.isLocked()) {
        return
      }
      // 同时发送俩个请去 一次只请求
      // const length = this.data.dataArray.length

      if (this.hasMore()) {
        this.Locked()
        bookModel.search(this.getCurrentStart(), this.data.q)
          .then(res => {
            //const tempArray=this.data.dataArray.concat(res.data.books)
            this.setMoreData(res.data.books)
            // this.setData({
            //   dataArray: tempArray,
            // })
            this.unLocked()
            // 

            // this.unLocked()
          }, () => {
            this.unLocked()
          })
      }

      // 死锁
      //this.data.dataArray
      //res.data.book
      // this.setMoreData(res.data.books)

      // const tempArray=this.data.dataArray.concat(res.data.books)
      // this.setData({
      //   dataArray:tempArray,
      //   loading:false
      // })
      // })
      //20
      //20
      //40   60 

    },
    onCancel(event) {
      this.triggerEvent('cancel', {}, {})
      this.initialize()
    },
    onDelete(event) {
      this.initialize()
      this._closeResult()

    },

    onConfirm(event) {
      // const word=event.detail.value
      // this.setData({
      //   searching: true
      // })
      this._showResult()
      this.initialize()
      this._showLoadingCenter()
      const q = event.detail.value || event.detail.text
      this.setData({
        q: q
      })
      bookModel.search(0, q)
        .then(res => {
          this.setMoreData(res.data.books)
          this.setTotal(res.data.total)
         
          keywordModel.addToHistory(q)
          this._hideLoadingCenter()
        })

    },
    _showResult()
    {
      this.setData({
        searching: true
      })
    },
    _closeResult() {
      this.setData({
        searching: false,
        q:''
      })
    },
    _isLocked(){
      return this.data.loading?true:false
    },
    //这里写了locked但是调用了behavior下的Locked
    _locked(){
      //this.data.loading=true
      this.setData({
        loading: false
      })
          },
     _unlocked() {
      //this.data.loading = false
      this.setData({
        loading:false
      })
    },
    _showLoadingCenter(){
      this.setData({
        loadingCenter:true
      })
    },
    _hideLoadingCenter() {
      this.setData({
        loadingCenter: false
      })
    }
  }
})