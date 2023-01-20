import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  MessageFormValues,
  messageValidationSchema,
} from "../../../validation/messageValidation";
import { useAddMessageMutation } from "../../../store/api/messageApi";
import FormField from "../../common/form-field";

import classes from "./AddMessageForm.module.scss";

interface AddMessageFormProps {
  roomId: number;
}

const AddMessageForm: FC<AddMessageFormProps> = ({ roomId }) => {
  const [addMessage] = useAddMessageMutation();
  const methods = useForm<MessageFormValues>({
    mode: "onBlur",
    resolver: yupResolver(messageValidationSchema),
  });

  const addMessageHandler = ({ content }: MessageFormValues) => {
    addMessage({ content, roomId });
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(addMessageHandler)}
        className={classes.form}
      >
        <FormField name="content" multiline />
        <Button type="submit">Send</Button>
      </Box>
    </FormProvider>
  );
};

export default AddMessageForm;
