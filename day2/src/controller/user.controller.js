const usermodel = require("../models/user.model");
const bcrypt =require("bcrypt");
const jwt = require("jsonwebtoken")
 const usercreate = async (req, res) => {
  try {
    const { name, email, password } = req.body;
     const userexist  = await usermodel.findOne({email})

     if (userexist) {
       return res.status(401).json({ message: "user already exited" });
      
     }
     
     const hashPassword = await bcrypt.hash(password,10)
     
     const user = await usermodel.create({ name, email, password:hashPassword });
     if (!user) {
       return res.status(404).json({ message: "user not created" });
     }


     const token = jwt.sign({user: user._id},process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
      
      res.cookie("token",token,{httpOnly:true,secure: true,
      sameSite: "strict",})

      const safeuser = {
name: user.name,
email:user.email
      }

    return res.status(200).json({ message: "user created",token ,user:safeuser});



  } catch (error) {
    return res.status(500).json({ message: "server error ", error });
  }
};


module.exports = usercreate