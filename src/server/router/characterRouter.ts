import { Router } from "express";
import CharactersRepository from "../../characters/repository/CharactersRepository";
import CharactersController from "../../characters/controller/CharactersController";
import Character from "../../characters/model/Character";

const charactersRouter = Router();

const charactersRepository = new CharactersRepository(Character);

const charactersController = new CharactersController(charactersRepository);

charactersRouter.get("/", charactersController.getCharacters);

export default charactersRouter;
