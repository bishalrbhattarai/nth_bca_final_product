// import React, { useEffect, useState } from "react";
// import { DataGrid, checkGridRowIdIsValid } from "@mui/x-data-grid";
// import axios from "axios";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import {
//   Box,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const MemberManagement = () => {
//   const [members, setMembers] = useState([]);
//   const [selectedMemberId, setSelectedMemberId] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const navigate = useNavigate();

//   const columns = [
//     { field: "id", headerName: "ID", width: 50 },
//     { field: "name", headerName: "Name", width: 150 },
//     { field: "memberId", headerName: "Member ID", width: 120 },
//     { field: "Address", headerName: "Address", width: 150 },
//     { field: "Phone", headerName: "Phone", width: 150 },
//     { field: "designation", headerName: "Designation", width: 150 },
//     {
//       field: "citizenshipNumber",
//       headerName: "Citizenship No.",
//       width: 150,
//     },
//     { field: "firmName", headerName: "Firm Name", width: 200 },
//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 140,
//       renderCell: (params) => (
//         <div>
//           <Button
//             variant="outlined"
//             color="error"
//             startIcon={<DeleteIcon />}
//             onClick={() => handleDelete(params.id)}
//           ></Button>
//           <Button
//             variant="outlined"
//             color="primary"
//             startIcon={<EditIcon />}
//             onClick={() => handleUpdate(params.id)}
//           ></Button>
//         </div>
//       ),
//     },
//   ];

//   const getAllMembers = async () => {
//     try {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_API_URL}/member/all-members`
//       );
//       console.log("the actual data");
//       console.log(data);
//       setMembers(data.members);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllMembers();
//   }, []);

//   const handleAddMember = () => {
//     // You can implement logic to handle adding a new member here
//     console.log("Add member clicked");
//   };

//   const handleDelete = (id) => {
//     setSelectedMemberId(id);
//     setOpenDialog(true);
//   };

//   const handleUpdate = (id) => {
//     // You can implement logic to handle updating a member here
//     console.log("Update member with ID:", id);
//   };

//   const handleConfirmDelete = async () => {
//     // Logic to delete member

//     try {
//       const { data } = await axios.post(
//         `${import.meta.env.VITE_API_URL}/member/delete-member`,
//         selectedMemberId
//       );
//     } catch (error) {
//       console.log(error);
//     }

//     // Close the dialog
//     setOpenDialog(false);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <div
//       style={{
//         height: "100%",
//         width: "95%",
//         marginLeft: "auto",
//         marginRight: "auto",
//       }}
//     >
//       <Box
//         sx={{
//           textAlign: "right",
//           mb: 2,
//         }}
//       >
//         <Button
//           onClick={() => {
//             navigate("/admin/add-member");
//           }}
//           variant="contained"
//           sx={{
//             backgroundColor: "#0c1c55",
//           }}
//           startIcon={<AddIcon />}
//         >
//           User
//         </Button>
//       </Box>
//       <DataGrid
//         rows={members}
//         columns={columns}
//         pageSizeOptions={[5, 10, 15]}
//         autoHeight
//       />
//       <Dialog open={openDialog} onClose={handleCloseDialog}>
//         <DialogTitle>Confirm Delete</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Are you sure you want to delete this member?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleConfirmDelete} color="error">
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default MemberManagement;

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const MemberManagement = () => {
  const navigate = useNavigate();

  const [members, setMembers] = useState([]);
  const [selectedMemberId, setSelectedMemberId] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const columns = [
    // { field: "id", headerName: "ID", width: 50 },
    { field: "memberId", headerName: "Member ID", width: 110 },
    { field: "cardNumber", headerName: "Card Number", width: 130 },

    { field: "name", headerName: "Name", width: 150 },
    { field: "Address", headerName: "Address", width: 145 },
    { field: "Phone", headerName: "Phone", width: 145 },
    { field: "designation", headerName: "Designation", width: 145 },
    {
      field: "citizenshipNumber",
      headerName: "Citizenship No.",
      width: 155,
    },
    { field: "firmName", headerName: "Firm Name", width: 170 },
    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      renderCell: (params) => (
        <div>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(params.id)}
          ></Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<EditIcon />}
            onClick={() => handleUpdate(params.id)}
          ></Button>
        </div>
      ),
    },
  ];

  const getAllMembers = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/member/all-members`
      );
      console.log(data);
      setMembers(data.members);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  const handleAddMember = () => {
    console.log("Add member clicked");
  };

  const handleDelete = (id) => {
    console.log(id);
    setSelectedMemberId(id);
    setOpenDialog(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/member/delete-member`,
        { selectedMemberId }
      );

      setMembers(data.members);

      setSnackbarSeverity("success");
      setSnackbarMessage("Member deleted successfully");
      handleSnackbarOpen(); // Open Snackbar
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage("Failed to delete member");
      handleSnackbarOpen(); // Open Snackbar
    }

    setOpenDialog(false); // Close the dialog
  };

  const handleUpdate = (id) => {
    navigate(`/admin/update-member/${id}`);
  };

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div
      style={{
        height: "100%",
        width: "97%",
        // marginLeft: "auto",
        // marginRight: "auto",
      }}
    >
      <Box
        sx={{
          textAlign: "right",
          mb: 2,
        }}
      >
        <Button
          onClick={() => {
            navigate("/admin/add-member");
          }}
          variant="contained"
          sx={{
            backgroundColor: "#0c1c55",
          }}
          startIcon={<AddIcon />}
        >
          User
        </Button>
      </Box>
      <DataGrid
        rows={members}
        columns={columns}
        pageSizeOptions={[5, 10, 15]}
        autoHeight
      />
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this member?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MemberManagement;
