const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = mongoose.connect(
  "mongodb+srv://HareshSolanki:t4z3F3dkItKQS8Tm@cluster0.zheszhe.mongodb.net/masai_tickets?retryWrites=true&w=majority"
);

module.exports = { connectDB };
