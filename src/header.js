function Header() { // 构造函数（或类）名一般以大写开头
    var dom = document.getElementById('root');
    var header = document.createElement('div');
    header.innerHTML = '<p>header</p>'
    dom.append(header)
}

export default Header