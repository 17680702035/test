// // router的入口文件
// // 引入路由
// const Router = require("koa-router")
// const router = new Router()
// const home = require("/") //导入home,使home中的接口可用



// router.get('/data', ctx => {
//     (ctx) => {
//         ctx.body = {
//             "errno": 0,
//             "data": [
//                 {
//                     id: 1,
//                     name: 'Tom1',
//                     email: "123@qq.com",
//                     phone: "12345678901",
//                     state: '在职',
//                     city: 'Los Angeles',
//                     address: 'No. 189, Grove St, Los Angeles',
//                 },
//                 {
//                     id: 20,
//                     name: 'Tom2',
//                     email: "123@qq.com",
//                     phone: "12345678901",
//                     state: '在职',
//                     city: 'Los Angeles',
//                     address: 'No. 189, Grove St, Los Angeles',
//                 },
//                 {
//                     id: 3,
//                     name: 'Tom3',
//                     email: "123@qq.com",
//                     phone: "12345678901",
//                     state: '在职',
//                     city: 'Los Angeles',
//                     address: 'No. 189, Grove St, Los Angeles',
//                 },
//             ]
//         }
//     }
// })
// // router.use("/home", home.routes(), home.allowedMethods())

// // 一般首页是直接访问ip+端口号进入,所以可以将期重定向到/home下的某一个路由
// // router.redirect("/", "/home")

// module.exports = router // 导出router给app.js使用
