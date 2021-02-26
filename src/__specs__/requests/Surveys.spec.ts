import request from "supertest";
import { getConnection } from "typeorm";

import { app } from "../../app";
import createConnection from "../../database";

describe("Surveys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  describe("create survey", () => {
    it("should create survey with success", async () => {
      const response = await request(app).post("/surveys").send({
        title: "this is only a test",
        description: "This is only a test description"
      });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
    });
  });

  describe("get surveys", () => {
    it("should return surveys with success", async () => {
      await request(app).post("/surveys").send({
        title: "this is only a test",
        description: "This is only a test description"
      });
      const response = await request(app).get("/surveys")

      expect(response.status).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
});
