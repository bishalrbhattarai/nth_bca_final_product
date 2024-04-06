import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();

const app = express();
import cors from "cors";
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, "/uploads")));
app.use(express.static(join(__dirname, "/pdfUploads")));
app.use(express.static(join(__dirname, "/activity")));

import { connectToDB } from "./db/connection.js";
import Admin from "./models/admin.model.js";

import adminRoutes from "./routes/adminRoutes.js";
import recordRoutes from "./routes/recordRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
app.use("/record", recordRoutes);
app.use("/admin", adminRoutes);
app.use("/member", memberRoutes);
app.use("/activity", activityRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "The Backend is Running",
  });
});

app.listen(process.env.PORT || 3000, async () => {
  console.log(`Server running on port ${process.env.PORT}`);
  try {
    await connectToDB();

    (async () => {
      const existingAdmin = await Admin.findOne({
        where: { username: "admin" },
      });
      if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash("admin", 10);
        await Admin.create({ username: "admin", password: hashedPassword });
      }
    })();
  } catch (error) {
    console.log(error);
  }
});
