import { type Model } from "mongoose";
import type CharacterStructure from "../types";

class CharactersRepository implements CharactersRepository {
  constructor(public readonly characterModel: Model<CharacterStructure>) {}

  async getAll(): Promise<CharacterStructure[]> {
    const characters = await this.characterModel.find().exec();

    return characters;
  }

  async createCharacter(
    characterData: CharacterData,
  ): Promise<CharacterStructure> {
    return this.characterModel.create(characterData);
  }
}

export default CharactersRepository;
