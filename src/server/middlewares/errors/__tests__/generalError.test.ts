import { type Request, type Response } from "express";
import type ServerError from "../../ServerError/ServerError.js";
import generalError from "../generalError.js";

let res: Pick<Response, "status" | "json">;
const req = {};
const next = jest.fn();

beforeEach(() => {
  res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
});

describe("Given the generalError middleware", () => {
  describe("When it receives a 409 'There is a conflict' error and a response", () => {
    const error: Pick<ServerError, "message" | "statusCode"> = {
      message: "There is a conflict",
      statusCode: 409,
    };
    test("Then it should call the response status method with 409", () => {
      generalError(error as ServerError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(error.statusCode);
    });

    test("Then it should call the response json method with 'There is a conflict'", () => {
      generalError(error as ServerError, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });

  describe("When it receives a 500 'Server failed: Unknown error' error and a response", () => {
    const error = {
      message: "Server failed: Unknown error",
    };

    test("Then it should call the response's status method with 500", () => {
      const expectedStatusCode = 500;

      generalError(error as ServerError, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the response's json method with a 'Server failed: Unknown error' error message", () => {
      generalError(error as ServerError, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });
  });
});
