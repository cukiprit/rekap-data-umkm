import { DataTypes } from "sequelize";
import { sequelize } from "../server/mysql.js";

const Revenue = sequelize.define("Revenue", {
  RevenueID: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  RevenueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  RevenueAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

(async () => {
  await Revenue.sync({ alter: true });
})();

export { Revenue };
