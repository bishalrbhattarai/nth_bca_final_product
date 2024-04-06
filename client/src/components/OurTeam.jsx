import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import images from "../images/4memberphoto.js";

const OurTeam = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>Our Team </Typography>
        <Divider
          width="95px"
          sx={{
            borderBottomWidth: "4px",
            backgroundColor: "#0C1C55",
            marginBottom: "25px",
          }}
        />
      </Box>
      <Container sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          {[
            { name: "Ram Hari Karki", designation: "President" },
            {
              name: "Durga Bahadur Shrestha",
              designation: "Chief Patron and founder President",
            },
            {
              name: "Ashok Kumar Shrestha",
              designation: "Immediate Past President and Patron",
            },
            {
              name: "Bachhu Paudel",
              designation: "Patron and Chairman of Advisory Committee",
            },
          ].map((grid, index) => (
            <Grid item key={index} lg={3} md={6} xs={12}>
              <Card
                component={Paper}
                sx={{
                  // width: 300,
                  elevation: 5,
                  height: 270,
                  position: "relative",
                }}
              >
                {/* Upper part */}
                <div
                  style={{
                    width: "100%",
                    height: "30%",
                    backgroundColor: "whitesmoke",
                  }}
                />

                {/* Lower part */}
                <div
                  style={{
                    width: "100%",
                    height: "70%",
                    backgroundColor: "#0c1c55",
                    color: "white",
                    textAlign: "center",
                    paddingTop: "70px",
                  }}
                >
                  <Typography
                    fontSize={14}
                    // }}
                    variant="body1"
                  >
                    {grid.name} <br />
                    {grid.designation} <br />
                  </Typography>
                </div>

                {/* Avatar */}
                <Avatar
                  src={images[index]}
                  sx={{
                    width: 120,
                    height: 120,
                    position: "absolute",
                    top: "8%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    border: "2px solid white",

                    "&:hover": {
                      border: "4px solid orange",
                      // transform: "scale(1.1)",
                    }, // Border style added
                    //   borderRight: "2px solid orange",
                    //   borderLeft: "2px solid orange", // Yellow border for upper side
                    // Yellow border for upper side
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ marginTop: "20px" }} textAlign={"center"}>
          <Link to="/executive-member">
            <Button
              variant="contained"
              sx={{
                marginTop: "10px",
                textTransform: "capitalize",
                backgroundColor: "whitesmoke",
                padding: "10px 15px",
                color: "black",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              VIEW MORE
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default OurTeam;
