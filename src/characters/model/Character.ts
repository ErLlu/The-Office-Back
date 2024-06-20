import mongoose, { Schema } from "mongoose";
import { type CharacterStructure } from "../types";

const characterSchema = new Schema<CharacterStructure>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  position: {
    type: String,
  },
  seasons: {
    type: String,
  },
  isWorking: {
    type: Boolean,
  },
  urlImage: {
    type: String,
    required: true,
  },
  alternativeText: {
    type: String,
    default: "Personaje de The Office",
  },
  description: {
    type: String,
  },
});

const Character = mongoose.model("Character", characterSchema, "characters");

export default Character;
