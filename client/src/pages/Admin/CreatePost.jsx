import React, { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  IconButton,
  Card,
  CardMedia,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const handleImageSelect = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);

    setSelectedFiles((prevFiles) => [...prevFiles, ...filesArray]);

    const urlsArray = filesArray.map((file) => URL.createObjectURL(file));
    setImageURLs((prevURLs) => [...prevURLs, ...urlsArray]);
  };

  const handleRemoveImage = (index) => {
    const updatedFiles = [...selectedFiles];
    const updatedURLs = [...imageURLs];

    updatedFiles.splice(index, 1);
    updatedURLs.splice(index, 1);

    setSelectedFiles(updatedFiles);
    setImageURLs(updatedURLs);
  };

  const handleSubmit = async () => {
    // Log data before submitting
    const formData = new FormData();

    console.log({
      title: postTitle,
      activity: selectedFiles,
    });

    // Append fields to the form data
    formData.append("title", postTitle);
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("activity", selectedFiles[i]);
    }
    formData.append("description", postDescription);
    try {
      // Make POST request
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/activity/create-post`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important header for multipart form data
          },
        }
      );
      console.log(data);
      // Reset form fields after submission
      setPostTitle("");
      setPostDescription("");
      setSelectedFiles([]);
      setImageURLs([]);
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Post Title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            rows={4}
            fullWidth
            label="Post Description"
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageSelect}
            style={{ display: "none" }}
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <Button variant="contained" component="span">
              + Add Images
            </Button>
          </label>
        </Grid>
        {imageURLs.map((url, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card style={{ position: "relative" }}>
              <CardMedia
                component="img"
                image={url}
                alt={`Selected Image ${index + 1}`}
              />
              <IconButton
                onClick={() => handleRemoveImage(index)}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  zIndex: 1,
                  color: "red",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#0c1c55" }}
            onClick={handleSubmit}
          >
            Post
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatePost;
