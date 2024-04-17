import Car from "../models/carState.model.js";

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    console.log(error);
  }
};

const createCar = async (req, res) => {
  const car = new Car(req.body);
  try {
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    console.log(error);
  }
};

export { getAllCars, createCar };
