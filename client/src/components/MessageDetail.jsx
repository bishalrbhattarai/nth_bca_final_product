import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import img1 from "../images/indexBodList/img1.jpeg";
// import img2 from "../images/indexBodList/img2.jpeg";
import img3 from "../images/indexBodList/img3.jpeg";
import Message from "./Message";
const array = [
  {
    id: 1,
    name: "Ram Hari Karki ",
    designation: "President",
    img: img1,
    boxShadow: 4,
  },
  {
    id: 2,
    name: "Ganga Bahadur Ghimire (Sagar)",
    designation: "Senior VC",
    // img: <Avatar />,
    boxShadow: 2,
  },
  {
    id: 3,
    name: "Ram Chandra Parajuli ",
    designation: "Secretary general",
    img: img3,
    boxShadow: 2,
  },
];
const MessageDetail = () => {
  const [individual, setIndividual] = useState(0);
  return (
    <>
      <Container
        sx={{
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>Messages </Typography>
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

        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            {array.map((ele, index) => (
              <>
                <Paper
                  onClick={(e) => {
                    setIndividual(index);
                  }}
                  key={index}
                  sx={{
                    boxShadow: individual === index ? 6 : 1,
                    "&:hover": {
                      cursor: "pointer",
                    },
                    margin: "30px auto",
                    padding: "15px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box key={index}>
                    {ele.img ? (
                      <Avatar
                        key={index}
                        sx={{
                          border: "3px solid orange",
                          width: "90px",
                          height: "90px",
                        }}
                      >
                        <img
                          key={index}
                          src={ele.img}
                          alt="image not loaded"
                          style={{
                            border: "10px solid whitesmoke",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Avatar>
                    ) : (
                      <Avatar
                        sx={{
                          border: "3px solid orange",
                          width: "90px",
                          height: "90px",
                        }}
                      >
                        G
                      </Avatar>
                    )}
                  </Box>

                  <Box key={index}>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      {ele.name}
                    </Typography>

                    <Typography key={index} sx={{ textAlign: "center" }}>
                      {ele.designation}
                    </Typography>
                  </Box>
                </Paper>
              </>
            ))}
          </Grid>
          <Grid
            item
            sx={{
              my: "auto",
            }}
            md={6}
            xs={12}
          >
            <Message individual={individual} message={array} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MessageDetail;
