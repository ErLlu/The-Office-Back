import express from "express";
import morgan from "morgan";
import notFoundError from "../server/middlewares/errors/notFoundError.js";
import generalError from "../server/middlewares/errors/generalError.js";

export const app = express();

app.use(morgan("dev"));

app.use(notFoundError);
app.use(generalError);
