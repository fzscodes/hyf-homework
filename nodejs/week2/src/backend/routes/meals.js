const router = require('express').Router();
const meals = require('../data/meals.json');

router.get("/meals/:id", (req, res) => {
    const mealId = Number(req.params.id);
    const mealWithId = meals.filter((meal) => meal.id === mealId);
    if (mealWithId.length > 0) {
        res.send(mealWithId);
    }
    else {
        res.status(404).send(`Can't find meal with id = ${mealId}`);
    }
});

router.get("/meals", (req, res) => {

    if (req.query.maxPrice) {
        const maxPrice = Number(req.query.maxPrice);
        const mealswithLesserPrice = meals.filter((meal) => meal.price < maxPrice);
        res.send(mealswithLesserPrice);
    }
    else if (req.query.title) {
        const mealTitle = (req.query.title).toLowerCase();
        const mealsWithMatchingTitle = meals.filter((meal) => meal.title.toLowerCase().includes(mealTitle));
        res.send(mealsWithMatchingTitle);
    }
    else if (req.query.createdAfter) {
        const createdDate = new Date(req.query.createdAfter);
        const mealsCreatedAfterDate = meals.filter((meal) => new Date(meal.createdAt) > createdDate);
        res.send(mealsCreatedAfterDate);
    }
    else if (req.query.limit) {
        const limit = Number(req.query.limit);
        const mealsUptoLimit = meals.slice(0, limit);
        res.send(mealsUptoLimit);
    }
    else if (req.originalUrl === '/meals') {
        res.send(meals);// if original url returns all meals
    }
    else {
        res.status(404).send('Not Found');
    }
});

module.exports = router;