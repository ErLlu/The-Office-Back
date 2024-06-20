import { type CharacterStructure, type CharacterDataInfo } from "../types.js";

interface CharactersRepository {
  getAll(): Promise<CharacterStructure[]>;
  createCharacter(
    characterDataInfo: CharacterDataInfo,
  ): Promise<CharacterStructure>;
}

export default CharactersRepository;
