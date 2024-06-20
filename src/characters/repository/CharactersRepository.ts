import { type Model } from "mongoose";
import { type CharacterStructure, type CharacterDataInfo } from "../types";

class CharactersRepository implements CharactersRepository {
  constructor(public readonly characterModel: Model<CharacterStructure>) {}

  async getAll(): Promise<CharacterStructure[]> {
    const characters = await this.characterModel.find().exec();

    return characters;
  }

  async createCharacter(
    characterDataInfo: CharacterDataInfo,
  ): Promise<CharacterStructure> {
    return this.characterModel.create(characterDataInfo);
  }
}

export default CharactersRepository;
