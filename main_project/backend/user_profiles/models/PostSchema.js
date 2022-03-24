const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      max: 285,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    likeCounter: {
      type: Number,
      default: 0
    },
  },
  { timestamps: true }
);

module.exports = PostSchema;