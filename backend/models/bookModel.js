import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      reauired: true,
    },
    author: {
      type: String,
      reauired: true,
    },
    publishYear: {
      type: Number,
      reauired: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", BookSchema);
