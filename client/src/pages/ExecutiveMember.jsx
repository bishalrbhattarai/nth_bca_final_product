import {
  Avatar,
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import images from "../images/memberphoto2";
const ExecutiveMember = () => {
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
        <Typography sx={{ fontSize: "40px" }}>Executive Committee </Typography>
        <Divider
          width="95px"
          sx={{
            //   borderTopWidth: "10px",
            borderBottomWidth: "4px",
            // backgroundColor: "#FF7E84",
            backgroundColor: "#0C1C55",
            marginBottom: "25px",
          }}
        />
      </Box>

      <Container>
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
            {
              name: "Nilkantha Chaulagain",
              designation: "Patron and Past President",
            },
            {
              name: "Bishu Bahadur Khatri",
              designation: "Patron and Past President",
            },
            {
              name: "Ganga Bahadur Ghimire",
              designation: "Senior Vice-President",
            },
            { name: "Suresh Shrestha", designation: "First Vice-President" },
            { name: "Sujit Shrestha", designation: "Vice-President" },
            { name: "Bharat Karki", designation: "Vice-President" },
            {
              name: "Niranjan Krishna Shrestha",
              designation: "Vice-President",
            },
            { name: "Omnath Ghimire ", designation: "Vice-President" },
            {
              name: "Ram Chandra Parajuli",
              designation: "Secretary Genaral",
            },
            {
              name: "Bharat Bahadur Aryal ",
              designation: "Senior-Secretary",
            },
            {
              name: "Bikas Prasad Risal ",
              designation: "Secretary",
            },
            {
              name: "Subba Shrestha",
              designation: "Secretary",
            },

            {
              name: "Ang Dorje Sherpa",
              designation: "Secretary",
            },

            {
              name: "Tulsi Raut",
              designation: "Secretary",
            },

            {
              name: "Lal Bahadur Basnet",
              designation: "Treasurer",
            },

            {
              name: "Suman Shrestha",
              designation: "Joint-Treasurer",
            },

            {
              name: "Maheshwor Basnet (Mahesh)",
              designation: "Executive Member",
            },

            {
              name: "Ramchandra Thapa",
              designation: "Executive Member",
            },

            {
              name: "Bishnu Prasad Neupane",
              designation: "Executive Member",
            },

            {
              name: "Lakpa Sherpa",
              designation: "Executive Member",
            },

            {
              name: "Krishna Bahadur Shestha",
              designation: "Executive Member",
            },

            {
              name: "Balmiki Nath Parajuli (Balram)",
              designation: "Executive Member",
            },

            {
              name: "Kshitij Gautam",
              designation: "Executive Member",
            },

            {
              name: "Prem Kumar Sherpa",
              designation: "Executive Member",
            },

            {
              name: "Pushkar Giri",
              designation: "Executive Member",
            },

            {
              name: "Sharda Prasad Parajuli",
              designation: "Executive Member",
            },

            {
              name: "Raj Kumar Bhandari",
              designation: "Executive Member",
            },

            {
              name: "Chabilal Aacharya",
              designation: "Executive Member",
            },

            {
              name: "Prem Bahadur Shestha",
              designation: "Executive Member",
            },

            {
              name: "Muke Sherpa",
              designation: "Executive Member",
            },

            {
              name: "Raj Kapoor Khatri",
              designation: "Executive Member",
            },
            {
              name: "Narayan Parajuli Nare",
              designation: "Executive Member",
            },

            {
              name: "Jitendra Prasad Dahal",
              designation: "Executive Member",
            },

            {
              name: "Binod Thapa",
              designation: "Executive Member",
            },

            {
              name: "Bishnu Shestha",
              designation: "Executive Member",
            },

            {
              name: "Santosh Khatri",
              designation: "Executive Member",
            },

            {
              name: "Rajesh Bhandari",
              designation: "Executive Member",
            },

            {
              name: "Basanta Nepal",
              designation: "Executive Member",
            },

            {
              name: "Balaram Dhakal",
              designation: "Executive Member",
            },
          ].map((grid, index) => (
            <Grid item key={index} lg={3} md={6} xs={12}>
              <Card
                component={Paper}
                sx={{
                  elevation: 6,
                  height: 270,
                  position: "relative",
                }}
              >
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
                  alt="not found"
                  src={images[index]}
                  sx={{
                    width: 120,
                    height: 120,
                    position: "absolute",
                    top: "8%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    border: "2px solid orange",

                    borderTopImage:
                      "linear-gradient(to right, orange, orange) 100%",

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
      </Container>
    </>
  );
};

export default ExecutiveMember;
