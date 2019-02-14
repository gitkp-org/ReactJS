const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// app.get("/", (req, res) => {
//   res.send("hey there!!");
// });

app.get("/api/customers", (req, res) => {
  const customers = [
    { name: "ManoSriram", age: 18, location: "Vizag" },
    { name: "Steve Jobs", age: 51, location: "Palo Alto" },
    { name: "Elon Musk", age: 49, location: "Johannesburg" },
    { name: "Mark Zuckerberg", age: 34, location: "Menlo Park" },
    { name: "Jack Ma", age: 50, location: "Beijing" }
  ];
  res.json(customers);
});

app.post("/subs", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at ${port}`);
});
