const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) =>
  res.send(
    "An Example AWS CD Pipeline with Source, Review, Build and Deploy stages!"
  )
);

app.listen(port);
console.log(`App running on http://localhost:${port}`);
