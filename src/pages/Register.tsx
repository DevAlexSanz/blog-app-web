import React from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import toast from "react-hot-toast";
import { RegisterType } from "@appTypes/Register";
import BlogApi from "@api/blogApi";

const schema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Debe de contener más de 5 caracteres")
    .max(20, "El máximo de caracteres permitidos es 20")
    .required("El campo es requerido"),
  email: yup
    .string()
    .email("El correo ingresado no es un correo válido")
    .required("El campo es requerido"),
  password: yup
    .string()
    .min(8, "Debe de contener más de 8 caracteres")
    .max(20, "El máximo de caracteres permitidos es 20")
    .required("El campo es requerido"),
});

const Register: React.FC = () => {
  const [registerNewUser] = BlogApi.useRegisterMutation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterType>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const registerUser = (registerUser: RegisterType) => {
    registerNewUser({
      username: registerUser.username,
      email: registerUser.email,
      password: registerUser.password,
    })
      .unwrap()
      .then((response) => {
        toast.success(response.message);

        reset();
      })
      .catch((response) => {
        toast.error(response.data.message);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: { xs: "85vh", sm: "90vh" },
        px: { xs: 2, sm: 4 },
      }}
    >
      <Typography
        variant="h3"
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
      <Card
        elevation={2}
        sx={{
          mt: 5,
          width: "100%",
          maxWidth: { xs: "350px", sm: "550px" },
          padding: { xs: "20px", sm: "30px 50px" },
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
        >
          Crear cuenta
        </Typography>
        <Typography variant="body2" color="whitesmoke">
          Rápido y fácil
        </Typography>
        <Divider
          sx={{
            mt: 1,
          }}
        />
        <Box
          component="form"
          onSubmit={handleSubmit(registerUser)}
          noValidate
          sx={{
            mt: 3,
          }}
        >
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              gap: { xs: 1.5, sm: 2 },
              width: "100%",
            }}
          >
            <TextField
              required
              size="small"
              placeholder="Nombre de usuario"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              required
              size="small"
              autoComplete="email"
              placeholder="Correo electrónico"
              type="email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              required
              size="small"
              placeholder="Contraseña"
              type="password"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Box>
          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{
              mt: 3,
              py: {
                xs: 1.5,
                sm: 2,
              },
            }}
          >
            Registrarme
          </Button>
          <Box>
            <Button
              onClick={() => {
                navigate("/login");
              }}
              variant="text"
              size="medium"
              sx={{
                mt: 2,
              }}
            >
              ¿Ya tienes una cuenta?
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Register;
