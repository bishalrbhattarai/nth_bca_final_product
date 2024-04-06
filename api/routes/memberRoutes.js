import express from "express";
const router = express.Router();
import {
  allMembers,
  addMember,
  deleteMember,
  getMember,
  updateData,
} from "../controllers/memberControllers.js";
// import verifyToken from "../middlewares/verifyToken.js";

// router.post("/login", login);
// router.post("/verify-token", verifyToken);
// router.post("/change-password", changePassword);

router.get("/all-members", allMembers);
router.post("/add-member", addMember);
router.post("/delete-member", deleteMember);
router.post("/get-member", getMember);
router.post("/handle-update-data", updateData);

export default router;
