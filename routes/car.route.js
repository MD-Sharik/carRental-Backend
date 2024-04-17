import express from "express";
import { createCar, getAllCars } from "../Controllers/Car.controller.js";

const router = express.Router();
router.route("/").get(getAllCars);
router.route("/create").post(createCar);

export default router;
