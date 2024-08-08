const { describe, it } = require("mocha");
const controller = require("../controller");
const userQuery = require("../controller/query");
const Sinon = require("../../../test/sinon");
const { User: userModel } = require("../../../../database/models");

describe("User Controller", () => {
  it("Failed Insert user", async () => {
    Sinon.throw(userQuery, "createUser", {
      err: true,
      data: null,
      message: "STUB",
    });

    const insertUser = await controller.createUser({ name: "test" });
  });

  it("Failed insert user at model", async () => {
    Sinon.throw(userModel, "create", new Error("ERROR STUB"));

    try {
      await userQuery.createUser({});
    } catch (error) {
    }
  });
});
