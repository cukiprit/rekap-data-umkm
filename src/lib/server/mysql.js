import Sequelize from "sequelize";

const db = {
  db: "web_umkm",
  username: "root",
  password: "",
};

const sequelize = new Sequelize(db.db, db.username, db.password, {
  host: "localhost",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully!");
} catch (error) {
  console.error("Unable to connect to the database: ", error);
  sequelize.close();
}

export { sequelize };
