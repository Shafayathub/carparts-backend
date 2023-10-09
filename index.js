const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT | 5000;

// Midleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SCP Server is up");
});

app.listen(port, () => {
  console.log(`server is up at ${port}`);
});
