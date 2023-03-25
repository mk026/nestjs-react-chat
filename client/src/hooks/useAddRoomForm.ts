import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useAddRoomMutation } from "../store/api/roomApi";
import {
  RoomFormValues,
  roomValidationSchema,
} from "../validation/roomValidation";

export const useAddRoomForm = () => {
  const [addRoom, { isLoading }] = useAddRoomMutation();
  const formMethods = useForm<RoomFormValues>({
    mode: "onBlur",
    resolver: yupResolver(roomValidationSchema),
  });

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(addRoom),
    isLoading,
  };
};
