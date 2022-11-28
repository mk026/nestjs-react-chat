import { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  MessageFormValues,
  messageValidationSchema,
} from "../../../validation/messageValidation";
import { useAddMessageMutation } from "../../../store/api/messageApi";

import classes from "./AddMessageForm.module.scss";

interface AddMessageFormProps {
  roomId: number;
}

const AddMessageForm: FC<AddMessageFormProps> = ({ roomId }) => {
  const [addMessage] = useAddMessageMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageFormValues>({
    mode: "onBlur",
    resolver: yupResolver(messageValidationSchema),
  });

  const addMessageHandler = ({ content }: MessageFormValues) => {
    addMessage({ content, roomId });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(addMessageHandler)}
      className={classes.form}
    >
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
