import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../../server/app/app";
import request from "supertest";
import connectToDataBase from "../../database";
import Character from "../model/Character";
import type CharacterStructure from "../types";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const mongoDbUrl = server.getUri();

  await connectToDataBase(mongoDbUrl);
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});

const juan: CharacterStructure = {
  name: "Juan",
  age: 30,
  position: "Musico de ambiente en la oficina",
  isWorking: true,
  urlImage:
    "https://cdn.careeronestop.org/OccVids/OccupationVideos/43-3051.00.jpg",
  description: "Aquí en la oficina",
  alternativeText: "Juan mirando a cámara",
  seasons: "1-7",
};

describe("Given the get/characters endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with status 200 and a list of characters", async () => {
      await Character.create(juan);

      const response = await request(app).get("/characters").expect(200);

      const body = response.body as { characters: CharacterStructure[] };

      expect(body.characters).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: "Juan",
            age: 30,
            position: "Musico de ambiente en la oficina",
            isWorking: true,
            urlImage:
              "https://cdn.careeronestop.org/OccVids/OccupationVideos/43-3051.00.jpg",
            description: "Aquí en la oficina",
            alternativeText: "Juan mirando a cámara",
            seasons: "1-7",
          }),
        ]),
      );
    });
  });
});

describe("When it receives a Request without characters", () => {
  test("Then it should respond with 'Endpoint not found' error ", async () => {
    await mongoose.disconnect();

    const expectedErrorMessage = "Endpoint not found";

    const response = await request(app)
      .get("/not-existing-endpoint")
      .expect(404);

    const body = response.body as { error: string };

    expect(body.error).toBe(expectedErrorMessage);
  });
});
