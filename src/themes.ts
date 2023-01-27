import { defaultTheme } from "react-admin";
import { ThemeOptions } from "@mui/material";
export const defaultTheme1 = {
  palette: {
    background: {
      default: "#3f51b5",
    },
    secondary: {
      light: "#6ec6ff",
      main: "#f50057",
      dark: "#0069c0",
      contrastText: "#fff",
    },
  },
  typography: {
    h6: {
      fontWeight: 400,
    },
  },
  sidebar: {
    width: 240,
    closedWidth: 50,
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          "&$disabled": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled" as const,
        margin: "dense" as const,
        size: "small" as const,
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "filled" as const,
        margin: "dense" as const,
        size: "small" as const,
      },
    },
  },
};

export const darkTheme = {
  palette: {
    // background: {
    //     default: '#303030',
    // },
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#FBBA72",
    },
    mode: "dark" as "dark", // Switching the dark mode on is a single property value change.
  },
  shape: {
    borderRadius: 8,
  },
  sidebar: {
    width: 240,
  },

  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderLeft: "3px solid #000",
          "&.RaMenuItemLink-active": {
            borderLeft: "3px solid #90caf9",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: "#ffffffb3",
          //   backgroundColor: '#616161e6',
        },
      },
    },
  },
};

export const lightTheme = {
  palette: {
    primary: {
      main: "#0096FF",
    },
    secondary: {
      light: "#5f5fc4",
      main: "#283593",
      dark: "#001064",
      contrastText: "#fff",
    },
    background: {
      default: "#fcfcfe",
    },
    mode: "light" as "light",
  },
  shape: {
    borderRadius: 8,
  },
  sidebar: {
    width: 200,
  },
  components: {
    ...defaultTheme.components,
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          borderLeft: "3px solid #fff",
          "&.RaMenuItemLink-active": {
            borderLeft: "3px solid #0096FF",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "none",
        },
        root: {
          border: "1px solid #e0e0e3",
          backgroundClip: "padding-box",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorSecondary: {
          color: "#808080",
          backgroundColor: "#2196f3",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#f5f5f5",
        },
        barColorPrimary: {
          backgroundColor: "#d7d7d7",
        },
      },
    },
  },
};
