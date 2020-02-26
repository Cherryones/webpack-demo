import Header from './header'
import Sidebar from './sidebar'
import Content from './content'
import img from './luffy02.jpg'
import './index.css'

new Header()
new Sidebar()
new Content()

console.log(img)

var pic = new Image()
pic.src = './dist/' + img
pic.classList.add('img-style')
var dom = document.getElementById('root')
dom.append(pic)