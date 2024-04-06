import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const Objective = () => {
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
        <Typography sx={{ fontSize: "35px" }}>Objectives </Typography>
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
      <Box sx={{ px: 3 }}>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>
            The main objectives of the Association are as follows:
          </strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>
            1. Protect the rights and benefits of the traders who are engaged in
            import/export of Nepal to China Tibet Autonomous Region and try to
            maintain the supply of the daily and industrial products which are
            produced in China.
          </strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>
            2. Provide suggestions to the government agencies on trade, transit,
            and procedures of export/import to and from China.
          </strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>
            3. Study the trade-related acts and regulations of the Government of
            Nepal and disseminate them to its members.
          </strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>
            4. Maintain transparency and provide advice and direction to its
            members.
          </strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>
            5. Integrate more traders who are engaged in trading with China and
            assist in promoting trade.
          </strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>
            6. Resolve any disputes that arise among the traders through a
            mediator.
          </strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>
            7. Collect revenue through various activities as per laws and
            provide financial assistance for natural calamity victims as well as
            be involved in social welfare activities.
          </strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>
            8. Study the rules and regulations related to export/import and
            disseminate information to the members of the association.
          </strong>
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>
            9. Maintain a good relationship with other chambers of commerce and
            industries and work hand in hand for the promotion of trade and
            industries of the country.
          </strong>
        </Typography>
      </Box>
    </>
  );
};

export default Objective;
