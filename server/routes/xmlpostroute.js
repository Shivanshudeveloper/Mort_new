const express = require("express");
const router = express.Router();
const xmldataPost = require("../controller/xmldataPost.js");
router.post("/", xmldataPost);

module.exports = router;
