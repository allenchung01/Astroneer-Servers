const express = require("express");

const { createUser, checkIfAuthenticated } = require("../firebase.js");

const router = express.Router();

router.get("/secret", checkIfAuthenticated, async (req, res) => {
  res.send("Hello.");
});

//router.post("/sign-up", createUser);

router.post("/log-in", (req, res) => {
  res.send("Log In.");
});

module.exports = router;
