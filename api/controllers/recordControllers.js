import Record from "../models/record.model.js";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const submitForm = async (req, res) => {
  try {
    // console.log("submit form ");
    const [profilePic] = req.files.profilePic;
    const [pdfFile] = req.files.pdfFile;

    // console.log(req.files);
    // console.log(profilePic);
    // console.log(pdfFile);

    await Record.create({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      profilePic: profilePic.filename,
      pdfFile: pdfFile.filename,
    });
    res.json({
      success: true,
      severity: "success",
      message: "Submitted Successfully!!",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      severity: "error",
      message: "Something went wrong!!",
    });
  }
};

const allRecords = async (req, res) => {
  try {
    const records = await Record.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({
      success: true,
      records,
    });
    // console.log(records);
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      severity: "error",
      message: "Something went wrong!",
    });
  }
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Record.findByPk(id);
    const record = result.dataValues;
    console.log(record);

    if (!record) {
      return res.status(404).json({
        success: false,
        severity: "error",
        message: "Record not found",
      });
    }

    const { pdfFile, profilePic } = record;
    if (pdfFile) {
      const pdfFilePath = path.join(__dirname, "../", "pdfUploads", pdfFile);
      console.log("pdf file");
      console.log(pdfFilePath);
      if (fs.existsSync(pdfFilePath)) {
        fs.unlinkSync(pdfFilePath);
      }
    }

    if (profilePic) {
      const profilePicPath = path.join(__dirname, "../", "uploads", profilePic);
      console.log("profile pic path");
      console.log(profilePicPath);
      if (fs.existsSync(profilePicPath)) {
        fs.unlinkSync(profilePicPath);
      }
    }

    await Record.destroy({
      where: { id: id },
    });

    const records = await Record.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({
      success: true,
      records,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      severity: "error",
      message: "Something went wrong!",
    });
  }
};

export { submitForm, allRecords, deleteRecord };
