import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonJoy from "@mui/joy/Button";
import { Link } from "react-router-dom";

const navItems = ["Favorites", "About"];

const Navbar = () => {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{background: "#000"}}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
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
                <ButtonJoy
                  variant="soft"
                  color="primary"
                  component={Link}
                  to={"/"}
                  sx={{ mr: { sm: 2 } }}
                >
                  Home
                </ButtonJoy>
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
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
