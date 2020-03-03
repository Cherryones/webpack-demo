/*
 * @Author: xiongying
 * @Date: 2020-03-02 22:01:56
 * @Description: 测试babel
 */
// import "@babel/polyfill"; // 使用plugins方案配置babel(或使用.babelrc文件)，无需单独引用
const arr = [
  new Promise(()=>{}),
  new Promise(()=>{})
]

arr.map((item)=>{
  console.log(item)
})