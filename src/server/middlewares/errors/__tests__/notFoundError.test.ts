import { type NextFunction, type Request, type Response } from "express";
import ServerError from "../../ServerError/ServerError.js";
import notFoundError from "../notFoundError.js";

describe("Given the notFound middleware", () => {
  describe("When it receives a next function", () => {
    test("Then it should call the received next function with a 404 'Endpoint not found' error", () => {
      const req = {};
      const res = {};
      const next: NextFunction = jest.fn();
      const error: ServerError = new ServerError("Endpoint not found", 400);

      notFoundError(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
