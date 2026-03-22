require("dotenv").config()
const dbconnect = require('./src/config/db')
const app = require("./src/app")
const port = 3000

dbconnect()


app.listen(port,()=>{
    console.log("app runing", port);
})