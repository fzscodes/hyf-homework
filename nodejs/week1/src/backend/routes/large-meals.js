const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

module.exports = (req, res) => {
    const largeMeals = meals
        .filter((meal) => meal.maxNumberOfGuests >= 10)
        .map(meal => {
            meal.review = reviews.filter(review => review.mealId === meal.id)
            return meal;
        });
    res.json(largeMeals);
};