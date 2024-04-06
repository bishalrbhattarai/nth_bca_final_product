import React, { useState } from "react";
import { Box, TextField, Button, Typography, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("no errors");
  const [severity, setSeverity] = useState("error");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = async (e) => {
    let catchData;
    e.preventDefault();
    console.log(username);
    console.log(password);
    if (username == "" || password == "") {
      setUsername("");
      setPassword("");
      setSeverity("error");
      setMessage("Please fill up the form !!");
      handleOpen();
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/admin/login`,
        {
          username,
          password,
        }
      );
      catchData = data;
      console.log(catchData);
      if (data.success) {
        dispatch(setUser(data));
        navigate("/admin");
      }
      if (data.success == false) {
        setSeverity(data.severity);
        setMessage(data.message);
        handleOpen();
      }
    } catch (error) {
      // setSeverity(catchData.response.data.severity);
      // setMessage(catchData.response.data.message);
      setSeverity(error.response.data.severity);
      setMessage(error.response.data.message);
      setUsername("");
      setPassword("");
      handleOpen();
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const changeUsername = (e) => {
    setUsername(e.target.value.trim());
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Typography
        sx={{
          mt: 2.8,
        }}
        variant="h4"
        gutterBottom
      >
        Admin Login
      </Typography>
      <Box
        sx={{
          width: 350,
          backgroundColor: "white",
          padding: 3,
          borderRadius: 4,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          onChange={changeUsername}
          size="small"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          onChange={changePassword}
          fullWidth
          size="small"
          sx={{ mb: 2 }}
        />

        <Button
          onClick={handleClick}
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#0c1c55", mb: 3 }}
        >
          Login
        </Button>
      </Box>

      {/* Snackbar component for displaying the toast */}
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        {/* Alert component to customize the appearance of the toast */}
        <MuiAlert
          // onClose={handleClose}
          severity={severity} // You can change the severity to 'error', 'warning', or 'info'
          sx={{ width: "100%", fontWeight: "bold" }}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default Login;
