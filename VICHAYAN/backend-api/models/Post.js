const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    images: {
      type: Array,
    },
    pdf: {
      type: String,
    },
    link: {
      type: Array,
    },
    likes:[
      {
          user:{
              type:mongoose.Schema.Types.ObjectId,
              ref:'User'
          }
      }
  ],
    comments: [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref:'Comment'
      }
  ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
