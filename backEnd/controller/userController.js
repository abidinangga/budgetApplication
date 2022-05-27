const { User } = require("../models/index");
const { comparePassword } = require("../helper/bcrypt");
const { jwtSign } = require("../helper/jwt");
class userController {
  static async register(req, res, next) {
    let newData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    try {
      const users = await User.create(newData);
      res.status(201).json({
        statusCode: 201,
        data: {
          username: users.username,
          email: users.email,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    let email = req.body.email;
    let password = req.body.password;
    try {
      const user = await User.findOne({ where: { email: email } });
      if (!user) {
        next({
          name: "invalidUser",
          message: "Email or Password wrong",
        });
      } else {
        if (comparePassword(password, user.password)) {
          const payload = {
            id: user.id,
            username: user.username,
            email: user.email
          };
          const access_token = jwtSign(payload);
          res.status(200).json({
            access_token: access_token,
          });
        } else {
          next({
            name: "invalidUser",
            message: "Email or Password wrong",
          });
        }
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = userController;
