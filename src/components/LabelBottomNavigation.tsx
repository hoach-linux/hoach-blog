import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import Paper from "@mui/material/Paper";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("home");

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
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="About"
          value="about"
          icon={<InfoIcon />}
        />
        <BottomNavigationAction
          label="Logout"
          value="logout"
          icon={<LogoutIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
