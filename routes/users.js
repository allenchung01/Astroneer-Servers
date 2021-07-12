const express = require("express");

const { createUser, checkIfAuthenticated } = require("../firebase.js");

const router = express.Router();

router.post("/sign-up", createUser);

module.exports = router;
