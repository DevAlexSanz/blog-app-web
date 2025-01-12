import React from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as ThemeConfig,
} from "@mui/material";
import { Toaster } from "react-hot-toast";

type ThemeProviderProps = {
  children: React.ReactNode;
};

enum ThemePalette {
  BG = "#000",
  MAIN = "#ff7a18",
  FONT_GLOBAL = "'Roboto', sans-serif",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ThemePalette.BG,
    },
    primary: {
      main: ThemePalette.MAIN,
    },
  },
  typography: {
    fontFamily: ThemePalette.FONT_GLOBAL,
  },
  components: {
    MuiToolbar: {
      defaultProps: {
        style: {
          backgroundColor: ThemePalette.BG,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          borderRadius: "0.5em",
          boxShadow: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            color: "whitesmoke",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            color: ThemePalette.MAIN,
          },
        },
      ],
    },
    MuiPaper: {
      defaultProps: {
        style: {
          backgroundColor: ThemePalette.BG,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        style: {
          background: "#111",
        },
      },
    },
  },
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeConfig theme={theme}>
      <CssBaseline />
      <Toaster />
      {children}
    </ThemeConfig>
  );
};

export default ThemeProvider;
