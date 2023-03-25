import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { useAddMessageMutation } from "../store/api/messageApi";
import {
  MessageFormValues,
  messageValidationSchema,
} from "../validation/messageValidation";

export const useAddMessageForm = (roomId: number) => {
  const [addMessage] = useAddMessageMutation();
  const formMethods = useForm<MessageFormValues>({
    mode: "onBlur",
    resolver: yupResolver(messageValidationSchema),
  });

  const addMessageHandler = useCallback(
    ({ content }: MessageFormValues) => {
      addMessage({ content, roomId });
    },
    [addMessage, roomId]
  );

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(addMessageHandler),
  };
};
