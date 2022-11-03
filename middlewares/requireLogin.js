const jwt = require("jsonwebtoken");
require("dotenv").config();
const requireLogin = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .send({ type: "error", message: "Please Login again" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "haresh007", function (err, decoded) {
    if (err) {
      res.status(401).send({ type: "error", message: "Please Login again" });
    }
    req.body.userId = decoded.userId;
    next();
  });
};
module.exports = { requireLogin };
