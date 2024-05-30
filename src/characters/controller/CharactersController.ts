import ServerError from "../../server/middlewares/ServerError/ServerError";
import type CharactersRepository from "../repository/types";
import type CharactersControllerStructure from "./types";
import { type NextFunction, type Request, type Response } from "express";

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
      const serverError = new ServerError((error as Error).message, 404);
      next(serverError);
    }
  };
}

export default CharactersController;
