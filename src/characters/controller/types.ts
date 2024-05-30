import { type NextFunction, type Request, type Response } from "express";

interface CharactersControllerStructure {
  getCharacters(req: Request, res: Response, next: NextFunction): void;
}

export default CharactersControllerStructure;
