const PostModel = require("../Model/Postmodel.js");

const createNewPost = async (req, res) => {
  const newPost = new PostModel(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

module.exports = createNewPost;
