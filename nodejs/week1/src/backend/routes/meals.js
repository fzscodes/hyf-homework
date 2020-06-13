const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

module.exports = (req, res) => {
    const allMeals = meals.map(meal => {
        meal.review = reviews.filter(review => review.mealId === meal.id)
        return meal;
    });
    res.json(meals);
};