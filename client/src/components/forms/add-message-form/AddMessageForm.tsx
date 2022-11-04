import { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  MessageFormValues,
  messageValidationSchema,
} from "../../../validation/messageValidation";

const AddMessageForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageFormValues>({
    mode: "onBlur",
    resolver: yupResolver(messageValidationSchema),
  });

  const addMessageHandler = (values: MessageFormValues) => {
    console.log(values);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(addMessageHandler)}>
      <TextField
        multiline
        placeholder="Enter your message..."
        {...register("content")}
        error={!!errors.content}
        helperText={errors.content?.message}
      />
      <Button type="submit">Send</Button>
    </Box>
  );
};

export default AddMessageForm;
