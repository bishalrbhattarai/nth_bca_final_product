import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Divider,
  Button,
  Container,
} from "@mui/material";
import pdf1 from "../membershipPDF/Aaajiban Faram.pdf";
import pdf2 from "../membershipPDF/Sadharan Sadasya Faram.pdf";
import pdf3 from "../membershipPDF/Sahyogi sadasya.pdf";
import thumbnail from "../images/thumbnail.jpg";

const MembershipForm = () => {
  const handleDownload = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop(); // Extract filename from URL for download
    link.click();
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "35px" }}>Membership Forms </Typography>
          <Divider
            width="120px"
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
          <Grid item xs={12} sm={4}>
            <PDFCard
              title="Aaajiban Faram"
              pdfUrl={pdf1}
              onDownload={handleDownload}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PDFCard
              title="Sadharan Sadasya Faram"
              pdfUrl={pdf2}
              onDownload={handleDownload}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PDFCard
              title="Sahyogi sadasya Faram"
              pdfUrl={pdf3}
              onDownload={handleDownload}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const PDFCard = ({ title, pdfUrl, onDownload }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail} // Placeholder image or thumbnail
          alt="PDF Thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Box
          // textAlign={"center"}
          >
            <Button
              fullWidth
              variant="contained"
              onClick={() => onDownload(pdfUrl)}
              sx={{
                marginTop: 2,
                backgroundColor: "#0c1c55",
              }}
            >
              Download PDF
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default MembershipForm;
