 const app = require("./src/app")
 require("dotenv").config()
const dbconnet = require("./src/config/db")
const usermodel = require("./src/model/user.model")

const port = 3000

dbconnet()

app.get("/", (req, res) => {
  res.send("Hello");
});


app.post("/user", async (req, res) => {
  try {
    const {name , email , password} = req.body

    const user = await usermodel.create({name,email,password})
   
    if (user) {
        res.status(200).json({message: "user created",user})
    }
    
    
} catch (error) {
    
    res.status(500).json({message: "user not created",error})
  }
});

app.listen(port,()=>{
    console.log("app runnig in port ",port);
    
})