import request from "supertest";

import { app } from "../../app";
import createConnection from "../../database";

describe("User", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  describe("create user", () => {
    it("should create user with success", async () => {
      const response = await request(app).post("/users").send({
        email: "example@example.com",
        name: "user Example"
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
    });

    it("should not create and return unprocessable entity", async () => {
      const response = await request(app).post("/users").send({
        email: "example@example.com",
        name: "user Example"
      });

      expect(response.status).toBe(322);
      expect(response.body).toHaveProperty("error");
    });
  });
});
