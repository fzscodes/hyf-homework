const reservations = require("../data/reservations.json");

module.exports = (req, res) => {
  const randomNumber = Math.floor(Math.random() * reservations.length);
  const randomReservation = reservations[randomNumber];
  res.json(randomReservation);
};
