import React from "react";
import { Typography, Box, Divider, Container } from "@mui/material";
const styled = {
  fontSize: 20,
};

const Introduction = () => {
  return (
    <>
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" sx={{ mb: 2 }}>
            Nepal Trans Himalayan Border Commerce Association
          </Typography>
          <Divider
            sx={{
              width: "240px",
              borderBottomWidth: "4px",
              backgroundColor: "#0C1C55",
              marginBottom: "25px",
            }}
          />
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Typography variant="body1" sx={styled}>
          The Nepal Trans Himalayan Border Commerce Association is an umbrella
          organization of businessmen who import and export goods from the
          northern border of Nepal. The association, which was established in
          the year 2055 under the name of Kathmandu Tatopani Business
          Cooperation Association, has entered its 25th year. The association
          has gone through many ups and downs while reaching 25 years of its
          journey.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, ...styled }}>
          The Nepal Trans Himalayan Border Commerce Association, which was
          established with the main objective of protecting and promoting the
          rights and interests of traders by exporting goods produced in Nepal
          to Tibet, an autonomous region of China, and importing goods produced
          in China to Nepal, has been lobbying the voice of its businessmen
          before the government. Not only bringing the businessmen's problems to
          the government, but also focusing on solving the problems.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, ...styled }}>
          Strengthening the relationship between Nepal and China through trade,
          the Nepal Himalayan Cross Border Commerce Association is fulfilling
          the demands and needs of every Nepalese. B.S. The association, which
          started in the year 2055 under the chairmanship of the founder Durga
          Bahadur Shrestha, from the small dark room of Mahabuddha, has
          completed 24 years. Since the foundation laid by the 14-member
          founding working committee has reached today, the association has
          created a distinct identity. The association is functioning from its
          own well-equipped building in New-Baneshwar, Buddhanagar.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, ...styled }}>
          Since its inception, the association has been contributing not only to
          the interests of businessmen but also to various natural calamities in
          the country. Be it Jure landslide or Melamchi flood, earthquake or
          corona epidemic, the association has been active in every disaster.
          The association has been providing humanitarian and financial support.
        </Typography>
      </Container>
    </>
  );
};

export default Introduction;
