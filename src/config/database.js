module.exports = {
  host: "postgres-db",
  username: "docker",
  password: "docker",
  database: "nodeauth",
  dialect: "postgres",
  operatorsAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
