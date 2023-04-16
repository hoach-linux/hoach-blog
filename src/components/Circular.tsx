import * as React from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Circular = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
export default Circular;
