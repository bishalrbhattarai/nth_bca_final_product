import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.user.username);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleChangePassword = async () => {
    if (oldPassword === "" || newPassword === "" || confirmPassword === "") {
      setSeverity("error");
      setMessage("Please fill in all fields.");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else if (newPassword !== confirmPassword) {
      setSeverity("error");
      setMessage("New password and confirm password do not match.");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/change-password`,
        {
          oldPassword,
          newPassword,
          confirmPassword,
          username,
        }
      );
      if (data.success) {
        navigate("/admin");
      } else {
        setSeverity(data.severity);
        setMessage(data.message);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    }
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // minHeight: "vh",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: "#0c1c55" }}>
        Change Password
      </Typography>
      <Box
        sx={{
          maxWidth: 400,
          width: "100%",
          mt: 2,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 4,
          boxShadow: 1,
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <TextField
          label="Old Password"
          type="password"
          fullWidth
          margin="normal"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <TextField
          label="New Password"
          type="password"
          fullWidth
          margin="normal"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          label="Confirm New Password"
          type="password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleChangePassword}
          fullWidth
          sx={{ mt: 2, backgroundColor: "#0c1c55" }}
        >
          Change Password
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ChangePassword;
