const express = require("express");
const cors = require("cors");
const path = require("path");
const { Pool } = require("pg");

const app = express();

const PORT = process.env.PORT || 3001;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

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
  const { server_name, owner_name, server_url, server_description } = req.body;
  const query = `INSERT INTO servers (server_name, owner_name, server_url, server_description, server_status) VALUES ('${server_name}', '${owner_name}', '${server_url}', '${server_description}', true);`;
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}}...`);
});