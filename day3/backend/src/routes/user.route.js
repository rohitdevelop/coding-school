import express from "express"

const userRoute = express.Router()

import {register , login} from "../controller/user.controller.js"

userRoute.post("/register", register)
userRoute.post("/login", login)


export default userRoute