import { Box, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        pt: 3,
        borderTop: "1px solid rgba(255, 255, 255, 0.65)",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          color: "rgba(255, 255, 255, 0.65)",
        }}
      >
        © 2025 SunnyBlog. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
