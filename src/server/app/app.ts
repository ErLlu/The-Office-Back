import express from "express";
import cors from "cors";
import morgan from "morgan";
import notFoundError from "../middlewares/errors/notFoundError.js";
import generalError from "../middlewares/errors/generalError.js";
import charactersRouter from "../../characters/router/charactersRouter.js";

export const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: process.env.ORIGIN ?? "",
  }),
);

app.use("/characters", charactersRouter);

app.use(notFoundError);
app.use(generalError);
