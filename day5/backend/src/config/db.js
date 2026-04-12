const mongoos = require("mongoose");

const dbconneted = async (req, res) => {
  try {
    const connect = await mongoos.connect(process.env.MONGO_URI);
    if (!connect) {
      console.log("db not connected");
    }
    console.log("db conneted");
    
  } catch (error) {
    console.log("server error", error);
  }
};

module.exports = dbconneted;

