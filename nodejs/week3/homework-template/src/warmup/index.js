const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('json spaces', 2); // prettify json output

app.get("/calculator/:method", (req, res) => {
  if (req.params.method === "add") {
    let result = addNumbers(req);
    res.send("Sum is:" + result);
  } else if (req.params.method === "subtract") {
    const diff = subtract(req);
    res.send("Result is:" + diff);
  } else if (req.params.method === "multiply") {
    const result = multiply(req);
    res.send("Result is:" + result);
  } else if (req.params.method === "divide") {
    const result = divide(req);
    res.send("Result is:" + result);
  }
});

//Calculator using req.body
app.post("/calculator", (req, res) => {
  if (req.body.method === "add") {
    let result = addNumbers(req);
    res.send("Sum is:" + result);
  } else if (req.body.method === "subtract") {
    const diff = subtract(req);
    res.send("Result is:" + diff);
  } else if (req.body.method === "multiply") {
    const result = multiply(req);
    res.send("Result is:" + result);
  } else if (req.body.method === "divide") {
    const result = divide(req);
    res.send("Result is:" + result);
  }
});

function divide(req) {
  let result = 1;
  for (var param in req.query) {
    result = Number(req.query[param]) / result;
  }
  return result;
}

function multiply(req) {
  let result = 1;
  for (var param in req.query) {
    if (isNaN(req.query[param])) {
      const arrayOfParams = req.query[param];
      result =
        result *
        arrayOfParams.reduce(
          (acc, currentValue) => Number(acc) * Number(currentValue)
        );
    } else {
      result = Number(req.query[param]) * result;
    }
  }
  return result;
}

function subtract(req) {
  let diff = 0;
  for (var param in req.query) {
    if (isNaN(req.query[param])) {
      const arrayOfParams = req.query[param];
      diff =
        diff -
        arrayOfParams.reduce(
          (acc, currentValue) => Number(acc) - Number(currentValue)
        );
    } else {
      diff = Number(req.query[param]) - diff;
    }
  }
  return diff;
}

function addNumbers(req) {
  let sum = 0;
  for (var param in req.query) {
    if (isNaN(req.query[param])) {
      const arrayOfParams = req.query[param];
      sum =
        sum +
        arrayOfParams.reduce(
          (acc, currentValue) => Number(acc) + Number(currentValue)
        );
    } else {
      sum = sum + Number(req.query[param]);
    }
  }
  return sum;
}

app.listen(port, () => console.log(`Listening on port ${port}`));
