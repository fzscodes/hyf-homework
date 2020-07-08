const router = require('express').Router();
const reviews = require("../data/reviews.json");

router.get("/reviews/:id", (req, res) => {
    const reviewId = Number(req.params.id);
    const reviewWithId = reviews.filter((meal) => meal.id === reviewId);
    res.send(reviewWithId);
});

router.get("/reviews", (req, res) => {
    res.send(reviews);
});
module.exports = router;