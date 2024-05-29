import express from "express";
import notFoundError from "./middlewares/errors/notFoundError.js";
import generalError from "./middlewares/errors/generalError.js";

export const app = express();

app.use(notFoundError);
app.use(generalError);
