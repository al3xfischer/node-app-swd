var boot = require("../bin/www").boot,
  shutdown = require("../bin/www").shutdown,
  port = require("../bin/www").port,
  superagent = require("superagent"),
  expect = require("expect.js");

describe("server", () => {
  before(() => {
    boot();
  });

  describe("homepage", () => {
    it("should respond to GET", done => {
      superagent.get("http://localhost:" + port).end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
    });
    it("should render h1 title", done => {
      superagent.get("http://localhost:" + port).end((err, res) => {
        expect(res.text).contain("<h1>SW Deployment</h1>");
        done();
      });
    });
  });

  after(() => {
    shutdown();
  });
});
