import express from "express";
import CharactersRepository from "../../characters/repository/CharactersRepository";
import character from "../../characters/model/model";
import CharactersController from "../../characters/controller/CharactersController";

const charactersRouter = express.Router();

const charactersRepository = new CharactersRepository(character);
const charactersController = new CharactersController(charactersRepository);

charactersRouter.get("/", charactersController.getCharacters);

export default charactersRouter;
