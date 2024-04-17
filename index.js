import express, { urlencoded } from "express";
import dbConnect from "./db/index.js";
import carRouter from "./routes/car.route.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/car", carRouter);

dbConnect()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });