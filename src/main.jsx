import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "@/styles/MuiTheme";
import "./index.module.scss";
import { mainRouter } from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        {/* <CssBaseline /> */}
        <RouterProvider router={mainRouter} />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
);
