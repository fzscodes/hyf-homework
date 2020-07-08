
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/numbers/add", (req, res) => {
    const a = Number(req.query.first);
    const b = Number(req.query.second);
    if (!a || !b) {
        res.send(`Please enter a valid number`)
    }
    else {
        const sum = a + b;
        res.send(`The sum of the ${a} and ${b} is: ${sum}`)
    }
});

app.get("/numbers/multiply/:first/:second", (req, res) => {
    const a = Number(req.params.first);
    const b = Number(req.params.second);
    if (!a || !b) {
        res.send(`Please enter a valid number`)
    }
    else {
        const multiplication = a * b;
        res.send(`The product of ${a} and ${b} is: ${multiplication}`);
    }
});

app.listen(port, () =>
    console.log(`Listening on port ${port}`)
);