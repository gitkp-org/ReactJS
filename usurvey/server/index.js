const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/home', (req, res) => {
    res.send("Hey There from home!!!");
})

app.listen(port, () => {
    console.log(`Server at ${port}`);
})

module.exports = app;