const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { returning } = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const allReservations = await knex("reservation").select("id");
    response.json(allReservations);
  } catch (error) {
    throw error;
  }
});
router.post("/", async (req, res) => {
  try {
    const newReservation = await knex("reservation").insert(req.body);
    res.json(newReservation);
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (req, res) => {
  try {
    const reservationById = await knex("reservation").where(req.params);
    res.json(reservationById);
  } catch (error) {
    throw error;
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updatedReservation = await knex("reservation")
      .where(req.params)
      .update(req.body);
    res.json(updatedReservation);
  } catch (error) {
    throw error;
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deletedReservation = await knex("reservation")
      .where(req.params)
      .del();
    res.json(deletedReservation);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
