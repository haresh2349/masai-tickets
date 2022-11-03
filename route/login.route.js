const { Router } = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require("bcryptjs");
const LoginRouter = Router();
const jwt = require("jsonwebtoken");
LoginRouter.post("/auth", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const hash = user.password;
    bcrypt.compare(password, hash, function (err, result) {
      if (err) {
        console.log(err);
        return res
          .status(404)
          .send({ type: "error", message: "Please Login again" });
      }
      const token = jwt.sign({ userId: user._id }, process.env.SECRETKEY);
      return res
        .status(201)
        .send({ type: "success", token: token, user: user });
    });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .send({ type: "error", message: "Please Login again" });
  }
});

module.exports = { LoginRouter };
