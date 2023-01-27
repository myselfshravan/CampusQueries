import * as React from "react";

// import Logo from './Logo';
import { defaultTheme, Layout, AppBar, ToggleThemeButton } from "react-admin";
import { createTheme, Box, Typography } from "@mui/material";

// import { lightTheme } from './themes';
// import { darkTheme, lightTheme, defaultTheme1 } from './themes';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    // primary: { main: "#e3e9ed" },
    secondary: { main: "#f50057" },
    background: { paper: "#000000" },
    text: { primary: "#fff" },
    divider: "#424242",
    action: { hover: "#424242" },
    error: { main: "#f50057" },
    success: { main: "#f50057" },
    info: { main: "#f50057" },
    warning: { main: "#f50057" },
    imagebg: { main: "#f50057" },
  },
});
const MyAppBar = (props) => (
  <AppBar
    sx={{
      "& .RaAppBar-title": {
        flex: 1,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
      },
    }}
    {...props}
  >
    <Typography
      variant="h6"
      noWrap
      component="a"
      href=""
      sx={{
        mr: 2,
        display: { xs: "flex", md: "none" },
        flexGrow: 1,
        // fontFamily: "monospace",
        fontWeight: 600,
        fontSize: "19px",
        color: "inherit",
        textDecoration: "none",
      }}
    >
      Campus Queries
    </Typography>
    <Box flex="1">
      <Typography variant="h6" id="react-admin-title"></Typography>
    </Box>
    {/* <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} /> */}
    <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
  </AppBar>
);

export default MyAppBar;
