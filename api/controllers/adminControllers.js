import Admin from "../models/admin.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    console.log("here is the code!");
    const { username, password } = req.body;

    // Find admin by username
    const admin = await Admin.findOne({ where: { username } });
    if (!admin) {
      return res.status(404).json({
        success: false,
        severity: "error",
        message: "Username Not Found!!",
      });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (passwordMatch) {
      // Generate JWT token
      const token = jwt.sign({ id: admin.id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      delete admin.dataValues.password; // Remove password from response
      return res.status(200).json({
        success: true,
        token,
        username: admin.username,
        id: admin.id,
      });
    } else {
      return res.status(400).json({
        success: false,
        severity: "error",
        message: "Password is not matching!!",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      severity: "error",
      message: "Something Went Wrong!!",
    });
  }
};

const changePassword = async (req, res) => {
  console.log("change password mai gayo");
  const { oldPassword, newPassword, confirmPassword, username } = req.body;
  try {
    // Find admin by username
    const admin = await Admin.findOne({ where: { username } });
    console.log("the found admin is");
    console.log(admin);
    if (!admin) {
      return res.status(404).json({
        success: false,
        severity: "error",
        message: "Admin with such username not found!!",
      });
    }

    // Compare old password
    const passwordMatch = await bcrypt.compare(oldPassword, admin.password);
    if (!passwordMatch) {
      return res.status(404).json({
        success: false,
        severity: "error",
        message: "Password Not Matching!!",
      });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update admin's password
    await admin.update({ password: hashedPassword });

    return res.status(201).json({
      success: true,
      severity: "success",
      message: "Password Updated Successfully!!",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      severity: "error",
      message: "Something Went Wrong!!",
    });
  }
};
export { login, changePassword };
