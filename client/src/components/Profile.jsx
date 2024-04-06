import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import BuildingPhoto from "../images/BuildingPhoto.jpg";

const Profile = () => {
  return (
    <>
      <Container sx={{ marginTop: "40px" }}>
        <Grid container sx={{ gap: 9 }}>
          <Grid
            item
            md={7}
            xs={12}
            sx={{}}
            //    border={"1px solid red"}
          >
            <Typography sx={{ fontSize: "30px" }}>Profile</Typography>
            <Divider
              width="110px"
              sx={{
                //   borderTopWidth: "10px",
                borderBottomWidth: "4px",
                // backgroundColor: "#FF7E84",
                backgroundColor: "#0C1C55",
                marginBottom: "25px",
              }}
            />
            <Typography
              //   variant="subtitle1"
              sx={{
                fontSize: "17px",
                fontWeight: 400,
                color: "#646060",
                lineHeight: "25px",
              }}
              textAlign={"justify"}
            >
              The Nepal Trans Himalayan Border Commerce Association is an
              umbrella organization of businessmen who import and export goods
              from the northern border of Nepal. The association, which was
              established in the year 2055 under the name of Kathmandu Tatopani
              Business Cooperation Association, has entered its 25th year. It
              was established with the main objective of protecting and
              promoting the rights and interests of traders by exporting goods
              produced in Nepal to Tibet, an autonomous region of China, and
              importing goods produced in China to Nepal, has been lobbying the
              voice of its businessmen before the government.
            </Typography>
            <Button
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
              //   sx={{
              //     marginTop: "15px",
              //     textTransform: "capitalize",
              //     background: "linear-gradient(to right, #ff4e50, #f9d423)",
              //     color: "black",
              //     border: 0,
              //     borderRadius: 5,
              //     padding: "10px 20px",
              //     transition: "background 0.5s",
              //     "&:hover": {
              //       background: "linear-gradient(to right, #ff4e50, #f9d423)",
              //       backgroundPosition: "right center",
              //     },
              //   }}
              variant="contained"
            >
              Read More
            </Button>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              // border: "5px solid pink",
              width: "100%",
              height: {
                md: "300px",
                xs: "200px",
              },
            }}

            // border={"1px solid blue"}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
              }}
            >
              <Box
                //   boxShadow={12}

                component={"img"}
                sx={{
                  border: "10px solid whitesmoke",
                  width: "100%",
                  height: "100%",
                  boxShadow: 2,
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.15)", // Adjust the zoom level as needed
                  },
                }}
                src={BuildingPhoto}
              />
            </Box>
            {/* <img
                src={BuildingPhoto}
                style={{ width: "100%", height: "100%" }}
                alt=""
              /> */}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;

// import {
//   Box,
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Paper,
//   Typography,
// } from "@mui/material";
// import React, { useRef, useEffect, useState } from "react";
// import BuildingPhoto from "../images/BuildingPhoto.jpg";
// import "./Profile.css"; // Import your CSS file for animations

// const Profile = () => {
//   const profileRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       });
//     });

//     observer.observe(profileRef.current);

//     // Clean up the observer
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <Container sx={{ marginTop: "25px" }} ref={profileRef}>
//         <Grid container sx={{ gap: 12 }}>
//           <Grid
//             item
//             md={7}
//             xs={12}
//             className={isVisible ? "animate-left" : ""} // Add animation class if isVisible
//           >
//             <Typography sx={{ fontSize: "30px" }}>Profile</Typography>
//             <Divider
//               width="110px"
//               sx={{
//                 borderBottomWidth: "4px",
//                 backgroundColor: "#0C1C55",
//                 marginBottom: "25px",
//               }}
//             />
//             <Typography
//               sx={{
//                 fontSize: "17px",
//                 fontWeight: 400,
//                 color: "#646060",
//                 lineHeight: "30px",
//               }}
//               textAlign={"justify"}
//             >
//               Nepal Trans Himalaya Border Commerce Association was formed in
//               1944 A.D. i.e. 2001 B.S. Considering the need of a common platform
//               to safeguard and promote the interests of the business community
//               in the districts of Bara and Parsa. Later on, the name of the
//               Association was slightly modified to Birgunj Merchant Association
//               after the introduction of several other trading businesses in the
//               arena.
//             </Typography>
//             <Button
//               sx={{
//                 marginTop: "15px",
//                 textTransform: "capitalize",
//                 backgroundColor: "whitesmoke",
//                 color: "black",
//               }}
//               variant="contained"
//             >
//               Read More
//             </Button>
//           </Grid>
//           <Grid
//             item
//             md={4}
//             xs={12}
//             className={isVisible ? "animate-right" : ""} // Add animation class if isVisible
//             sx={{
//               width: "100%",
//               height: "300px",
//             }}
//           >
//             <Paper
//               component={"img"}
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 boxShadow: 5,
//                 transition: "transform 0.3s ease",
//               }}
//               src={BuildingPhoto}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default Profile;
