const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { returning } = require("../database");

//Returns all meals
//Get meals that has a price smaller than maxPrice
//Get meals that still has available reservations
//Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
//Get meals that has been created after the date
//Only specific number of meals
router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    if (request.query.maxPrice) {
      const maxPrice = Number(request.query.maxPrice);
      const mealsWithLesserPrice = await knex("meal")
        .select("*")
        .where("Price", "<", maxPrice);
      response.json(mealsWithLesserPrice);
    } else if (request.query.availableReservations) {
      const mealsWithAvailableReservation = await knex("meal")
        .select("title", "description")
        .join("reservation", "meal.id", "=", "reservation.meal_id")
        .where("max_reservations", ">", "number_of_guests")
        .groupBy("reservation.meal_id");
      // TODO: Fix having clause query later. Need to read knex documentation
      // .having("Sum(reservation.number_of_guests)","<","meal.max_reservations");
      response.json(mealsWithAvailableReservation);
    } else if (request.query.title) {
      const mealTitle = request.query.title;
      const mealsWithMatchingTitle = await knex("meal")
        .select("*")
        .where("title", "like", `%${mealTitle}%`);
      response.send(mealsWithMatchingTitle);
    } else if (request.query.createdAfter) {
      const createdDate = new Date(request.query.createdAfter);
      const mealsCreatedAfterDate = await knex("meal")
        .select("*")
        .where("created_date", ">", createdDate);
      response.json(mealsCreatedAfterDate);
    } else if (request.query.limit) {
      const numberLimit = Number(request.query.limit);
      const mealaUptoLimit = await knex("meal").select("*").limit(numberLimit);
      response.json(mealaUptoLimit);
    } else {
      const titles = await knex("meal").select("title");
      response.json(titles);
    }
  } catch (error) {
    throw error;
  }
});
//Adds a new meal
router.post("/", async (req, res) => {
  try {
    const newMeal = await knex("meal").insert(req.body);
    res.json(newMeal);
  } catch (error) {
    throw error;
  }
});
//Returns meal by id
router.get("/:id", async (req, res) => {
  try {
    const mealById = await knex("meal").where(req.params);
    res.json(mealById);
  } catch (error) {
    throw error;
  }
});
//Updates the meal by id
router.put("/:id", async (req, res) => {
  try {
    const updatedMeal = await knex("meal").where(req.params).update(req.body);
    res.json(updatedMeal);
  } catch (error) {
    throw error;
  }
});
//Deletes the meal by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedMeal = await knex("meal").where(req.params).del();
    res.json(deletedMeal);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
