const PostModel = require("../Model/Postmodel.js");

const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    await PostModel.findByIdAndDelete(id);
    res.status(200).json("Deleted Successfully");
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
};

module.exports = deletePost;
