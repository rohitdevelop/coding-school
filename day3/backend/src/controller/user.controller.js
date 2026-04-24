import user from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existemail = await user.findOne({ email });

    if (existemail) {
      return res.status(400).json({ message: "User already exists" });
    }

    let role = "Public";
    
    if (email === "test@test.com") {
      
      role = "Member";
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newuser = await user.create({
      email,
      password: hashPassword,
      role,
     });

    const token = jwt.sign(
      { id: newuser._id, role: newuser.role },  
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(201).json({
      message: "User created successfully",
      user: newuser,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};