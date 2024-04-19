import mongoose from "mongoose";

function dbConnect() {
  return mongoose.connect(process.env.MONGOURI);
}
export default dbConnect;
