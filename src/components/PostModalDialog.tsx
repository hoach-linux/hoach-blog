import * as React from "react";
import TypographyJoy from "@mui/joy/Typography";
import ModalDialogJoy from "@mui/joy/ModalDialog";
import Form from "./Form";

const PostModalDialog = ({
  close,
  title,
  offer,
}: {
  close: any;
  title: string;
  offer: string;
}) => {
  return (
    <ModalDialogJoy
      aria-labelledby="basic-modal-dialog-title"
      aria-describedby="basic-modal-dialog-description"
      sx={{
        maxWidth: 700,
        borderRadius: "md",
        minWidth: 360,
        p: 3,
        boxShadow: "lg",
      }}
    >
      <TypographyJoy
        id="basic-modal-dialog-title"
        component="h2"
        level="inherit"
        fontSize="1.25em"
        mb="0.25em"
      >
        {title}
      </TypographyJoy>
      <TypographyJoy
        id="basic-modal-dialog-description"
        mt={0.5}
        mb={2}
        textColor="text.tertiary"
      >
        {offer}
      </TypographyJoy>
      <Form close={close} />
    </ModalDialogJoy>
  );
};

export default PostModalDialog;
