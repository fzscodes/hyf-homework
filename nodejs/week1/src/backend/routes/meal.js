const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

module.exports = (req, res) => {
  const randomNumber = Math.floor(Math.random() * meals.length);
  const randomMeal = meals[randomNumber];
  randomMeal.review = reviews.filter(
    (review) => review.mealId === randomMeal.id
  );
  res.json(randomMeal);
};
