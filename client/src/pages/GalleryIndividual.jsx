import React from "react";
import { useParams } from "react-router-dom";
import Appointment24 from "../images/24agm";
import FNCCIImages from "../images/bodImages.js";
import { Box, Card, Container, Divider, Grid, Typography } from "@mui/material";
let nameTitle;
const GalleryIndividual = () => {
  const { name } = useParams();
  let images;

  if (name.startsWith("24")) {
    images = Appointment24;
    nameTitle = "24th Annual General Meeting";
  }
  if (name.startsWith("FNCCI")) {
    images = FNCCIImages;
    console.log("fnnic ma ho hai issue");
    nameTitle = "New Bod Members Appointment";
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px", // Add padding for spacing
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "24px", md: "35px" }, textAlign: "center" }}
        >
          {nameTitle}
        </Typography>
        <Divider
          sx={{
            width: { xs: "150px", md: "250px" }, // Adjust width for different screen sizes
            borderBottomWidth: "5px",
            backgroundColor: "#0C1C55",
            marginBottom: "20px", // Adjust margin for spacing
          }}
        />
      </Box>
      <Grid mt={"10px"} container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card elevation={12}>
              <img
                style={{
                  width: "100%",
                  height: "240px",
                }}
                src={image}
                alt={"24th Agm Meeting"}
                // loading="lazy"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GalleryIndividual;
