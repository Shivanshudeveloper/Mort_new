const express = require("express");
const router = express.Router();

const getposts = require("../controller/Getpost.js");

// create post
router.get("/post", getposts);

module.exports = router;
