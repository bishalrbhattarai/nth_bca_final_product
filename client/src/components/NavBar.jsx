import {
  AppBar,
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React, { useEffect, useState, useRef } from "react";
import nthbcaLogo from "../images/nthbca_logo.jpg";
const black = "#212529";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import app1 from "../images/app_photos/app1.png";
import app2 from "../images/app_photos/app2.png";
import { useSelector } from "react-redux";

const blackColor = {
  color: "black",
  fontWeight: 200,
  fontSize: 18,
  textTransform: "capitalize",
  fontFamily: "Gilroy, serif",
};

const textDecorationNone = {
  textDecoration: "none",
  color: "black",
};

const NavButtonStyle = {
  color: "#fff",
  textTransform: "capitalize",
  fontSize: "17px",
  borderRadius: "0px",
  borderRight: "1px solid #919191",
  "&:hover": {
    color: "orange",
  },
};
const NavBar = () => {
  const footerSection = useRef(null);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openAboutUs = Boolean(anchorEl);

  const [open, setOpen] = useState(false);
  const openSideBar = () => {
    setOpen(true);
  };
  const closeSiderBar = () => {
    setOpen(false);
  };

  const scrollTo = () => {
    window.scrollTo({
      top: footerSection.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setOpen(false);
    });
  }, []);

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      navigate("/admin");
    }
  }, [user]);

  return (
    <>
      <Drawer open={open} onClose={closeSiderBar} anchor="left">
        <List
          disablePadding
          sx={{
            width: {
              xs: 300,
              md: 600,
            },
            fontWeight: "100",
          }}
        >
          <ListItem>
            <Box
              height={100}
              width={100}
              color="inherit"
              component="img"
              src={nthbcaLogo}
            ></Box>
          </ListItem>

          <ListItem
            onClick={() => {
              navigate("/");
              closeSiderBar();
            }}
          >
            {" "}
            <ListItemText
              onClick={() => {
                navigate("/");
                closeSiderBar();
              }}
            >
              Home
            </ListItemText>{" "}
          </ListItem>

          <ListItem>
            <ListItemText>About us</ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              navigate("/executive-member");
              closeSiderBar();
            }}
          >
            {" "}
            <ListItemText>Executive Committe</ListItemText>{" "}
          </ListItem>
          <ListItem>
            <ListItemText
              onClick={() => {
                navigate("/act-regulation");
                closeSiderBar();
              }}
            >
              Act and Regulations
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemText> Gallery</ListItemText>
          </ListItem>

          {/* <ListItem
            onClick={() => {
              navigate("/information");
              closeSiderBar();
            }}
          >
            <ListItemText> Information</ListItemText>
          </ListItem> */}
          <ListItem
            onClick={() => {
              navigate("/contact");
              closeSiderBar();
            }}
          >
            <ListItemText> Contact Us</ListItemText>
          </ListItem>
          <ListItem
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/sign-in-for-new-membership");
              closeSiderBar();
            }}
          >
            <ListItemText> Sign up for new membership</ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <AppBar
        sx={{
          // backgroundColor: "#a5d6a7",
          backgroundColor: "white",
          // backgroundColor: "white",
          width: "100%",
          color: "black",
          //   background: "white",
        }}
        position="sticky"
        // boxShadow={0}
      >
        <Box sx={{ display: "flex", height: "6px" }}>
          <Box sx={{ flex: 1, backgroundColor: "#ff6b00" }}></Box>
          <Box sx={{ flex: 1, backgroundColor: "#0c1c55" }}></Box>
        </Box>
        <Toolbar sx={{ p: 1, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
            <Box>
              <Box
                height={120}
                width={120}
                color="inherit"
                component="img"
                src={nthbcaLogo}
              ></Box>
            </Box>

            <Box
              p={0.5}
              sx={{
                display: {
                  md: "block",
                  xs: "none",
                },
                margin: "6.5px 0px",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    md: "22px",
                  },
                  color: "#212529",
                  fontWeight: 600,
                }}
                variant="h5"
              >
                Nepal Trans Himalaya Border Commerce Association
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    md: "18px",
                  },
                  color: "#212529",
                  fontWeight: 200,
                }}
                variant="h6"
              >
                नेपाल हिमालय सीमापार वाणिज्य संघ
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "8px",
                    md: "18px",
                  },
                  color: "#212529",
                  fontWeight: 200,
                }}
                variant="h6"
              >
                尼泊尔跨喜马拉雅边境商业协会
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "14px",
                  },
                  color: "#FF6B00",
                }}
              >
                Buddhanagar, New Baneswor, Kathmandu-10, Nepal
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                lg: "block",
              },
            }}
          >
            <Stack direction={"row"} justifyContent="center" spacing={3}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "lowercase",
                }}
              >
                <MailIcon sx={{ fontSize: "18px" }} />
                <Typography
                  sx={{ fontSize: "16px", textTransform: "lowercase" }}
                >
                  nthbcasimapar@gmail.com
                </Typography>
                <CallIcon sx={{ marginLeft: "10px", fontSize: "18px" }} />
                <Typography sx={{ fontSize: "16px" }}>
                  +977-1-4792807
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", color: black }}>
                <IconButton>
                  {" "}
                  <a
                    href="https://www.facebook.com/nthbca/"
                    target="_blank"
                    rel="noopener"
                  >
                    <FacebookOutlinedIcon
                      sx={{ fontSize: "22px", color: black }}
                    />{" "}
                  </a>
                </IconButton>
                <IconButton>
                  <InstagramIcon sx={{ fontSize: "22px", color: black }} />
                </IconButton>
                <IconButton>
                  <TwitterIcon sx={{ fontSize: "22px", color: black }} />
                </IconButton>
                <IconButton>
                  <LinkedInIcon sx={{ fontSize: "22px", color: black }} />
                </IconButton>
              </Box>
            </Stack>

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                },
              }}
            >
              <Button
                onClick={() => {
                  navigate("/admin-login");
                }}
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  // fontSize: "9px",
                  // padding: "2px 18px",
                  padding: {
                    xs: "0px 9px",
                    lg: "4px 18px",
                  },
                  textTransform: "capitalize",
                  backgroundColor: "#003f7d",
                }}
              >
                Login
              </Button>

              <Button
                onClick={() => {
                  navigate("/sign-in-for-new-membership");
                }}
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  padding: "2px 18px",
                  textTransform: "capitalize",
                  backgroundColor: "#ff6b00",
                }}
              >
                Sign Up For New Membership
              </Button>
              <Button
                onClick={() => {
                  navigate("/membership-forms");
                }}
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  padding: "2px 18px",
                  textTransform: "capitalize",
                  backgroundColor: "#003f7d",
                }}
              >
                Membership Form
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: {
                xs: "block",
                lg: "none",
              },
            }}
          >
            <Button
              onClick={() => {
                navigate("/admin-login");
              }}
              variant="contained"
              sx={{
                borderRadius: "50px",
                fontSize: "15px",
                padding: "8px 25px",

                textTransform: "capitalize",
                backgroundColor: "#003f7d",
              }}
            >
              Login
            </Button>

            <IconButton onClick={openSideBar}>
              {open ? (
                <CloseIcon sx={{ fontSize: "30px", color: black }} />
              ) : (
                <MenuIcon sx={{ fontSize: "30px", color: black }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
        <Toolbar
          // onMouseLeave={handleClose}
          sx={{
            display: {
              xs: "none",
              lg: "flex",
            },
            color: "white",
            backgroundColor: "#0c1c55",
            justifyContent: "center",
            fontSize: "16px",
            textTransform: "capitalize",

            // position: "sticky",
          }}
        >
          <Link to="/">
            <Button sx={NavButtonStyle}>Home</Button>
          </Link>

          <Button
            onClick={handleClick}
            // onMouseEnter={handleClick}
            // onMouseOut={handleClose}
            sx={NavButtonStyle}
          >
            About us
            <ArrowDropDownIcon />
          </Button>

          <Menu
            sx={{
              mt: 2,
              "& .MuiPaper-root": {
                backgroundColor: "#0c1c55", // Background color blue
              },
              "& .MuiMenuItem-root": {
                color: "white", // Text color white
              },
            }}
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            id="fade-menu"
            anchorEl={anchorEl}
            open={openAboutUs}
            onClick={handleClose}
            onClose={handleClose}
          >
            <NavLink to="/introduction" style={textDecorationNone}>
              <MenuItem
                sx={{
                  textDecoration: "none",
                }}
                onClose={handleClose}
              >
                Introduction
              </MenuItem>
            </NavLink>

            <NavLink to="/objective" style={textDecorationNone}>
              <MenuItem
                sx={
                  {
                    // marginTop: "10px",
                  }
                }
                onClose={handleClose}
              >
                Objective
              </MenuItem>
            </NavLink>
          </Menu>

          <Link to="/executive-member">
            <Button sx={NavButtonStyle}>Executive Committee</Button>
          </Link>

          <Link to="/act-regulation">
            <Button sx={NavButtonStyle}>ACT & Regulation</Button>
          </Link>

          <Link to="/gallery">
            <Button sx={NavButtonStyle}>Gallery</Button>
          </Link>

          <Link to="/activities">
            <Button sx={NavButtonStyle}>Activities</Button>
          </Link>

          {/* <Link to="/information"> */}
          {/* <Button sx={NavButtonStyle}> */}
          {/* Information */}
          {/* <ArrowDropDownIcon /> */}
          {/* </Button> */}
          {/* </Link> */}

          <Button onClick={scrollTo} sx={NavButtonStyle}>
            Contact us
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
      <Box
        sx={{
          paddingTop: "5px",
          backgroundColor: "#0c1c55",
          color: "white",
          mt: 3,
        }}
      >
        <Grid id="scrollTo" ref={footerSection} container spacing={4}>
          <Grid item xs={12} lg={4} textAlign="center">
            <Box
              sx={{
                borderRadius: "50%",
              }}
              height={100}
              width={100}
              color="inherit"
              component="img"
              src={nthbcaLogo}
              alt="Nepal Trans Himalaya Border Commerce Association Logo"
            />
            <Box mt={1}>
              <Typography variant="small">
                Nepal Trans Himalaya Border Commerce Association
              </Typography>
              <Box>
                <Typography fontSize={15}>
                  नेपाल हिमालय सीमापार वाणिज्य संघ
                </Typography>
                <Typography fontSize={15}>
                  尼泊尔跨喜马拉雅边境商业协会
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} lg={3}>
            <Box textAlign="center">
              <Typography>Quick Links</Typography>
            </Box>
            <Stack direction="column">
              <Button sx={{ textTransform: "capitalize", color: "white" }}>
                Home
              </Button>

              <Button sx={{ textTransform: "capitalize", color: "white" }}>
                Gallery
              </Button>
              <Button sx={{ textTransform: "capitalize", color: "white" }}>
                Contact us
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={6} lg={2}>
            <Box textAlign="center">
              <Typography>Information</Typography>
            </Box>
            <Stack direction="column">
              <Button sx={{ textTransform: "capitalize", color: "white" }}>
                <CallIcon sx={{ marginLeft: "10px", fontSize: "18px" }} />
                +977-1-4792807
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "white",
                  textTransform: "lowercase",
                }}
              >
                <MailIcon sx={{ fontSize: "18px", mr: 1 }} />
                nthbcasimapar@gmail.com
              </Button>
              <Button sx={{ textTransform: "capitalize", color: "white" }}>
                Buddhanagar, New Baneswor, Kathmandu-10, Nepal
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box textAlign="center">
              <Typography>Stay Connected</Typography>
            </Box>
            <Box textAlign="center">
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
            <Box textAlign="center">
              <Box
                component="img"
                src={app1}
                sx={{ height: "40%", width: "50%" }}
                alt="App 1"
              />
            </Box>

            <Box textAlign="center">
              <Box
                component="img"
                src={app2}
                sx={{ height: "40%", width: "50%" }}
                alt="App 2"
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

export default NavBar;
