// import React from "react";
// import Carousel from "react-material-ui-carousel";
// import slider1 from "../images/slider1.jpg";
// import { Box } from "@mui/material";
// import slider2 from "../images/slider2.jpg";
// const images = [{ imgPath: slider1 }, { imgPath: slider2 }];
// const Slider = () => {
//   return (
//     <>
//       <Box
//       //  sx={{ position: "relative", height: "100vh" }}
//       >
//         <Carousel
//           key={2}
//           animation="slide"
//           indicators={false}
//           stopAutoPlayOnHover={false}
//           navButtonsAlwaysVisible={true}
//           duration={2500}
//           interval={6000}
//         >
//           {images.map((image, key) => (
//             <>
//               <Box
//                 key={key}
//                 component="img"
//                 src={image.imgPath}
//                 sx={{
//                   width: "100%",
//                   height: {
//                     xs: "50vh",
//                     md: "70vh",
//                     // lg: "97vh",
//                   },
//                 }}
//               />
//             </>
//           ))}
//         </Carousel>
//       </Box>
//     </>
//   );
// };

// export default Slider;

// import React, { useState, useEffect } from "react";
// import Carousel from "react-material-ui-carousel";
// import { Box } from "@mui/material";
// import slider1 from "../images/slider1.jpg";
// import slider2 from "../images/slider2.jpg";

// const images = [{ imgPath: slider1 }, { imgPath: slider2 }];

// const Slider = () => {
//   const [vhHeight, setVhHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     const handleResize = () => {
//       setVhHeight(window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <Box>
//       <Carousel
//         key={2}
//         animation="slide"
//         indicators={false}
//         stopAutoPlayOnHover={false}
//         navButtonsAlwaysVisible={true}
//         duration={2500}
//         interval={6000}
//       >
//         {images.map((image, key) => (
//           <Box
//             key={key}
//             component="img"
//             src={image.imgPath}
//             sx={{
//               width: "100%",
//               height: `${vhHeight}px`,
//               maxHeight: "90vh", // Adjust this as per your requirement
//             }}
//           />
//         ))}
//       </Carousel>
//     </Box>
//   );
// };

// export default Slider;

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import slider1 from "../images/slider/slider1.jpeg";
import slider2 from "../images/slider/slider2.jpeg";
import slider3 from "../images/slider/slider3.jpeg";
import slider4 from "../images/slider/slider4.jpeg";

const images = [
  { imgPath: slider1 },
  { imgPath: slider2 },
  { imgPath: slider3 },
  { imgPath: slider4 },
];

const Slider = () => {
  return (
    <Box>
      <Carousel
        key={2}
        animation="slide"
        indicators={false}
        stopAutoPlayOnHover={false}
        navButtonsAlwaysVisible={true}
        duration={2500}
        interval={6000}
        sx={{
          width: "100%",
          height: "70vh", // Default height for all breakpoints
          "@media (max-width: 600px)": {
            height: "50vh", // Height for xs breakpoint
          },
          "@media (min-width: 601px) and (max-width: 960px)": {
            height: "70vh", // Height for md breakpoint
          },
          "@media (min-width: 961px)": {
            height: "97vh", // Height for lg breakpoint
          },
        }}
      >
        {images.map((image, key) => (
          <Box
            key={key}
            component="img"
            src={image.imgPath}
            sx={{
              width: "100%",
              height: "50vh", // Default height for all breakpoints
              "@media (max-width: 600px)": {
                height: "50vh", // Height for xs breakpoint
              },
              "@media (min-width: 601px) and (max-width: 960px)": {
                height: "70vh", // Height for md breakpoint
              },
              "@media (min-width: 961px)": {
                height: "97vh", // Height for lg breakpoint
              },
            }}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
