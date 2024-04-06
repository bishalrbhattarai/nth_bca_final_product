import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ActivityManagement = () => {
  const [posts, setPosts] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const getAllPosts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/activity/get-all-posts`
      );
      console.log(data);
      if (data.success) {
        setPosts(data.posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log("the selected id is", id);
      const { data } = await axios.delete(
        `${import.meta.env.VITE_API_URL}/activity/delete-post/${id}`
      );
      if (data.success) {
        setPosts(data.posts);
        setSnackbarOpen(true); // Open the snackbar when deletion is successful
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreatePost = () => {
    navigate("/admin/create-post");
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div style={{ padding: "20px", textAlign: "end" }}>
      {/* Button to create new post */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ marginBottom: "20px", backgroundColor: "#0c1c55" }}
        onClick={handleCreatePost}
      >
        Create Post
      </Button>

      {/* Gallery layout for posts */}
      <Grid container spacing={3}>
        {posts?.length > 0 ? (
          <>
            {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card>
                  {/* Use the first image in the activity array as the preview image */}
                  {post.activity.length > 0 && (
                    <img
                      src={`${import.meta.env.VITE_API_URL}/${
                        post.activity[0]
                      }`} // Use the URL of the first image
                      alt={`Preview of ${post.title}`}
                      style={{ width: "100%", height: 180, objectFit: "cover" }}
                    />
                  )}
                  <CardContent>
                    <Typography
                      textAlign={"center"}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {post.title}
                    </Typography>
                    <Typography
                      textAlign="start"
                      variant="body2"
                      color="text.secondary"
                    >
                      {post.description.slice(0, 75)}....
                    </Typography>
                    <Typography
                      textAlign="start"
                      variant="body2"
                      color="text.secondary"
                    >
                      {post.activity.length}
                      <IconButton>
                        <CameraAltIcon sx={{ color: "black" }} />
                      </IconButton>
                    </Typography>
                    <Button
                      onClick={() => handleDelete(post.id)}
                      endIcon={<DeleteIcon />}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, backgroundColor: "red", color: "#fff" }}
                    >
                      Delete
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </>
        ) : (
          // Render a message if there are no posts available
          <Grid item xs={12}>
            <Typography variant="h5" align="center" color="textSecondary">
              No data available
            </Typography>
          </Grid>
        )}
      </Grid>
      {/* Snackbar for deletion success */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000} // Adjust the duration as needed
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Deleted Successfully
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ActivityManagement;
