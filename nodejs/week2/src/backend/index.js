const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mealsRouter = require("./routes/meals");
app.use("/meals", mealsRouter);
//app.get("/meals/:id", mealsRouter);

const reservationsRouter = require("./routes/reservations");
app.use("/reservations", reservationsRouter);
//app.get("/reservations/:id", reservationsRouter);

const reviewsRouter = require("./routes/reviews");
app.use("/reviews", reviewsRouter);
//app.get("/reviews/:id", reviewsRouter);

app.set('json spaces', 2); // prettify json output

app.listen(port, () =>
    console.log(`Listening on port ${port}`)
);