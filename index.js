const express = require("express");
const { connectDB } = require("./configs/db");
const { LoginRouter } = require("./route/login.route");
const { SignupRouter } = require("./route/signup.route");
const { TicketRouter } = require("./route/ticket.route");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use("/signup", SignupRouter);
app.use("/login", LoginRouter);
app.use("/create", TicketRouter);
app.listen(PORT, async () => {
  try {
    await connectDB;
    console.log("connected to DB on port", PORT);
  } catch (error) {
    console.log(error);
  }
});
