import React from "react";
import {
  Typography,
  Link,
  Grid,
  Box,
  Divider,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import bidhanPDFLink from "./links/Bidhan 2080.pdf";

const ActAndRegulation = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "20px", // Adding padding to the bottom of the box
        }}
      >
        <Typography sx={{ fontSize: "40px" }}>Acts and Regulation</Typography>
        <Divider
          width="95px"
          sx={{
            borderBottomWidth: "4px",
            backgroundColor: "#0C1C55",
            marginBottom: "15px",
          }}
        />
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  Customs department:{" "}
                  <Link
                    href="https://www.customs.gov.np/"
                    target="_blank"
                    rel="noopener"
                  >
                    https://www.customs.gov.np/
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  MOICS:{" "}
                  <Link
                    href="https://moics.gov.np/en/"
                    target="_blank"
                    rel="noopener"
                  >
                    https://moics.gov.np/en/
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  Finance Ministry:{" "}
                  <Link
                    href="https://www.mof.gov.np/"
                    target="_blank"
                    rel="noopener"
                  >
                    https://www.mof.gov.np/
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  Rasuwa Customs:{" "}
                  <Link
                    href="https://customs.gov.np/rasuwa"
                    target="_blank"
                    rel="noopener"
                  >
                    https://customs.gov.np/rasuwa
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  Tatopani Customs:{" "}
                  <Link
                    href="https://customs.gov.np/tatopani"
                    target="_blank"
                    rel="noopener"
                  >
                    https://customs.gov.np/tatopani
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  Immigration:{" "}
                  <Link
                    href="https://www.immigration.gov.np/"
                    target="_blank"
                    rel="noopener"
                  >
                    https://www.immigration.gov.np/
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  Foreign Ministry:{" "}
                  <Link
                    href="https://mofa.gov.np/"
                    target="_blank"
                    rel="noopener"
                  >
                    https://mofa.gov.np/
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  Facebook:{" "}
                  <Link
                    href="https://www.facebook.com/nthbca/"
                    target="_blank"
                    rel="noopener"
                  >
                    https://www.facebook.com/nthbca/
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="body1">
                  Constitution of NTHBCA:{" "}
                  <a
                    href={bidhanPDFLink}
                    target="_blank"
                    rel="noopener"
                    download
                  >
                    pdf file
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ActAndRegulation;
