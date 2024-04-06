// import mongoose from "mongoose";
// const adminSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: [true, "username is empty"],
//     },
//     password: {
//       type: String,
//       required: [true, "password is empty"],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
// export default mongoose.model("admins", adminSchema);

import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";

const Admin = sequelize.define(
  "Admin",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Username is empty" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Password is empty" },
      },
    },
  },
  {
    timestamps: true,
    modelName: "Admin", // Make sure to specify the model name
    tableName: "admins", // Make sure to specify the table name
  }
);

(async () => {
  await sequelize.sync();
})();

export default Admin;
