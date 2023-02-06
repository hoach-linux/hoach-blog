import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function LabelBottomNavigation() {
  const currentLocation = window.location.pathname;
  const [value, setValue] = React.useState(currentLocation);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        display: { xs: "block", sm: "none" },
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ width: "fullWidth" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          value="/"
          icon={<HomeIcon />}
        />
        {/* <BottomNavigationAction
          component={Link}
          to="/favorites"
          label="Favorites"
          value="/favorites"
          icon={<FavoriteIcon />}
        /> */}
        <BottomNavigationAction
          component={Link}
          to="/about"
          label="About"
          value="/about"
          icon={<InfoIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
