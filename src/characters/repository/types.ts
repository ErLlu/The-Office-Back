import type Character from "../types.js";
import type CharacterStructure from "../types.js";

interface CharactersRepository {
  getAll(): Promise<Character[]>;
  createCharacter(characterData: CharacterData): Promise<CharacterStructure>;
}

export default CharactersRepository;
