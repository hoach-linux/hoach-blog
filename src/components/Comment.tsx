import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

const Comment = React.forwardRef((props: any, ref: any) => {
  return (
    <Card ref={ref} sx={{ maxWidth: 945, marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: "xl", mt: 2 }}
          >
            {props.comment.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5, mb: 2 }}
          >
            {props.comment.email}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5, mb: 2 }}
          >
            {props.comment.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

export default Comment;
