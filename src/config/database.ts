import { Sequelize } from "sequelize";
import path from "path";
import fs from "fs";

const sequelize = new Sequelize("backlinks_db", "user", "password", {
  host: process.env.DB_HOST || "localhost",
  dialect: "postgres",
  // logging: console.log,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  retry: {
    max: 5,
  },
});

const modelsPath = path.join(__dirname, "../models");

(async () => {
  const files = fs
    .readdirSync(modelsPath)
    .filter((file) => file.endsWith(".ts") || file.endsWith(".js"));

  for (const file of files) {
    const modelModule = await import(path.join(modelsPath, file));
    const model = modelModule.default;
    if (model && model.initModel) {
      model.initModel(sequelize);
    }
  }
})();

export default sequelize;
