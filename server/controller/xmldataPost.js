const db = require("../index.js");

const xmldataPost = async (req, res) => {
  const dataJson = req.body;
  await db.db.collection("xmldata").insertOne(dataJson);
  res.status(200).json("saved");
};

module.exports = xmldataPost;
