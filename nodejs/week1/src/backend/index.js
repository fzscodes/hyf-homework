const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mealsRouter = require("./routes/meals.js");
app.get("/meals", mealsRouter);

const cheapMealsRouter = require("./routes/cheap-meals");
app.get("/cheap-meals", cheapMealsRouter);

const largeMealsRouter = require("./routes/large-meals");
app.get("/large-meals",largeMealsRouter);

const mealRouter = require("./routes/meal");
app.get("/meal",mealRouter);

const reservationRouter = require("./routes/reservation");
app.get("/reservation",reservationRouter);

const reservationsRouter = require("./routes/reservations");
app.get("/reservations",reservationsRouter);

app.set('json spaces', 2); // prettify json output

app.listen(port, () =>
    console.log(`Listening on port ${port}`)
);