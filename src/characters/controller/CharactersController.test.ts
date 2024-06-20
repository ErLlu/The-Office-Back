import { type NextFunction, type Request, type Response } from "express";
import type CharactersRepository from "../repository/types";
import CharacterController from "./CharactersController";

import ServerError from "../../server/middlewares/ServerError/ServerError";
import {
  type ResponseWithStatusJson,
  type RequestCharacterDataInfo,
} from "./types";
import CharactersController from "./CharactersController";
import { type CharacterStructure, type CharacterDataInfo } from "../types";

const res: ResponseWithStatusJson = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const next = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

const michaelScottex: CharacterStructure = {
  _id: "michaelScottexId",
  name: "Michael Scottex",
  age: 50,
  position: "Gerente",
  isWorking: true,
  description: "Jefe de la sucursal de Dunder Mifflin de Scrampton",
  seasons: "3-8",
  urlImage: "http:michaelScott.com",
  alternativeText: "imagen de Michael",
};

const characters: CharacterStructure[] = [michaelScottex];

const repository: CharactersRepository = {
  async getAll(): Promise<CharacterStructure[]> {
    return characters;
  },
  async createCharacter(
    characterDataInfo: CharacterDataInfo,
  ): Promise<CharacterStructure> {
    return {
      ...characterDataInfo,
      _id: michaelScottex._id,
      isWorking: true,
    };
  },
};

const errorRepository: CharactersRepository = {
  async getAll(): Promise<CharacterStructure[]> {
    throw new Error();
  },

  async createCharacter(
    _characterDataInfo: CharacterDataInfo,
  ): Promise<CharacterStructure> {
    throw new Error("Failed to create Character");
  },
};

const charactersController = new CharacterController(repository);

describe("Given a CharactersController getCharacter method", () => {
  const req = {};
  describe("When it receives a Response", () => {
    const characters: CharacterStructure[] = [
      {
        _id: "michaelScottexId",
        name: "Michael Scottex",
        age: 50,
        position: "Gerente",
        seasons: "3-8",
        isWorking: true,
        urlImage: "http:michaelScott.com",
        alternativeText: "imagen de Michael",
        description: "Jefe de la sucursal de Dunder Mifflin de Scrampton",
      },
    ];

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
      async createCharacter(
        characterDataInfo: CharacterDataInfo,
      ): Promise<CharacterStructure> {
        throw new Error("Invalid character");
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

describe("Given a CharactersController createCharacter method", () => {
  describe("When it receives a Request with the 'Michael Scottex'", () => {
    const michaelScottex: CharacterDataInfo = {
      name: "Michael Scottex",
      age: 50,
      position: "Gerente",
      description: "Jefe de la sucursal de Dunder Mifflin de Scrampton",
      seasons: "3-8",
      urlImage: "http:michaelScott.com",
      alternativeText: "imagen de Michael",
    };

    const req: Partial<RequestCharacterDataInfo> = { body: michaelScottex };

    const controller = new CharactersController(repository);
    test("Then it should call the response json method with 'Michael Scottex'", async () => {
      await controller.createCharacter(
        req as RequestCharacterDataInfo,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({
        newCharacter: {
          ...michaelScottex,
          _id: "michaelScottexId",
          isWorking: true,
        },
      });
    });

    test("Then it should call the response status method with 200", async () => {
      const expectedStatusCode = 200;

      await controller.createCharacter(
        req as RequestCharacterDataInfo,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    describe("When it receives a Request with 'michael scottex' and the repository throw an error", () => {
      const michaelScottex: CharacterDataInfo = {
        name: "Michael Scottex",
        age: 50,
        position: "Gerente",
        description: "Jefe de la sucursal de Dunder Mifflin de Scrampton",
        seasons: "3-8",
        urlImage: "http:michaelScott.com",
        alternativeText: "imagen de Michael",
      };

      const req: Partial<RequestCharacterDataInfo> = { body: michaelScottex };

      const controller = new CharactersController(errorRepository);

      test("Then it should call next function with error:'Invalid Character'", async () => {
        await controller.createCharacter(
          req as RequestCharacterDataInfo,
          res as Response,
          next as NextFunction,
        );
        const error = new ServerError("Failed to create Character", 409);

        expect(next).toHaveBeenCalledWith(error);
      });
    });
  });
});
