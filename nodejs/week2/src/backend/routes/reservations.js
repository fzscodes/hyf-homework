const router = require('express').Router();
const reservations = require("../data/reservations.json");

router.get("/reservations/:id", (req, res) => {
    const reservationId = Number(req.params.id);
    const reservationsWithId = reservations.filter((reservation) => reservation.id === reservationId);
    res.send(reservationsWithId);
});

router.get("/reservations", (req, res) => {
    res.send(reservations);
});
module.exports = router;