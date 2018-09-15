// components/classic/music/index.js
import { classicBeh } from '../classic-beh.js'
var mMgr=wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  //继承classic-beh.js下的属性
  behaviors: [classicBeh],
  //那么下面的img和content就可以删除了
  properties: {
    //  img:String,
    //  content:String
    playing:Boolean,
    src:String
  },

  /**
   * 组件的初始数据
   * 
   */
  data: {
        pauseSrc:'images/player@waitting.png',
        playSrc:'images/player@playing.png'
  },


detached:function(event)
{
  //mMgr.stop()
},
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(){
      //图片切换
      console.log("this is onPlay");
      if (!this.properties.playing)
      {
      //this.properties.playing = !this.properties.playing;
      this.setData({
        playing:true
      })
      mMgr.src=this.properties.src;
      }
      else
      {
        this.setData({
          playing: false
        })
        mMgr.pause();
      }
    }
  }
})
