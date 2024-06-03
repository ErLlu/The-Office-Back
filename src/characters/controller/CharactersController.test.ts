import { type NextFunction, type Request, type Response } from "express";
import type CharactersRepository from "../repository/types";
import type Character from "../types";
import CharacterController from "./CharactersController";
import type CharacterStructure from "../types";
import ServerError from "../../server/middlewares/ServerError/ServerError";

describe("Given a CharactersController getCharacter method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const req = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  const next = jest.fn();

  describe("When it receives a Response", () => {
    const characters: Character[] = [
      {
        name: "",
        age: 25,
        position: "",
        seasons: "",
        isWorking: true,
        urlImage: "",
        alternativeText: "",
        description: "",
      },
    ];

    const charactersRepository: CharactersRepository = {
      getAll: async () => characters,
    };

    const next = jest.fn();
    const charactersController = new CharacterController(charactersRepository);

    test("Then it should call its status method with 200", async () => {
      await charactersController.getCharacters(
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("Then it should call its json method with a characters list", async () => {
      await charactersController.getCharacters(
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ characters });
    });
  });

  describe("When it receives a Next function and error with the message 'Failed to get characters'", () => {
    const repository: CharactersRepository = {
      async getAll(): Promise<CharacterStructure[]> {
        throw new Error("Failed to get characters");
      },
    };

    const controller = new CharacterController(repository);

    test("Then it should call the next function with a server error with status code 500 the message 'Failed to get characters'", async () => {
      const expectedStatus = 500;
      const expectedMessage = "Failed to get characters";

      const error = new ServerError(expectedMessage, expectedStatus);

      await controller.getCharacters(
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
