// import mongoose from "mongoose";
// const recordSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, "Name should not be empty"],
//     },
//     phoneNumber: {
//       type: String,
//       maxLength: 10,
//       minLength: 10,
//       required: [true, "Phone number should not be empty"],
//     },
//     pdfFile: {
//       type: String,
//       required: [true, "PDF should not be empty"],
//     },
//     profilePic: {
//       type: String,
//       required: [true, "Profile Picture should not be empty"],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model("records", recordSchema);

import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js"; // Import Sequelize instance

const Record = sequelize.define(
  "Record",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Name should not be empty" },
      },
    },
    phoneNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Phone number should not be empty" },
        len: {
          args: [10, 10],
          msg: "Phone number should be exactly 10 characters",
        },
      },
    },
    pdfFile: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "PDF should not be empty" },
      },
    },
    profilePic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Profile Picture should not be empty" },
      },
    },
  },
  {
    timestamps: true,
    modelName: "Record",
    tableName: "records",
  }
);

(async () => {
  await sequelize.sync();
})();

export default Record;
