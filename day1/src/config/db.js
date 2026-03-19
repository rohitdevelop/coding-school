const mongoos = require("mongoose")

const dbconnet = async (req,res) => {
    try {
        const connection = await mongoos.connect(process.env.MONGO_URI)
        if (connection) {
            console.log("db connected");
            
        }

    } catch (error) {
        console.log("db not connect server eroor " , error);
        
    }
}

module.exports = dbconnet