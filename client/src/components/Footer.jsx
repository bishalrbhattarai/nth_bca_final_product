import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuList,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import nthbcaLogo from "../images/nthbca_logo.jpg";
import { Link, NavLink } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import app1 from "../images/app_photos/app1.png";
import app2 from "../images/app_photos/app2.png";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          paddingTop: "5px",
          // marginBottom: "30px",
          backgroundColor: "#0c1c55",
          color: "white",
          mt: 5,
        }}
      >
        <Grid container spacing={4}>
          <Grid
            // sx={{ border: "1px solid white" }}
            textAlign={"center"}
            item
            lg={4}
          >
            <Box
              sx={{
                borderRadius: "50%",
              }}
              height={100}
              width={100}
              color="inherit"
              component="img"
              src={nthbcaLogo}
            />
            <Box mt={1}>
              <Typography variant="small">
                Nepal Trans Himalaya Border Commerce Association
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box textAlign={"center"}>
              <Typography>Quick Links</Typography>
            </Box>
            <Stack direction="column">
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                Home
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                Video
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                Gallery
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                Contact us
              </Button>
            </Stack>
          </Grid>

          <Grid item lg={2}>
            <Box textAlign={"center"}>
              <Typography>Information</Typography>
            </Box>
            <Stack direction="column">
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                <CallIcon sx={{ marginLeft: "10px", fontSize: "18px" }} />
                +977-1-4792807
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                <MailIcon sx={{ fontSize: "18px", mr: 1 }} />
                nthbcasimapar@gmail.com
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                }}
              >
                Buddhanagar, New Baneswor, Kathmandu-10, Nepal
              </Button>
            </Stack>
          </Grid>
          <Grid item lg={3}>
            <Box textAlign={"center"}>
              <Typography>Stay Connected</Typography>
            </Box>
            <Box textAlign={"center"}>
              <IconButton>
                <FacebookOutlinedIcon
                  sx={{ fontSize: "22px", color: "white" }}
                />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={{ fontSize: "22px", color: "white" }} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ fontSize: "22px", color: "white" }} />
              </IconButton>
            </Box>
            <Box textAlign={"center"}>
              <Box
                component={"img"}
                src={app1}
                sx={{ height: "40%", width: "50%" }}
              />
            </Box>

            <Box textAlign={"center"}>
              <Box
                component={"img"}
                src={app2}
                sx={{ height: "40%", width: "50%" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          p: 1,
          textAlign: "center",
          color: "white",
          backgroundColor: "#003F7D",
        }}
      >
        Copyright @ 2024 Nepal Trans Himalaya Border Commerce Association All
        Rights Reserved.
      </Box>
    </>
  );
};

export default Footer;
