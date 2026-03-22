const mongoose = require("mongoose");

const dbconnect = async (req, res) => {
    try {
        const connect = mongoose.connect(process.env.MONGO_URI);
        if (!connect) {
          console.log("db not connected");
        }
        console.log("db connected");
        
    } catch (error) {
        console.log("server error not conected", error);
        
    }
};


module.exports = dbconnect