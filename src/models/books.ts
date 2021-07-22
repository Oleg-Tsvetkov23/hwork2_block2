import mongoose from "mongoose";

const { Schema } = mongoose;
const schema = new Schema({
  title : { type  : String, required: true},
  description: { type : String, default : "" },
  authors: { type : String, required : true},
  favorite: { type : String, default : ""},
  fileCover: { tyep :String, default : ""},
});

export const Book = mongoose.model("Book", schema);

