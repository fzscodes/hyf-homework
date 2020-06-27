const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { returning } = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const allReviews = await knex("review").select("id");
    response.json(allReviews);
  } catch (error) {
    throw error;
  }
});
router.post("/", async (req, res) => {
  try {
    const newReview = await knex("review").insert(req.body);
    res.json(newReview);
  } catch (error) {
    throw error;
  }
});
router.get("/:id", async (req, res) => {
  try {
    const reviewById = await knex("review").where(req.params);
    res.json(reviewById);
  } catch (error) {
    throw error;
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updatedReview = await knex("review")
      .where(req.params)
      .update(req.body);
    res.json(updatedReview);
  } catch (error) {
    throw error;
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deletedReview = await knex("review").where(req.params).del();
    res.json(deletedReview);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
