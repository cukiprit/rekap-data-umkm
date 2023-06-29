import { DataTypes } from "sequelize";
import { sequelize } from "../server/mysql.js";

const Customers = sequelize.define("Customers", {
  CustomersID: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

(async () => {
  await Customers.sync({ alter: true });
})();

export { Customers };
