import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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

const navItems = ["Favorites", "About"];

const Navbar = (props: Props) => {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const closeModal = (isCloseModal: boolean) => {
    setOpen(isCloseModal);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
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
              MUI
            </Typography>
            <Box sx={{ display: "flex" }}>
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
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <PostModalDialog
          close={closeModal}
          title="Create new post"
          offer="Fill in the information of the post."
        />
      </Modal>
    </React.Fragment>
  );
};

export default Navbar;
