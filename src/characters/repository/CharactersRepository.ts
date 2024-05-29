import type CharacterStructure from "../types";
import type CharacterRepository from "./types";
import { type Model } from "mongoose";

class CharactersRepository implements CharacterRepository {
  constructor(public characterModel: Model<CharacterStructure>) {}

  async getAll(): Promise<CharacterStructure[]> {
    const characters = await this.characterModel.find().exec();

    return characters;
  }
}

export default CharactersRepository;
