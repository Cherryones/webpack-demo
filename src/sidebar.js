function Sidebar() { // 构造函数（或类）名一般以大写开头
    var dom = document.getElementById('root');
    var sidebar = document.createElement('div');
    sidebar.innerHTML = '<p>sidebar</p>'
    dom.after(sidebar)
}

export default Sidebar