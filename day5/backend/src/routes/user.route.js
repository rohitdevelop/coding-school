const express =  require('express');
const userRoute = express.Router();
const signup = require('../controllers/user.controller');
 

userRoute.post('/signup', signup);

module.exports = userRoute;