const express = require("express");
const { connectDB } = require("./configs/db");
const { LoginRouter } = require("./route/login.route");
const { SignupRouter } = require("./route/signup.route");
const { TicketRouter } = require("./route/ticket.route");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const PORT = 4000;
app.get("/", (req, res) => {
  res.json("WELCOME");
});
app.use("/auth", SignupRouter);
app.use("/auth1", LoginRouter);
app.use("/tickets", TicketRouter);
app.use("/tickets1", TicketRouter);
app.listen(PORT, async () => {
  try {
    await connectDB;
    console.log("connected to DB on port", PORT);
  } catch (error) {
    console.log(error);
  }
});
