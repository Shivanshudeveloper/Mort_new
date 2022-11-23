const express = require("express");
const router = express.Router();
const updatepost = require("../controller/Editpost.js");
// const updatepost = require("../controller/Editpost.js");

// create post
router.put("/:id/post", updatepost);

module.exports = router;
