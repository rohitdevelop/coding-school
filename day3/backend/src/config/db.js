import mongoose from "mongoose";

const dbconnect = async (req, res) => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    if (!connect) {
      console.log("db not conneted");
    }
    console.log("db conneted");
  } catch (error) {
    console.log("server error", error);
  }
};

export default dbconnect;
