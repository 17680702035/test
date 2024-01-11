
const Koa = require("koa2") 
const app = new Koa() 

const Router = require('koa-router')
const cors = require("koa2-cors") 
const static = require("koa-static") 
const path = require("path")

const router = new Router()

app.use(static(path.join(__dirname + "/public"))) 
app.use(cors()) 


router.get('/data',
  async (ctx) => {
    ctx.body = {
      "errno": 0,
      "data": [
        {
          "name": "顺小德",
          "age": 21,
          "gender": "male"
        },
        {
          "name": "路人甲",
          "age": 20,
          "gender": "male"
        },
        {
          "name": "路人乙",
          "age": 22,
          "gender": "female"
        }
      ]
    }
  })

app.use(router.routes(), router.allowedMethods())

app.listen(80, () => {
  console.log(`server in running at http://localhost`)
})
