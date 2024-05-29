import { type NextFunction, type Request, type Response } from "express";
import type ServerError from "../ServerError/ServerError";
import generalError from "../errors/generalError";

describe("Given the generalError middleware", () => {
  describe("When it receives an error without a message and without statusCode", () => {
    test("Then it should call the Response status method 500 and its json method with error: 'server failed: unknown error'", () => {
      const req = {};
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const next = jest.fn();

      const error = new Error();
      const expectedStatusCode = 500;
      const expectedErrorMessage = "Server failed: Unknown error";

      generalError(
        error as ServerError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.json).toHaveBeenCalledWith({ error: expectedErrorMessage });
    });
  });
});
