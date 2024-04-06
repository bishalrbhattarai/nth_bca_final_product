// import mongoose from "mongoose";
// const connectToDB = async () => {
//   try {
//     await mongoose.connect(
//       `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.yxggf1x.mongodb.net/nth_bca?retryWrites=true&w=majority&appName=Cluster0`
//     );
//     console.log("connection established to mongoDB");
//   } catch (err) {
//     console.log(err);
//     console.log("could not connect to DB");
//   }
// };

// export default connectToDB;

import { Sequelize } from "sequelize";

// const sequelize = new Sequelize(
//   `mysql://root:root123@localhost:3306/nth_bca_db`,
//   {
//     dialect: "mysql",
//   }
// );

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("nth_bca_db", "root", "root123", {
  host: "localhost",
  dialect: "mysql",
});

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("connected to mysql sequelize");

    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};

export { sequelize, connectToDB };
