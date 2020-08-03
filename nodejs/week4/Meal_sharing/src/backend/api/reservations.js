const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const availableMeals = await knex.raw(
      "SELECT meal.*,sum(reservation.number_of_guests) Total FROM meal INNER JOIN reservation on meal.id = reservation.meal_id GROUP BY meal.id HAVING Total < max_reservations"
    );
    let mealsAvailableForReservation = availableMeals[0];
    const mealsWithoutReservation = await knex.raw(
      "SELECT * FROM meal where meal.id not in(select meal_id from Reservation)"
    );
    mealsWithoutReservation[0].forEach((item) => {
      mealsAvailableForReservation.push(item);
    });
    
    response.json(mealsAvailableForReservation);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (req, res) => {
  try {
    const newReservation = {
      First_Name: req.body.fname,
      number_of_guests: req.body.quantity,
      meal_id: req.body.mealId,
      Last_Name: req.body.lname,
      Phone_Number: req.body.phone,
      email: req.body.email,
    };
    const addedReservation = await knex("reservation").insert(newReservation);
    res.send(addedReservation);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
