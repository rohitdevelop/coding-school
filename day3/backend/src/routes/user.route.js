import express from "express"

const userRoute = express.Router()

import { login} from "../controller/user.controller.js"
 
userRoute.post("/login", login)


export default userRoute