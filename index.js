const express = require("express");
const cors = require("cors");
const path = require("path");
const { Pool } = require("pg");
const morgan = require("morgan");

const { checkIfAuthorized, checkIfAuthenticated } = require("./firebase.js");

const app = express();

const PORT = process.env.PORT || 3001;

const pool = new Pool({
  host: "localhost",
  user: "allenchung",
  database: "astroneer_servers",
  password: "password",
  port: 5432,
});

/*const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});*/

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(morgan("dev"));
//
//app.use(express.static(path.join(__dirname, "build")));

app.use("/api/users", require("./routes/users.js"));

app.get("/api/servers", (req, res) => {
  const user_uid = req.query.uid;
  if (user_uid) {
    const query = `SELECT * FROM servers WHERE user_uid = '${user_uid}';`;
    pool
      .query(query)
      .then((result) => {
        res.status(200).json(result.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    const query = "SELECT * FROM servers;";
    pool
      .query(query)
      .then((result) => {
        res.status(200).json(result.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

app.get(
  "/api/myservers:uid",
  checkIfAuthenticated,
  checkIfAuthorized,
  (req, res) => {
    res.status(200).send("Authorized.");
  }
);

app.post("/api/servers", checkIfAuthenticated, (req, res) => {
  const { server_name, owner_name, server_url, server_description } = req.body;
  const user_uid = req.body.uid;
  const query = `INSERT INTO servers (server_name, owner_name, server_url, server_description, server_status, user_uid) VALUES ('${server_name}', '${owner_name}', '${server_url}', '${server_description}', true, '${user_uid}');`;
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

//
/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});*/

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}}...`);
});
