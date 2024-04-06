import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
const black = "#212529";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Menu = () => {
  return (
    <>
      {/* <AppBar> */}
      <Stack
        p={1}
        direction="row"
        justifyContent={"center"}
        // position={"sticky"}
        sx={{
          //   display: "flex",
          //   flexDirection: "row",
          color: "white",
          backgroundColor: "#0c1c55",
          //   justifyContent: "center",
          fontSize: "16px",
          textTransform: "capitalize",
          //   position: "fixed",
        }}
      >
        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px",
            borderRadius: "0px",
            borderRight: "1px solid #919191",
          }}
        >
          Home
        </Button>

        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px",
            borderRadius: "0px",
            borderRight: "1px solid #919191",
          }}
        >
          About us
          <ArrowDropDownIcon />
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px",
            borderRadius: "0px",
            borderRight: "1px solid #919191",
          }}
        >
          Executive Member
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px",
            borderRadius: "0px",
            borderRight: "1px solid #919191",
          }}
        >
          Projects & Programs
          <ArrowDropDownIcon />
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px",
            borderRadius: "0px",
            borderRight: "1px solid #919191",
          }}
        >
          ACT & Regulation
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px",
            borderRadius: "0px",
            borderRight: "1px solid #919191",
          }}
        >
          Gallery
          <ArrowDropDownIcon />
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px",
            borderRadius: "0px",
            borderRight: "1px solid #919191",
          }}
        >
          Information
          <ArrowDropDownIcon />
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px",
            borderRadius: "0px",
            borderRight: "1px solid #919191",
          }}
        >
          Events
          <ArrowDropDownIcon />
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px",
            borderRadius: "0px",
            borderRight: "1px solid #919191",
          }}
        >
          Media Room
          <ArrowDropDownIcon />
        </Button>
        <Button
          sx={{
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "16px",
            borderRadius: "0px",
            borderRight: "1px solid #919191",
          }}
        >
          Contact us
        </Button>
      </Stack>
      {/* </AppBar> */}
    </>
  );
};

export default Menu;
