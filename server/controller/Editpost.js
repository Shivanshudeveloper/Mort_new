const PostModel = require("../Model/Postmodel.js");

const updatepost = async (req, res) => {
  const Paramid = req.params.id;
  try {
    await PostModel.findByIdAndUpdate(Paramid, req.body, { new: true });
    res.status(200).json("Updated");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = updatepost;
