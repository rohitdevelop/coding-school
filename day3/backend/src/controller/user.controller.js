import user from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existemail = await user.findOne({ email });

    if (existemail) {
      res.status(401).json({ message: "user alredy exist " });
    }
    const newuser = await user.create({ name, email, password });

    if (!newuser) {
      return res.status(401).json({ message: "user not created" });
    }
    res.status(200).json({ message: "user created", newuser });
  } catch (error) {
    res.status(500).json({ message: "user not created server error", error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const newuser = await user.find({ email, password });

    if (!newuser) {
      return res.status(401).json({ message: "user not login" });
    }
    res.status(200).json({ message: "user login", newuser });
  } catch (error) {
    res.status(500).json({ message: "user not created server error", error });
  }
};
