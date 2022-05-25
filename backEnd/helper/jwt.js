const jwt = require("jsonwebtoken");

const jwtSign = (payload) => {
  const accessToken = jwt.sign(payload,process.env.SECRET_KEY,{
    expiresIn: "6h",
  });
  return accessToken;
};

const jwtVerify = (access_token) => {
  const payload = jwt.verify(access_token,process.env.SECRET_KEY);
  return payload;
};

module.exports = { jwtSign, jwtVerify };
