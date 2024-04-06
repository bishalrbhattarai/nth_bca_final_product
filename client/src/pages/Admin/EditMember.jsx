import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const EditMember = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [member, setMember] = useState({});
  const [error, setError] = useState(null);

  const getMemberData = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/member/get-member`,
        { id }
      );

      if (data.success) {
        setMember(data.member);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to fetch member data");
    }
  };

  useEffect(() => {
    getMemberData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to handle form submission
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/member/handle-update-data`,
        member
      );

      console.log(data);
      if (data.success) {
        navigate("/admin/member-management");
      }
    } catch (error) {
      console.error(error);
      setError(error.response.data.message || "An error occurred");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prevMember) => ({
      ...prevMember,
      [name]: value,
    }));
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(null);
  };

  return Object.keys(member).length > 0 ? (
    <>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} style={{ padding: "2rem" }}>
            <Typography variant="h5" align="center">
              Edit Member
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Member ID"
                name="memberId"
                value={member.memberId}
                onChange={handleChange}
                fullWidth
                disabled
                margin="normal"
                required
              />
              <TextField
                label="Name"
                name="name"
                value={member.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Address"
                name="Address"
                value={member.Address}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Phone"
                name="Phone"
                value={member.Phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Designation"
                name="designation"
                value={member.designation}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Citizenship Number"
                name="citizenshipNumber"
                value={member.citizenshipNumber}
                onChange={handleChange}
                // disabled
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Firm Name"
                name="firmName"
                value={member.firmName}
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
                Save Changes
              </Button>
            </form>
          </Paper>
        </Grid>
        <Snackbar
          open={error !== null}
          autoHideDuration={6000}
          onClose={handleCloseError}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleCloseError}
            severity="error"
          >
            {error}
          </MuiAlert>
        </Snackbar>
      </Grid>
    </>
  ) : null;
};

export default EditMember;
