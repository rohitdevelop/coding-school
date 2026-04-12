 const usermodel = require('../models/user');

 const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const existingUser = await usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = usermodel.create({
            name,
            email,
            password
        });
        await user.save();
        res.status(201).json(user);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = signup;