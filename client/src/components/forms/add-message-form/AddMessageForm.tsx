import { FC } from "react";
import { Button } from "@mui/material";

import { useAddMessageForm } from "../../../hooks/useAddMessageForm";
import FormField from "../../common/form-field";
import classes from "./AddMessageForm.module.scss";
import Form from "../../common/form";

interface AddMessageFormProps {
  roomId: number;
}

const AddMessageForm: FC<AddMessageFormProps> = ({ roomId }) => {
  const { formMethods, onSubmit } = useAddMessageForm(roomId);

  return (
    <Form
      formMethods={formMethods}
      onSubmit={onSubmit}
      className={classes.form}
    >
      <FormField name="content" multiline />
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default AddMessageForm;
