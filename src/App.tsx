import "./style/App.css";
import LabelBottomNavigation from "./components/LabelBottomNavigation";
import Navbar from "./components/Navbar";
import Toolbar from "@mui/material/Toolbar";
import { Outlet, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
          paddingRight: "20px",
          paddingLeft: "20px",
          textTransform: "capitalize"
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: "25px",
        },
      },
    },
  },
});

function App() {
  return (
    <div id="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Toolbar />
        <Outlet />
        <Toolbar />
        <LabelBottomNavigation />
      </ThemeProvider>
    </div>
  );
}

export default App;
