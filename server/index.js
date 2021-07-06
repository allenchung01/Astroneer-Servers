const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  host: "localhost",
  user: "allenchung",
  database: "astroneer_servers",
  password: "password",
  port: 5432,
});

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/servers", (req, res) => {
  const query = "SELECT * FROM servers;";
  pool
    .query(query)
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
