const { Router } = require("express");
const bcrypt = require("bcryptjs");
const { UserModel } = require("../model/user.model");

const SignupRouter = Router();

SignupRouter.post("/auth", (req, res) => {
  try {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 6, async function (err, hash) {
      if (err) {
        return res
          .status(501)
          .send({ type: "error", message: "Please try again" });
      }
      const newUser = new UserModel({ name, email, password: hash });
      await newUser.save();
      return res
        .status(201)
        .send({ type: "success", message: "Account created successfully" });
    });
  } catch (error) {
    return res.status(501).send({
      type: "error",
      message: "Please try again",
    });
  }
});

module.exports = { SignupRouter };
