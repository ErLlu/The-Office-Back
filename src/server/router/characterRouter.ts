import { Router } from "express";
import CharactersRepository from "../../characters/repository/CharactersRepository.js";
import CharactersController from "../../characters/controller/CharactersController.js";
import Character from "../../characters/model/Character.js";

const charactersRouter = Router();

const charactersRepository = new CharactersRepository(Character);

const charactersController = new CharactersController(charactersRepository);

charactersRouter.get("/", charactersController.getCharacters);

export default charactersRouter;
