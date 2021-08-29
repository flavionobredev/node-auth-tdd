const routes = require("express").Router();
const SessionController = require("./app/controllers/session.controller");
const { User } = require("./app/models");

routes.post("/sessions", SessionController.store);

module.exports = routes;
