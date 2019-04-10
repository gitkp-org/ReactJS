const express = require("express");
const fileUpload = require("express-fileupload");
const port = 5000 || process.env.PORT;

const app = express();
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("Hey there from File Uploader");
});

app.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file was uploaded." });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

app.listen(port, () => console.log(`Server at ${port}`));
