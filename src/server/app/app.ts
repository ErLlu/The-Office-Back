import express from "express";
import morgan from "morgan";
import notFoundError from "../middlewares/errors/notFoundError.js";
import generalError from "../middlewares/errors/generalError.js";

export const app = express();

app.use(morgan("dev"));

app.use(notFoundError);
app.use(generalError);
