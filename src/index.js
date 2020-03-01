import Header from './header'
import Sidebar from './sidebar'
import Content from './content'
import img from './luffy02.jpg'
// import './index.css'
// import './luffy.scss'
import style from './luffy.scss'  // 开启css文件模块化打包
import './font/iconfont.css'
console.log(img)
console.log(style)

new Header()
new Sidebar()
new Content()

var pic = new Image()
pic.src = './dist/' + img
// pic.classList.add('img-style')
pic.classList.add(style['img-style'])
var dom = document.getElementById('root')
dom.after(pic)

dom.innerHTML = '<i class="iconfont icon-ceshi"></i>'