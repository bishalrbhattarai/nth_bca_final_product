import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const AddMember = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    memberId: "",
    cardNumber: "",
    name: "",
    Address: "",
    Phone: "",
    designation: "",
    citizenshipNumber: "",
    firmName: "",
  });

  const [toast, setToast] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle the submission of the form
    console.log("Form submitted with data:", formData);
    // You can also reset the form data if needed

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/member/add-member`,
        formData
      );

      if (data.success) {
        navigate("/admin/member-management");
      } else {
        setFormData({
          memberId: "",
          cardNumber: "",
          name: "",
          Address: "",
          Phone: "",
          designation: "",
          citizenshipNumber: "",
          firmName: "",
        });

        setToast({
          open: true,
          severity: "error",
          message: data.message,
        });
      }
    } catch (error) {
      console.log(error.response.data.message);

      setFormData({
        memberId: "",
        cardNumber: "",
        name: "",
        Address: "",
        Phone: "",
        designation: "",
        citizenshipNumber: "",
        firmName: "",
      });

      setToast({
        open: true,
        severity: "error",
        message: "Something went wrong",
      });
    }

    // Show success toast
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast({ ...toast, open: false });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h5" align="center">
            Add Member
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Member ID"
              name="memberId"
              value={formData.memberId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Card Number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Address"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Citizenship Number"
              name="citizenshipNumber"
              value={formData.citizenshipNumber}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Firm Name"
              name="firmName"
              value={formData.firmName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ backgroundColor: "#0c1c55" }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseToast}
          severity={toast.severity}
        >
          {toast.message}
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
};

export default AddMember;
