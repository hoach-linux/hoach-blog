import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Slide from "@mui/material/Slide";
import { useScrollTrigger } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = (props: Props) => {
  const navItems = ["Favorites", "About"];

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar component="nav" sx={{ background: "#000" }}>
            <Toolbar
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  display: "block",
                  color: "#fff",
                  "&:hover": { color: "#fff" },
                }}
              >
                NB
              </Typography>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={"/"}
                    sx={{ mr: { sm: 2 } }}
                  >
                    Home
                  </Button>
                  {navItems.map((item) => (
                    <Button
                      component={Link}
                      to={item.toLocaleLowerCase()}
                      key={item}
                      sx={{ color: "#fff", "&:hover": { color: "#fff" } }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
