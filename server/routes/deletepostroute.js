const express = require("express");
const router = express.Router();

const deletePost = require("../controller/Deletepost.js");

// create post
router.delete("/:id/post", deletePost);

module.exports = router;
