import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import connectDatabase from "./database/connectDatabase.js";

dotenv.config();

connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Server running on port ${process.env.PORT}`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
