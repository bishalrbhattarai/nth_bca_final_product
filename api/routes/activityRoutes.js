import express from "express";
const router = express.Router();
import upload from "../middlewares/activityMulter.js";
import {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
} from "../controllers/activityControllers.js";

router.get("/get-all-posts", getAllPosts);
router.post("/create-post", upload.array("activity"), createPost);
router.get("/get-post/:id", getPost);
router.delete("/delete-post/:id", deletePost);

export default router;
