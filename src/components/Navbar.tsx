import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/joy/Modal";
import ButtonJoy from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import PostModalDialog from "./PostModalDialog";
import { Link } from "react-router-dom";

interface Props {
  create: any;
  window?: () => Window;
}

const drawerWidth = "fullWidth";
const navItems = ["About", "Favorites"];
const anchor = "bottom";

const Navbar = (props: Props, create: any) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const closeModal = (isCloseModal: boolean) => {
    setOpen(isCloseModal);
  };

  // const drawer = (
  //   <Box
  //     onClick={handleDrawerToggle}
  //     sx={{
  //       textAlign: "center",
  //       borderTopLeftRadius: 8,
  //       borderTopRightRadius: 8,
  //     }}
  //   >
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       MUI
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <ListItem key={item} disablePadding>
  //           <ListItemButton sx={{ textAlign: "center" }}>
  //             <ListItemText primary={item} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ display: "block", color: "#fff", "&:hover": {color: "#fff"} }}
            >
              MUI
            </Typography>
            <Box sx={{display: "flex"}}>
              <ButtonJoy
                variant="soft"
                color="primary"
                startDecorator={<Add />}
                onClick={() => setOpen(true)}
                sx={{ mr: { sm: 2 } }}
              >
                New post
              </ButtonJoy>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
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
        {/* <Box component="nav">
          <Drawer
            anchor={anchor}
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box> */}
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <PostModalDialog
          create={props.create}
          close={closeModal}
          title="Create new post"
          offer="Fill in the information of the post."
        />
      </Modal>
    </React.Fragment>
  );
};

export default Navbar;
