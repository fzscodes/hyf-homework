const reservations = require("../data/reservations.json");

module.exports = (req, res) => {
  res.json(reservations);
};
