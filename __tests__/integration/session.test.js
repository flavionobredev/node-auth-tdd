const { User } = require("../../src/app/models");
const request = require("supertest");
const truncate = require("../utils/truncate.util");
const app = require("../../src/app");

describe("Authentication", () => {
  beforeEach(async () => await truncate());

  it("should authenticate with valid credentials", async () => {
    const user = await User.create({
      name: "Flavio",
      email: "flavionobre@tallos.com",
      password_hash: "123456",
    });

    const response = await request(app).post("/sessions").send({
      email: user.email,
      password: "123456",
    });

    expect(response.status).toBe(200);
  });
});
