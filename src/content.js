function Content() { // 构造函数（或类）名一般以大写开头
    var dom = document.getElementById('root');
    var content = document.createElement('div');
    content.innerHTML = '<p>content</p>'
    dom.append(content)
}

export default Content