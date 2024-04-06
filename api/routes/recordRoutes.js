import express from "express";
import upload from "../middlewares/mul.js";
const router = express.Router();
import {
  submitForm,
  allRecords,
  deleteRecord,
} from "../controllers/recordControllers.js";
router.post(
  "/submit-form",
  upload.fields([{ name: "profilePic" }, { name: "pdfFile" }]),
  submitForm
);

router.get("/all-records", allRecords);
router.delete("/delete-record/:id", deleteRecord);

export default router;
