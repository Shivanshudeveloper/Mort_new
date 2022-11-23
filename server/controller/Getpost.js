const PostModel = require("../Model/Postmodel.js");

const getposts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};
module.exports = getposts;
