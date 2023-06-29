import { DataTypes } from "sequelize";
import { Customers } from "./Customer.js";
import { Products } from "./Product.js";
import { sequelize } from "../server/mysql.js";

const Purchased = sequelize.define("Purchased", {
  PurchasedID: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  CustomersID: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    references: {
      model: Customers,
      key: "CustomersID",
    },
  },
  ProductsID: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    references: {
      model: Products,
      key: "ProductsID",
    },
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  TotalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  OrderDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

(async () => {
  await Purchased.sync({ alter: true });
})();

export { Purchased };
