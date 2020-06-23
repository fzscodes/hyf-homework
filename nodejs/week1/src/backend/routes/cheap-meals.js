const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

module.exports = (req, res) => {
  const cheapMeals = meals
    .filter((meal) => meal.price <= 75)
    .map((meal) => {
      meal.review = reviews.filter((review) => review.mealId === meal.id);
      return meal;
    });
  res.json(cheapMeals);
};
