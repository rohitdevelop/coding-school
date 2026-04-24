import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:String,

    role:{
        type:String,
        enum:["Member","Public"],
        default:"Public"
    }
})

const user = mongoose.model("user",userSchema)

export default user