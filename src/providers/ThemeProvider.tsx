import React from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as ThemeConfig,
} from "@mui/material";

type ThemeProviderProps = {
  children: React.ReactNode;
};

enum ThemePalette {
  BG = "black",
}

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ThemePalette.BG,
    },
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
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        style: {
          backgroundColor: ThemePalette.BG,
        },
      },
    },
  },
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <ThemeConfig theme={theme}>
      <CssBaseline />
      {children}
    </ThemeConfig>
  );
};

export default ThemeProvider;
