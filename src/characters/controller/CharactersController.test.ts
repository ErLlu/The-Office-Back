import { type NextFunction, type Request, type Response } from "express";
import type CharactersRepository from "../repository/types";
import type Character from "../types";
import CharacterController from "./CharactersController";

describe("Given a CharacterController getCharacter method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const req = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
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
    const characterRepository: CharactersRepository = {
      getAll: async () => characters,
    };

    const next = jest.fn();
    const characterController = new CharacterController(characterRepository);

    test("Then it should call its status method with 200", async () => {
      await characterController.getCharacters(
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(200);
    });
    test("Then it should call its json method with a characters list", async () => {
      await characterController.getCharacters(
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ characters });
    });
  });
});
