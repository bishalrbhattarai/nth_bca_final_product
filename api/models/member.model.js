import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";

const Member = sequelize.define(
  "Member",
  {
    memberId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    citizenshipNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firmName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    modelName: "Member",
    tableName: "members", // Update with your preferred table name
  }
);

(async () => {
  await sequelize.sync();
})();

export default Member;
