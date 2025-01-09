import React from "react";
import { Box, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <Typography>Hello from Home</Typography>
    </Box>
  );
};

export default Home;
