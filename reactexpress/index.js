const express = require("express");
const app = express();
const port = 5000;

app.get("/api/customers", (req, res) => {
  const customers = [
    { name: "ManoSriram", age: 18, location: "Vizag" },
    { name: "Steve Jobs", age: 51, location: "Palo Alto" },
    { name: "Elon Musk", age: 49, location: "Johannesburg" }
  ];
  res.json(customers);
});

app.listen(port, () => {
  console.log(`Server at ${port}`);
});
