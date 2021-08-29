const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Flavio",
  email: "flavionobre@tallos.com",
  password_hash: "dasdsakdakdasdkasd",
});

// definição de rotas

module.exports = routes;
