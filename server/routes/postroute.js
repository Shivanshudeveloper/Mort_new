const express = require("express");
const router = express.Router();

const createNewPost = require("../controller/postcontroller.js");

// create post
router.post("/post", createNewPost);

module.exports = router;
