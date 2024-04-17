import mongoose from "mongoose";

function dbConnect() {
  return mongoose.connect("mongodb://localhost:27017");
}
export default dbConnect;
