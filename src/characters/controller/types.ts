import { type NextFunction, type Request, type Response } from "express";
import { type CharacterDataInfo } from "../types";

interface CharactersControllerStructure {
  getCharacters(req: Request, res: Response, next: NextFunction): void;
  createCharacter(
    req: RequestCharacterDataInfo,
    res: Response,
    next: NextFunction,
  ): void;
}

export type ResponseWithStatusJson = Pick<Response, "status" | "json">;

export default CharactersControllerStructure;

export type RequestCharacterDataInfo = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  CharacterDataInfo
>;
