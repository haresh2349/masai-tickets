const { Router } = require("express");
const { TicketModel } = require("../model/ticket.model");

const TicketRouter = Router();

TicketRouter.post("/", async (req, res) => {
  try {
    let ticket = new TicketModel(req.body);
    await ticket.save();
    return res
      .status(201)
      .send({ type: "success", messsage: "Created Successfully" });
  } catch (error) {
    return res.status(501).send({
      type: "error",
      message: "Please try again",
    });
  }
});

module.exports = { TicketRouter };
