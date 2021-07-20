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
  const query = "SELECT * FROM servers ORDER BY id DESC;";
  pool
    .query(query)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get(
  "/api/servers/:uid",
  checkIfAuthenticated,
  checkIfAuthorized,
  (req, res) => {
    const user_uid = req.params.uid;
    const query = `SELECT * FROM servers WHERE user_uid = '${user_uid}';`;
    pool
      .query(query)
      .then((result) => {
        res.status(200).json(result.rows);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

app.get("/api/server/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM servers WHERE id = ${id};`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.delete(
  "/api/servers/:uid/:server_id",
  checkIfAuthenticated,
  checkIfAuthorized,
  (req, res) => {
    const server_id = req.params["server_id"];
    const query = `DELETE FROM servers WHERE id = '${server_id}';`;
    pool
      .query(query)
      .then((result) => {
        return res.status(200).send("Success");
      })
      .catch((error) => {
        return res.status(400).send(error);
      });
  }
);

app.post("/api/servers", checkIfAuthenticated, (req, res) => {
  const {
    server_name,
    owner_name,
    server_url,
    server_description,
    server_game_mode,
    server_region,
    server_type,
    server_password,
    server_rules,
  } = req.body;
  console.log(req.body);
  const user_uid = req.body.uid;
  const query = `INSERT INTO servers (server_name, owner_name, server_url, server_description, server_status, user_uid, server_game_mode, server_region, server_type, server_password, server_rules) VALUES ('${server_name}', '${owner_name}', '${server_url}', '${server_description}', true, '${user_uid}', '${server_game_mode}', '${server_region}', '${server_type}', '${server_password}', '${server_rules}');`;
  pool
    .query(query)
    .then((result) => {
      res.status(200).send("Success");
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.put(
  "/api/servers/:uid/:server_id",
  checkIfAuthenticated,
  checkIfAuthorized,
  (req, res) => {
    const server_id = req.params["server_id"];
    const {
      server_status,
      owner_name,
      server_url,
      server_game_mode,
      server_region,
      server_type,
      server_password,
      server_description,
      server_rules,
      discord_link,
    } = req.body;
    const query = `UPDATE servers SET server_status = ${server_status}, owner_name = '${owner_name}', server_url = '${server_url}', server_game_mode = '${server_game_mode}', server_region = '${server_region}', server_type = '${server_type}', server_password = '${server_password}', server_description = '${server_description}', server_rules = '${server_rules}', discord_link = '${discord_link}' WHERE id = '${server_id}';`;
    pool
      .query(query)
      .then((result) => {
        res.status(200).send("Success");
      })
      .catch((reason) => {
        res.status(400).send(reason);
      });
  }
);

//
/*app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});*/

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}}...`);
});
