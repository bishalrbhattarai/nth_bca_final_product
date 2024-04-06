import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Grid, Card, CardMedia, Box, Divider } from "@mui/material";
import axios from "axios";

const ActivitiesIndividual = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  const getPost = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/activity/get-post/${id}`
      );
      setPost(data.post);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [id]);

  return (
    <>
      <Grid container spacing={4}>
        {Object.keys(post).length > 0 && (
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "40px" }}>{post.title} </Typography>
              <Divider
                width="90px"
                sx={{
                  //   borderTopWidth: "10px",
                  borderBottomWidth: "4px",
                  // backgroundColor: "#FF7E84",
                  backgroundColor: "#0C1C55",
                  marginBottom: "25px",
                }}
              />
            </Box>

            <Grid mt={"10px"} container spacing={2}>
              {post.activity &&
                post.activity.map((image, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card elevation={16}>
                      <CardMedia
                        component="img"
                        height="240"
                        image={`${import.meta.env.VITE_API_URL}/${image}`}
                        alt={`Activity ${index + 1}`}
                      />
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        )}
      </Grid>

      <Typography variant="h5" gutterBottom>
        {post.description}
      </Typography>
    </>
  );
};

export default ActivitiesIndividual;
