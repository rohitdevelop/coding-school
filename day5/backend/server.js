require("dotenv").config()
const app = require('./src/app')
const dbconnected = require("./src/config/db")


dbconnected()


app.listen(3000, ()=>{
console.log("app is runing sir");
})
