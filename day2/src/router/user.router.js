const express = require('express')

const userRouter = express.Router()
const usercreate = require("../controller/user.controller")



userRouter.post("/usercreate",usercreate)


module.exports = userRouter