import { DataTypes } from "sequelize";
import { sequelize } from "../server/mysql.js";

const Reports = sequelize.define("Reports", {
  reportId: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  reportDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sales: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  inventory: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  caption: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "Tidak Ada Keterangan",
  },
});

(async () => {
  await Reports.sync({ alter: true });
})();

export { Reports };
