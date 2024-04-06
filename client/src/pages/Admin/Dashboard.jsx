import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import CollectionsIcon from "@mui/icons-material/Collections";

import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import FindInPageSharpIcon from "@mui/icons-material/FindInPageSharp";

const drawerWidth = 250;
const user = {
  name: "Admin",
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "#0c1c55" }} justify="space-between">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            sx={{
              flexGrow: 1,
              fontSize: {
                md: 25,
                sm: 10,
              },
            }}
            noWrap
            component="div"
          >
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/admin"
            >
              Admin Dashboard
              <IconButton>
                <AnalyticsIcon
                  sx={{
                    fontSize: "35px",
                    color: "white",
                  }}
                />
              </IconButton>
            </NavLink>
          </Typography>

          {Object.keys(user).length > 0 ? (
            <Box
              sx={{
                display: "flex",
                fontSize: {
                  md: 25,
                  xs: 10,
                },
                alignItems: "center",
              }}
            >
              <Box />
              <Button
                onClick={handleMenuOpen}
                sx={{
                  color: "inherit",
                  cursor: "pointer",
                  textTransform: "capitalize",
                  fontSize: {
                    md: 25,
                    sm: 10,
                  },
                }}
                // onClick={handleMenuOpen}
              >
                <Avatar
                  sx={{
                    fontSize: {
                      md: 25,
                      sm: 10,
                    },
                  }}
                />
                <ArrowDropDownIcon sx={{ color: "white" }} />
              </Button>
              <Menu
                id="menu-appbar"
                // anchorEl={anchorEl}
                sx={{ mt: 5 }}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <NavLink
                  style={{
                    color: "black",
                    textDecoration: "none",
                  }}
                  to="/admin/changepassword"
                >
                  <MenuItem onClick={handleMenuClose}>Change Password</MenuItem>
                </NavLink>
                <Divider />

                <MenuItem
                  sx={{
                    color: "red",
                    textDecoration: "none",
                  }}
                  onClick={() => {
                    navigate("/admin-logout");
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : null}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              label: "View Records",
              location: "/admin/all-records",
              icons: (
                <FindInPageSharpIcon
                  sx={{
                    color:
                      location.pathname == "/admin/all-records"
                        ? "white"
                        : "#0c1c55",
                  }}
                />
              ),
            },
            {
              label: "Activity Mangement",
              location: "/admin/activity-management",
              icons: (
                <CollectionsIcon
                  sx={{
                    color:
                      location.pathname == "/admin/activity-management"
                        ? "white"
                        : "#0c1c55",
                  }}
                />
              ),
            },
            {
              label: "Member Management",
              location: "/admin/member-management",
              icons: (
                <ManageAccountsIcon
                  sx={{
                    color:
                      location.pathname == "/admin/member-management"
                        ? "white"
                        : "#0c1c55",
                  }}
                />
              ),
            },
          ].map((text, index) => (
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                margin: "10px 0",
              }}
              to={text.location}
            >
              <ListItem
                key={text}
                // disablePadding
                sx={{
                  display: "block",
                  backgroundColor:
                    location.pathname == text.location ? "#0c1c55" : "white",
                  color:
                    location.pathname == text.location ? "white" : "#0c1c55",
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {text.icons}
                  </ListItemIcon>
                  <ListItemText
                    primary={text.label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "whitesmoke" }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
