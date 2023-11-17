import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: ["Rubik", "Roboto"].join(","),
    h2: {
      fontSize: "2rem",
      lineHeight: "1.5",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "500",
      lineHeight: "normal",
    },
    caption: {
      fontSize: "0.875rem",
      lineHeight: "1.15",
    },
    body1: {
      color: "#474747",
    },
    body2: {
      fontSize: "1.5rem",
      lineHeight: "normal",
    },
    subtitle1: {
      fontSize: "1rem",
      lineHeight: "2",
    },
    subtitle2: {
      fontSize: "0.875rem",
      lineHeight: "1.71",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#ffffff",
          color: "#474747",
        },
        root: {
          padding: "16px 0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#265183",
          borderRadius: "8px",
          marginTop: "27px",
          padding: "8px 16px",
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: "1px solid #5D96AA",
          backgroundColor: "#EBF4F7",
          boxShadow: "3px 3px 4px 0px rgba(93, 150, 170, 0.25)",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "12px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1280px!important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#474748",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "#474748",
          },
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        sizeLarge: {
          fontSize: "3.75rem",
        },
      },
    },
  },
});
