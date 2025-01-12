import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 3, sm: 4, md: 6 },
        height: { xs: "85vh", sm: "90vh" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "720px" },
          textAlign: "left",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            lineHeight: 1.3,
            mb: 2,
          }}
        >
          Súbete al barco de la familia{" "}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.05em",
              backgroundImage:
                "linear-gradient(220.55deg, #ff7a18 0%, #e52e71 100%)",
              backgroundSize: "200%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradient 3.5s ease infinite",
              "@keyframes gradient": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
              },
            }}
          >
            SunnyBlog
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            mb: 3,
            color: "whitesmoke",
          }}
        >
          Una plataforma para expresar tus pensamientos, conectar con personas y
          explorar nuevas ideas.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            mb: 2,
            backgroundColor: "#ff7a18",
            "&:hover": {
              backgroundColor: "rgba(255, 120, 24, 0.76)",
            },
          }}
          onClick={() => {
            navigate("/register");
          }}
        >
          Crear una cuenta
        </Button>
        <Typography variant="body1" sx={{ mt: 8, mb: 1 }}>
          ¿Ya tienes una cuenta?
        </Typography>
        <Button variant="outlined" size="large">
          Iniciar sesión
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
