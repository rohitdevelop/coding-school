import express from "express"

const dataRouter = express.Router()

import {createCard, getAllCards, } from "../controller/card.controller.js"
 
dataRouter.post("/cards", createCard)
dataRouter.get("/allcards", getAllCards)


export default dataRouter