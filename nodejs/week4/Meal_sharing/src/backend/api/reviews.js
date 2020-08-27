const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try {
      const ratings = await knex("review").select("meal_id","stars","description");
      response.json(ratings);
    } catch (error) {
        throw error;
      }
    });

    module.exports = router;