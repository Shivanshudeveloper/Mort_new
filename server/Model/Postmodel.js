const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    coe: {
      type: Date,
    },
    amount: {
      type: Number,
    },
    status: {
      type: String,
    },
    purpose: {
      type: String,
    },
    progress: {
      type: Number,
    },
    milestone: {
      type: String,
    },
    notifications: {
      type: String,
    },
    rate: {
      type: Number,
    },
    loanOfficer: {
      type: String,
    },
    processor: {
      type: String,
    },
    underwriter: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model("Posts", PostSchema);
module.exports = PostModel;
