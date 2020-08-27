const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("*");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (req, res) => {
  try {
    const mealById = await knex("meal").where(req.params);
    res.json(mealById);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res) => {
  try {
    const newMeal = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      meal_time: req.body.meal_time,
      max_reservations: req.body.quantity,
      price: req.body.price
    };
    const addedMeal = await knex("meal").insert(newMeal);
    res.send(addedMeal);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
