import Car from "../models/carState.model.js";

const getAllCars = async (req, res) => {
  try {
    const category = req.query.category;
    // Access the 'category' query parameter
    let cars;

    // If category is provided, filter cars by category
    if (category) {
      cars = await Car.find({ category: category });
    } else {
      cars = await Car.find();
    }
    console.log("Filtered cars:", cars);
    res.status(200).json(cars);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createCar = async (req, res) => {
  const car = new Car(req.body);
  try {
    await car.save();
    res.status(201).json(car);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllCars, createCar };
