import type CharacterStructure from "../types";
import mongoose, { Schema } from "mongoose";

const characterSchema = new Schema<CharacterStructure>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  position: {
    type: String,
    required: true,
  },
  seasons: {
    type: String,
  },
  isWorking: {
    type: Boolean,
    required: true,
  },
  urlImage: {
    type: String,
    required: true,
  },
  alternativeText: {
    type: String,
    required: true,
    default: "Personaje de The Office",
  },
  description: {
    type: String,
    required: true,
  },
});

const Character = mongoose.model("Character", characterSchema, "Characters");

export default Character;
