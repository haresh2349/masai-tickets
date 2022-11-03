const { Schema, model } = require("mongoose");

const TicketSchema = new Schema(
  {
    category: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timeStamp: true }
);

const TicketModel = model("ticket", TicketSchema);

module.exports = { TicketModel };
