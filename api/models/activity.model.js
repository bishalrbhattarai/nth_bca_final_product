import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js"; // Import Sequelize instance

const Activity = sequelize.define(
  "Activity",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Title should not be empty" },
      },
    },
    description: {
      type: DataTypes.STRING(1000), // Increase the size to 1000 characters
      allowNull: false,
      validate: {
        notEmpty: { msg: "Description should not be empty" },
      },
    },
    activity: {
      type: DataTypes.JSON, // Using JSON data type for array
      allowNull: false,
      validate: {
        notEmpty: { msg: "Activity should not be empty" },
      },
      get() {
        const activityData = this.getDataValue("activity");
        // Convert activityData to array if it's a string
        return typeof activityData === "string"
          ? JSON.parse(activityData)
          : activityData;
      },
      set(value) {
        this.setDataValue("activity", JSON.stringify(value));
      },
    },
  },
  {
    timestamps: true,
    modelName: "Activity",
    tableName: "activities",
  }
);

(async () => {
  await Activity.sync(); // Synchronize the model with the database
})();

export default Activity;
