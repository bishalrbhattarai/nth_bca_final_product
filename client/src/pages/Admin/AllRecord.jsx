// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import DeleteIcon from "@mui/icons-material/Delete";

// import {
//   Card,
//   CardContent,
//   Typography,
//   Avatar,
//   Button,
//   Box,
//   Grid,
//   TextField,
//   IconButton,
// } from "@mui/material";
// import InfoIcon from "@mui/icons-material/Info";
// import { Download, Phone, Search } from "@mui/icons-material";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";

// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

// const AllRecord = () => {
//   console.log(import.meta.env.VITE_API_URL);
//   const [records, setRecords] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showSnackbar, setShowSnackbar] = useState(false);

//   const getAllRecords = async () => {
//     try {
//       const { data } = await axios.get(
//         `${import.meta.env.VITE_API_URL}/record/all-records`
//       );
//       console.log(data);
//       if (data.success) {
//         setRecords(data.records);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   async function handleDelete(id) {
//     try {
//       const { data } = await axios.delete(
//         `${import.meta.env.VITE_API_URL}/record/delete-record/${id}`
//       );
//       if (data.success) {
//         setRecords(data.records);
//         setShowSnackbar(true);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getAllRecords();
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredRecords = records.filter((record) =>
//     record.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
//   );

//   const downloadImage = async (imageUrl) => {
//     try {
//       const response = await axios.get(imageUrl, {
//         responseType: "blob",
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", imageUrl.split("profilePic-")[1]);
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error("Error downloading image:", error);
//     }
//   };

//   return records?.length > 0 ? (
//     <>
//       <Box mb={2} display="flex" justifyContent="flex-end">
//         <TextField
//           label="Search by name"
//           variant="outlined"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           InputProps={{
//             endAdornment: <Search />,
//             sx: {
//               borderRadius: 40,
//             },
//           }}
//         />
//       </Box>
//       <Grid container spacing={2}>
//         {filteredRecords.map((record) => (
//           <Grid item key={record._id} xs={12} sm={6} md={4} lg={3}>
//             <Card elevation={5} sx={{ height: "100%" }}>
//               <CardContent>
//                 <Avatar
//                   alt="No-Image Found"
//                   src={`${import.meta.env.VITE_API_URL}/${record.profilePic}`}
//                   sx={{ width: 150, height: 150, margin: "auto" }}
//                 />
//                 <Typography textAlign={"center"} variant="h5" mt={2}>
//                   {record.name}
//                 </Typography>
//                 <Box display="flex" alignItems="center" mt={1}>
//                   <Phone />
//                   <Typography variant="body1" ml={1}>
//                     {record.phoneNumber}
//                   </Typography>
//                 </Box>
//                 <Box mt={2}>
//                   <Button
//                     fullWidth
//                     endIcon={<Download />}
//                     variant="contained"
//                     onClick={() =>
//                       downloadImage(
//                         `${import.meta.env.VITE_API_URL}/${record.profilePic}`
//                       )
//                     }
//                   >
//                     Download Image
//                   </Button>
//                 </Box>
//                 <Box mt={1}>
//                   <Button
//                     fullWidth
//                     sx={{
//                       backgroundColor: "#0c1c55",
//                     }}
//                     endIcon={<PictureAsPdfIcon />}
//                     variant="contained"
//                     href={`${import.meta.env.VITE_API_URL}/${record.pdfFile}`}
//                     download
//                     rel="noopener noreferrer"
//                   >
//                     Download PDF
//                   </Button>
//                 </Box>

//                 <Box mt={1}>
//                   <Button
//                     onClick={() => handleDelete(record.id)}
//                     fullWidth
//                     sx={{
//                       backgroundColor: "red",
//                     }}
//                     endIcon={<DeleteIcon />}
//                     variant="contained"
//                     // href={`${import.meta.env.VITE_API_URL}/${record.pdfFile}`}
//                     // download
//                     // rel="noopener noreferrer"
//                   >
//                     Delete Record
//                   </Button>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Snackbar
//         open={showSnackbar}
//         autoHideDuration={3000} // Adjust the duration as needed
//         onClose={() => setShowSnackbar(false)}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "right",
//         }}
//       >
//         <MuiAlert
//           // onClose={handleCloseSnackbar}
//           severity="success"
//           sx={{ width: "100%" }}
//         >
//           Deleted Successfully
//         </MuiAlert>
//       </Snackbar>
//     </>
//   ) : (
//     <>
//       <Typography variant="h5" align="center" pt={10} sx={{ color: "#0c1c55" }}>
//         No Records to Show
//         <IconButton>
//           <InfoIcon sx={{ color: "red", fontSize: "30px" }} />
//         </IconButton>
//       </Typography>
//     </>
//   );
// };

// export default AllRecord;

import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Box,
  Grid,
  TextField,
  IconButton,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Download, Phone, Search } from "@mui/icons-material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const AllRecord = () => {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [recordIdToDelete, setRecordIdToDelete] = useState(null);

  const getAllRecords = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/record/all-records`
      );
      if (data.success) {
        setRecords(data.records);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllRecords();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = (id) => {
    setRecordIdToDelete(id);
    setShowConfirmation(true);
  };

  const handleDeleteConfirmed = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/record/delete-record/${id}`
      );
      if (data.success) {
        setRecords(data.records);
        setShowSnackbar(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setShowConfirmation(false);
    }
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleCloseConfirmationDialog = () => {
    setShowConfirmation(false);
  };

  const filteredRecords = records.filter((record) =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  const downloadImage = async (imageUrl) => {
    try {
      const response = await axios.get(imageUrl, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", imageUrl.split("profilePic-")[1]);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return records?.length > 0 ? (
    <>
      <Box mb={2} display="flex" justifyContent="flex-end">
        <TextField
          label="Search by name"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: <Search />,
            sx: {
              borderRadius: 40,
            },
          }}
        />
      </Box>
      <Grid container spacing={2}>
        {filteredRecords.map((record) => (
          <Grid item key={record._id} xs={12} sm={6} md={4} lg={3}>
            <Card elevation={5} sx={{ height: "100%" }}>
              <CardContent>
                <Avatar
                  alt="No-Image Found"
                  src={`${import.meta.env.VITE_API_URL}/${record.profilePic}`}
                  sx={{ width: 150, height: 150, margin: "auto" }}
                />
                <Typography textAlign={"center"} variant="h5" mt={2}>
                  {record.name}
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                  <Phone />
                  <Typography variant="body1" ml={1}>
                    {record.phoneNumber}
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Button
                    fullWidth
                    endIcon={<Download />}
                    variant="contained"
                    onClick={() =>
                      downloadImage(
                        `${import.meta.env.VITE_API_URL}/${record.profilePic}`
                      )
                    }
                  >
                    Download Image
                  </Button>
                </Box>
                <Box mt={1}>
                  <Button
                    fullWidth
                    sx={{ backgroundColor: "#0c1c55" }}
                    endIcon={<PictureAsPdfIcon />}
                    variant="contained"
                    href={`${import.meta.env.VITE_API_URL}/${record.pdfFile}`}
                    download
                    rel="noopener noreferrer"
                  >
                    Download PDF
                  </Button>
                </Box>

                <Box mt={1}>
                  <Button
                    onClick={() => handleDelete(record.id)}
                    fullWidth
                    sx={{ backgroundColor: "red" }}
                    endIcon={<DeleteIcon />}
                    variant="contained"
                  >
                    Delete Record
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert severity="success" sx={{ width: "100%" }}>
          Deleted Successfully
        </MuiAlert>
      </Snackbar>
      <Modal
        open={showConfirmation}
        onClose={handleCloseConfirmationDialog}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showConfirmation}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography variant="h6">
              Are you sure you want to delete this record?
            </Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleDeleteConfirmed(recordIdToDelete)}
              >
                Yes
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCloseConfirmationDialog}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  ) : (
    <>
      <Typography variant="h5" align="center" pt={10} sx={{ color: "#0c1c55" }}>
        No Records to Show
        <IconButton>
          <InfoIcon sx={{ color: "red", fontSize: "30px" }} />
        </IconButton>
      </Typography>
    </>
  );
};

export default AllRecord;
