import { type NextFunction, type Request, type Response } from "express";

interface CharactersControllerStructure {
  getCharacters(req: Request, res: Response, next: NextFunction): void;
  createCharacter(
    req: RequestCharacterData,
    res: Response,
    next: NextFunction,
  ): void;
}

export default CharactersControllerStructure;

export type RequestCharacterData = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  CharacterData
>;
