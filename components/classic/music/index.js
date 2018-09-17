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

attached:function()
{
  this._recoverStatus()
  this._monitorSwitch()
}
,
detached:function(event)
{
  //mMgr.stop()
  //console.log("this is detached");
 // this._recoverStatus();
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
    },
    //回复逻辑状态
    _recoverStatus:function(){
      //调试
      // console.log(mMgr.paused);
      // console.log(mMgr.src);
      // console.log(this.properties.src);
      
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (mMgr.src == this.properties.src) {
        if (!mMgr.paused) {
          this.setData({
            playing: true
          })
        }
      }
    },
    //出现操控音乐界面是 对界面操作小程序图标也改变
    _monitorSwitch:function()
    {
      //播放状态
      mMgr.onPlay(()=>{
        this._recoverStatus()
      })
      //停止操控界面或小程序界面
      mMgr.onPause(() => {
        this._recoverStatus()
      })
      //x关掉操控界面
      mMgr.onStop(() => {
        this._recoverStatus()
      })
      //一首歌放完的状态
      mMgr.onEnded(() => {
        this._recoverStatus()
      })
    }
  }
})
