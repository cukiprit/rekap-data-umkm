import { DataTypes } from "sequelize";
import { sequelize } from "../server/mysql.js";

const Expense = sequelize.define("Expense", {
  ExpenseID: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  ExpenseDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  ExpenseDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

(async () => {
  await Expense.sync({ alter: true });
})();

export { Expense };
