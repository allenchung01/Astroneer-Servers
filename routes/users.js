const express = require("express");

const { checkIfAuthorized, checkIfAuthenticated } = require("../firebase.js");

const router = express.Router();

//router.post("/sign-up", createUser);

module.exports = router;
