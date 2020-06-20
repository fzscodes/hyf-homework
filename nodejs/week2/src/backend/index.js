const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mealsRouter = require("./routes/meals");
app.get("/meals", mealsRouter);
app.get("/meals/:id", mealsRouter);

const reservationsRouter = require("./routes/reservations");
app.get("/reservations", reservationsRouter);
app.get("/reservations/:id", reservationsRouter);

const reviewsRouter = require("./routes/reviews");
app.get("/reviews", reviewsRouter);
app.get("/reviews/:id", reviewsRouter);

app.set('json spaces', 2); // prettify json output

app.listen(port, () =>
    console.log(`Listening on port ${port}`)
);