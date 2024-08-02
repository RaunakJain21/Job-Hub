import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
export const dbConnection = () => {
  // console.log(`MongoDB URI: ${process.env.MONGO_URI}`);
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "JOB_HUB",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
