import { type Model } from "mongoose";
import type CharacterStructure from "../types";

class CharactersRepository implements CharactersRepository {
  constructor(public characterModel: Model<CharacterStructure>) {}

  async getAll(): Promise<CharacterStructure[]> {
    const characters = await this.characterModel.find().exec();

    return characters;
  }
}

export default CharactersRepository;
