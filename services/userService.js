const mongoose = require('mongoose');
const UsersModel = require('../models/UserModel.js');
const { getPassAndSalt, isLoginValid } = require('../helpers/crypto.js');

const create = async (req, res) => {
  try {
    const newUser = new UsersModel(req.body);

    const PassAndSalt = getPassAndSalt(req.body.password);
    newUser.hash = PassAndSalt.hash;
    newUser.salt = PassAndSalt.salt;

    await newUser.save();
    res.status(200).send(newUser);
    // res.send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { login, password } = req.query;

    const user = await UsersModel.findOne(
      { login: login },
      { hash: 1, salt: 1, _id: 0 }
    );
    if (user !== null) {
      console.log(user);

      const { hash, salt } = user;
      const valid = isLoginValid(password, salt, hash);
      res.status(200).send({ login, valid });
    } else {
      res.status(200).send({ login, valid: 'not founded' });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { create, login };
