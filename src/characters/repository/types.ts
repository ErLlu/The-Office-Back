import type Character from "../types.js";

interface CharactersRepository {
  getAll(): Promise<Character[]>;
}

export default CharactersRepository;
