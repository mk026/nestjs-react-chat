import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { IRoom } from "../models/room";
import { useUpdateRoomMutation } from "../store/api/roomApi";
import {
  RoomFormValues,
  roomValidationSchema,
} from "../validation/roomValidation";

export const useUpdateRoomForm = (room: IRoom) => {
  const [updateRoom, { isLoading }] = useUpdateRoomMutation();
  const formMethods = useForm<RoomFormValues>({
    mode: "onBlur",
    resolver: yupResolver(roomValidationSchema),
  });

  const updateRoomHandler = useCallback(
    (values: RoomFormValues) => {
      updateRoom({ ...room, ...values });
    },
    [updateRoom, room]
  );

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(updateRoomHandler),
    isLoading,
  };
};
