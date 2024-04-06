import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const Message = ({ message, individual }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <Box sx={{ height: "200px", width: "200px", boxShadow: 4 }}>
          {individual.img ? (
            <>
              <Box
                component={"img"}
                src={message[individual].img}
                sx={{
                  border: "10px solid whitesmoke",
                  width: "100%",
                  height: "100%",
                }}
              />
            </>
          ) : (
            <Box
              // component={Avatar}
              component={"img"}
              alt="Image Not Found"
              src={message[individual].img}
              sx={{
                border: "10px solid whitesmoke",
                width: "100%",
                height: "100%",
              }}
            />
          )}
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {message[individual].name}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {message[individual].designation}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Message;
