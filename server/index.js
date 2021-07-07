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
app.use(express.json());

app.get("/api/servers", (req, res) => {
  const query = "SELECT * FROM servers;";
  pool
    .query(query)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/api/servers", (req, res) => {
  const { server_name, owner_name, ip_address, server_description } = req.body;
  const query = `INSERT INTO servers (server_name, owner_name, ip_address, server_description, server_status) VALUES ('${server_name}', '${owner_name}', '${ip_address}', '${server_description}', true);`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).send("Success");
    })
    .catch((error) => {
      res.status(400).send(error);
      console.log(error);
    });
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
