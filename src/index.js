import Header from './header'
import Sidebar from './sidebar'
import Content from './content'
import img from './luffy02.jpg'
import './index.css'
// import './luffy.scss'
import style from './luffy.scss'  // 开启css文件模块化打包
import './font/iconfont.css'
console.log(img)
console.log(style)

new Header()
new Sidebar()
new Content()

var pic = new Image()
// pic.src = './dist/' + img
pic.src = img
// pic.classList.add('img-style')
pic.classList.add(style['img-style'])
var dom = document.getElementById('root')
dom.after(pic)

dom.innerHTML = '<i class="iconfont icon-ceshi"></i>'

// var a = 123; console.error(666)
console.log(88888)

// 模块热更新
var html = document.createElement('div')
html.innerHTML = '<button id="btn">点我</button>'
dom.after(html)

var btn = document.getElementById('btn')
btn.onclick = function() {
  var text = document.createElement('p')
  text.innerHTML = '<p class="title">点我啦</p'
  btn.after(text)
}

if (module.hot) { // 一般loader内会内置这种功能
  module.hot.accept('./header', ()=>{

  })
}