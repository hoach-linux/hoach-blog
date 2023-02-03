import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";

const Comment = React.forwardRef((props: any, ref: any) => {
  return (
    <Card variant="outlined" ref={ref} sx={{ maxWidth: 945, marginBottom: 1 }}>
      <Typography level="h2" sx={{ fontSize: "xl", mt: 2 }}>
        {props.comment.name}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        {props.comment.email}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        {props.comment.body}
      </Typography>
    </Card>
  );
});

export default Comment;
