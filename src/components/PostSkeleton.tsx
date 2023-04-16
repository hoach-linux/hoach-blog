import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Box } from "@mui/material";

function PostSkeleton() {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Skeleton variant="rectangular" height={250} />
      <Skeleton height={50} />
      <Skeleton height={80} />
    </Box>
  );
}

export default PostSkeleton;
