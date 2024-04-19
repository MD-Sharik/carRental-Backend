import express from "express";
import dbConnect from "./db/index.js";
import router from "./routes/car.route.js";
import { config } from "dotenv";
const app = express();

config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/car", router);

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
export default app;
