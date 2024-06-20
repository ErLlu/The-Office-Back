import { Router } from "express";
import CharactersRepository from "../repository/CharactersRepository.js";
import CharactersController from "../controller/CharactersController.js";
import Character from "../model/Character.js";

const charactersRouter = Router();

const charactersRepository = new CharactersRepository(Character);

const charactersController = new CharactersController(charactersRepository);

charactersRouter.get("/", charactersController.getCharacters);
charactersRouter.post("/", charactersController.createCharacter);

export default charactersRouter;
