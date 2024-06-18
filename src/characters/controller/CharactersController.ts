import chalk from "chalk";
import { type NextFunction, type Request, type Response } from "express";
import ServerError from "../../server/middlewares/ServerError/ServerError.js";
import type CharactersRepository from "../repository/types.js";
import type CharactersControllerStructure from "./types.js";
import { type RequestCharacterData } from "./types.js";

class CharactersController implements CharactersControllerStructure {
  constructor(public repository: CharactersRepository) {}

  getCharacters = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const characters = await this.repository.getAll();
      res.status(200).json({ characters });
    } catch (error) {
      console.log(
        chalk.red(`Error fetching characters: ${(error as Error).message}`),
      );
      const serverError = new ServerError((error as Error).message, 500);
      next(serverError);
    }
  };

  createCharacter = async (
    req: RequestCharacterData,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const newCharacter = await this.repository.createCharacter(req.body);

      res.status(200).json({ newCharacter });
    } catch (error) {
      const serverError = new ServerError((error as Error).message, 409);

      next(serverError);
    }
  };
}

export default CharactersController;
