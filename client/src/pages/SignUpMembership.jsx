import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
  Stack,
  Snackbar,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";

const SignUpMembership = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("no errors");
  const [severity, setSeverity] = useState("success");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    console.log(profilePic);
    console.log(pdfFile);
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("pdfFile", pdfFile);
    formData.append("name", name);
    formData.append("phoneNumber", phoneNumber);

    if (
      profilePic == null ||
      pdfFile == null ||
      name == "" ||
      phoneNumber.length != 10
    ) {
      setSeverity("error");
      setMessage("Invalid Input");
      setPdfFile(null);
      setProfilePic(null);
      setName("");
      setPhoneNumber("");
      handleClick();
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/record/submit-form`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProfilePic(null);
      setPdfFile(null);
      if (data.success) {
        setName("");
        setPhoneNumber("");
        setMessage(data.message);
        setSeverity(data.severity);
      } else {
        setMessage(data.message);
        setSeverity(data.severity);
      }
      handleClick();
    } catch (error) {
      setMessage(error.response.data.message);
      setSeverity(error.response.data.severity);
      setName("");
      setPhoneNumber("");
      handleClick();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
    }
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdfFile(file);
    }
  };

  const handleCancelPdf = () => {
    setPdfFile(null);
  };

  return (
    <>
      <Typography variant="h5" sx={{ mt: 2 }} align="center" gutterBottom>
        Sign Up for Membership
      </Typography>
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          maxWidth: 400,
          margin: "auto",
          padding: 2,
          border: "1px solid #ccc",
          borderRadius: 4,
        }}
      >
        <Box position="relative">
          <label htmlFor="profile-picture-upload">
            {profilePic ? (
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={URL.createObjectURL(profilePic)}
              />
            ) : (
              <Avatar sx={{ width: 100, height: 100 }}>
                <AddPhotoAlternateIcon style={{ fontSize: 20 }} />
              </Avatar>
            )}
            <input
              accept="image/*"
              id="profile-picture-upload"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </label>
        </Box>

        <TextField
          label="Name"
          variant="outlined"
          value={name}
          fullWidth
          onChange={(e) => {
            setName(e.target.value);
          }}
          size="small"
          required
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          size="small"
          required
        />
        {pdfFile && (
          <Box display="flex" alignItems="center">
            <Typography variant="body1">{pdfFile.name}</Typography>
            <CancelIcon
              onClick={handleCancelPdf}
              sx={{ cursor: "pointer", marginLeft: 1 }}
            />
          </Box>
        )}
        <label htmlFor="pdf-upload">
          <input
            accept=".pdf"
            id="pdf-upload"
            type="file"
            onChange={handlePdfChange}
            style={{ display: "none" }}
          />
          <Button
            endIcon={<PictureAsPdfIcon />}
            variant="outlined"
            sx={{
              backgroundColor: "#0c1c55",
              color: "white",
              "&:hover": {
                color: "black",
              },
            }}
            component="span"
          >
            Upload PDF
          </Button>
        </label>

        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ backgroundColor: "#0c1c55" }}
          fullWidth
        >
          Submit
        </Button>
      </Box>

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
    </>
  );
};

export default SignUpMembership;
