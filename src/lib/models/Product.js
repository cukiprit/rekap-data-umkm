import { DataTypes } from "sequelize";
import { sequelize } from "../server/mysql.js";

const Products = sequelize.define("Products", {
  ProductsID: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  ProductName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

(async () => {
  await Products.sync({ alter: true });
})();

export { Products };
