import type Character from "../types";

interface CharacterRepository {
  getAll(): Promise<Character[]>;
}

export default CharacterRepository;
