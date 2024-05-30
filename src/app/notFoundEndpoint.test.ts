import request from "supertest";
import { app } from "./app.js";

describe("Given a not existing endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with status 404 and the message: 'Endpoint not found'", async () => {
      const response = await request(app)
        .get("/not-existing-endpoint")
        .expect(404);

      const body = response.body as { error: string };

      const expectedMessage = "Endpoint not found";

      expect(body.error).toBe(expectedMessage);
    });
  });
});
