import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FavoriteIcon from "@mui/icons-material/Favorite";

const About = () => {
  return (
    <div>
      <Typography variant="h3" component="h3" className="paragraph">
        <Link href="http://nguyen-hoach.netlify.app/">Nguyen Tien Hoach</Link>{" "}
        with <FavoriteIcon fontSize="large" sx={{ color: "red" }} />
      </Typography>
    </div>
  );
};

export default About;
