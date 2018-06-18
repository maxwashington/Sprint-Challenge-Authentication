const jwt = require("jsonwebtoken");
const { mysecret } = require("../../config");
const User = require("../models/userModels");

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }).then(user => {
    if (user) {
      user
        .checkPassword(password)
        .then(passMatch => {
          if (passMatch) {
            const payload = { username: user.username };
            const token = jwt.sign(payload, mysecret);
            res.status(201).json({ message: `Welcome ${username}`, token });
          } else {
            res.status(401).send("invalid credentials");
          }
        })
        .catch(err => {
          err.send("Error Invalid passwords");
        });
    } else {
      res.status(401).send("invalid credentials");
    }
  });
};

module.exports = {
  login
};
