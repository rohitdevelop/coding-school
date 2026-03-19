const mongoose = require("mongoose")

const useSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const usermodel = mongoose.model("user", useSchema)

module.exports = usermodel