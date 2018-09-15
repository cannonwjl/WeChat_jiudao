
//共用的行为 可以用behavior 来提取
 //behavior是多继承的机制  behaviors: [classicBeh，be1,be2],  当继承多来时注意同名覆盖问题
  //当porperties下有img时 会覆盖继承过来的img即子类覆盖父类  
  //当porperties下没有img时  而 都有behaviors: [classicBeh，be1,be2]都有img时 最后一个生效
   //注意只有attached什么周期函数 不会覆盖 而是一个一个执行。
//构造的行为要用变量来接受
//behavior  和 components没有区别
let classicBeh = Behavior({
  properties: {
    img: String,
    content: String,
    hidden: Boolean
  },
  data:{

  },
  methodes:{

  },
})


export {classicBeh}