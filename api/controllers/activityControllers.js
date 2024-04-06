import Activity from "../models/activity.model.js";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const createPost = async (req, res) => {
  try {
    console.log(req.files);
    //   const acitivity = await Activity.findAll();
    const activityImages = req.files.map((file) => file.filename);
    console.log(activityImages);

    const newActivity = await Activity.create({
      title: req.body.title,
      description: req.body.description,
      activity: activityImages,
    });

    res.json({ success: true, data: newActivity });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const activities = await Activity.findAll({
      raw: false,
      order: [["createdAt", "DESC"]],
    });
    const activitiesDataValues = activities.map((activity) => {
      const dataValues = activity.dataValues;
      // Parse the activity string into an array
      dataValues.activity = JSON.parse(dataValues.activity);
      return dataValues;
    });

    console.log(activitiesDataValues);
    res.status(200).json({
      success: true,
      posts: activitiesDataValues,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Activity.findOne({ where: { id } });
    console.log("indidual post");
    const dataValues = post.dataValues;
    // Parse the activity string into an array

    dataValues.activity = JSON.parse(dataValues.activity);

    console.log(dataValues);
    return res.json({ success: true, post: dataValues });
  } catch (error) {
    console.error("Error fetching post:", error);
    return res
      .status(500)
      .json({ success: false, error: "Failed to fetch post" });
  }
};

const getFilesToDelete = (activity) => {
  const activityFolderPath = path.join(__dirname, "../", "activity");
  let filesToDelete = [];
  if (Array.isArray(activity)) {
    activity.forEach((activityFile) => {
      const fileName = activityFile.split("/").pop(); // Extract file name from the file path
      filesToDelete.push(path.join(activityFolderPath, fileName));
    });
  }
  return filesToDelete;
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Activity.findByPk(id);

    const filesToDelete = getFilesToDelete(post.activity);
    filesToDelete.forEach((filePath) => {
      fs.unlinkSync(filePath);
    });

    await Activity.destroy({ where: { id } });

    const activities = await Activity.findAll({
      raw: false,
      order: [["createdAt", "DESC"]],
    });
    const activitiesDataValues = activities.map((activity) => {
      const dataValues = activity.dataValues;
      // Parse the activity string into an array
      dataValues.activity = JSON.parse(dataValues.activity);
      return dataValues;
    });

    res.json({
      success: true,
      posts: activitiesDataValues,
    });
  } catch (error) {
    console.error("Error Deleting post:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

export { createPost, getAllPosts, getPost, deletePost };
