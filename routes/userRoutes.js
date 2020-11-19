const express = require('express');

const userRouter = express.Router();
const userController = require('../services/userService.js');

userRouter.post('/create', userController.create);
userRouter.get('/login', userController.login);

module.exports = userRouter;
