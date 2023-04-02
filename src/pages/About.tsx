import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Typography variant="h3" component="h3" className="paragraph">
        <Link href="https://hoachnt.com/">Nguyen Tien Hoach</Link>{" "}
        with <FavoriteIcon fontSize="large" sx={{ color: "red" }} />
      </Typography>
    </motion.div>
  );
};

export default About;
