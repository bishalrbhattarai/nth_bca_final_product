import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import img1 from "../images/24agm/20240209184320_IMG_0587-min.jpg";
import img2 from "../images/newBodAppointment/DSC_4324-min.jpg";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useNavigate } from "react-router-dom";
const Gallery = () => {
  const navigate = useNavigate();
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
        <Typography sx={{ fontSize: "35px" }}>Gallery </Typography>
        <Divider
          width="70px"
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
        <Grid container spacing={2}>
          {[
            {
              previewImage: img1,
              photoCount: 12,
              name: "24thAnnualGeneralMeeting",
            },
            {
              previewImage: img2,
              photoCount: 8,
              name: "FNCCI_NEWBODPADDHastantran",
            },
          ].map((meeting, index) => (
            <Grid key={index} lg={4} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={meeting.previewImage}
                    alt="green iguana"
                    sx={{
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                  <Divider />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                      component="div"
                    >
                      {meeting.name}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 0.5 }}>
                      <Typography>{meeting.photoCount}</Typography>
                      <PhotoCameraIcon />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        24-Sep-2023
                      </Typography>
                      <Box>
                        <Button
                          onClick={() => navigate(`/gallery/${meeting.name}`)}
                          variant="contained"
                          sx={{
                            marginTop: "10px",
                            textTransform: "capitalize",
                            backgroundColor: "whitesmoke",
                            padding: "10px 25px",
                            color: "black",
                            "&:hover": {
                              color: "white",
                            },
                          }}
                        >
                          {" "}
                          View All
                        </Button>
                      </Box>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Gallery;
