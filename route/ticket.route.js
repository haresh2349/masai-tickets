const { Router } = require("express");
const { requireLogin } = require("../middlewares/requireLogin");
const { TicketModel } = require("../model/ticket.model");

const TicketRouter = Router();

TicketRouter.post("/", requireLogin, async (req, res) => {
  try {
    const { userId } = req.body;
    let ticket = new TicketModel({ ...req.body, userId });
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

TicketRouter.get("/", requireLogin, async (req, res) => {
  try {
    const { userId } = req.body;
    const tickets = await TicketModel.find({ userId });
    return res.status(200).send({ type: "success", tickets: tickets });
  } catch (error) {
    return res.status(501).send({
      type: "error",
      message: "Please try again",
    });
  }
});

module.exports = { TicketRouter };
