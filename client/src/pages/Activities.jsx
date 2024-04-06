import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { Box, Divider, IconButton } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Activities = () => {
  const [posts, setPosts] = useState([]);
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

  const handleCreatePost = () => {
    navigate("/admin/create-post");
  };

  const handleViewDetails = (id) => {
    navigate(`/activities/${id}`);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "40px" }}>Activities </Typography>
        <Divider
          width="95px"
          sx={{
            borderBottomWidth: "4px",
            backgroundColor: "#0C1C55",
            marginBottom: "25px",
          }}
        />
      </Box>
      <div style={{ padding: "10px", textAlign: "end" }}>
        {/* Gallery layout for posts */}
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Use the first image in the activity array as the preview image */}
                {post.activity.length > 0 && (
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${post.activity[0]}`} // Use the URL of the first image
                    alt={`Preview of ${post.title}`}
                    style={{ width: "100%", height: 200, objectFit: "cover" }}
                  />
                )}
                <CardContent>
                  <Typography
                    textAlign={"center"}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    textAlign={"start"}
                    variant="body2"
                    color="text.secondary"
                  >
                    {post.description.slice(0, 75)}....
                  </Typography>
                  <Typography textAlign={"start"} variant="body2">
                    {post.activity.length}
                    <IconButton sx={{ color: "black" }}>
                      {" "}
                      <CameraAltIcon />{" "}
                    </IconButton>
                  </Typography>
                </CardContent>

                <Button
                  variant="contained"
                  onClick={() => handleViewDetails(post.id)}
                  sx={{ backgroundColor: "#0C1C55", color: "white", mt: 0 }}
                >
                  View Details
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Activities;
