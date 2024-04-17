import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  manufacturer: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: String,
  mileage: Number,
  owner: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  speed: Number,
  accelerator: Number,
  fuelType: String,
  grip: Number,
});

const Car = mongoose.model("Car", carSchema);
export default Car;
