// components/classic/essay/index.js
import {classicBeh}  from '../classic-beh.js'
Component({
  /**
   * 组件的属性列表
   */
  //继承classic-beh.js下的属性
  behaviors:[classicBeh],
  //那么下面的img和content就可以删除了
  properties: {
   // img: String,
  //  content: String
  },
// behavior 行为
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
