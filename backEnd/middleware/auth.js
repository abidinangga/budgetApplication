const { jwtVerify } = require("../helper/jwt");
const { User } = require("../models/index");

function authentication(req, res, next) {
  const access_token = req.headers.access_token;
  if (access_token) {
    const payload = jwtVerify(access_token);
    User.findByPk(payload.id)
      .then((data) => {
        if (data) {
          req.user = {
            id: data.id,
            username: data.username,
            email:data.email
          };
          next();
        } else {
          next({
            name: "invalidToken",
            message: "Invalid Token",
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  } else {
    next({
      name: "notLogin",
      message: "You must login first",
    });
  }
}

module.exports = {
  authentication
};
