export interface CharacterStructure {
  _id: string;
  name: string;
  age: number;
  position: string;
  seasons: string;
  isWorking: boolean;
  urlImage: string;
  alternativeText: string;
  description: string;
}

export type CharacterDataInfo = Omit<CharacterStructure, "_id" | "isWorking">;
