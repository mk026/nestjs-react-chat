import { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  RoomFormValues,
  roomValidationSchema,
} from "../../../validation/roomValidation";
import { useUpdateRoomMutation } from "../../../store/api/roomApi";
import { IRoom } from "../../../models/IRoom";
import LoadingButton from "../../loading-button/LoadingButton";

interface UpdateRoomFormProps {
  room: IRoom;
}

const UpdateRoomForm: FC<UpdateRoomFormProps> = ({ room }) => {
  const [updateRoom, { isLoading }] = useUpdateRoomMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoomFormValues>({
    mode: "onBlur",
    resolver: yupResolver(roomValidationSchema),
  });

  const updateRoomHandler = (values: RoomFormValues) => {
    updateRoom({ ...room, ...values });
  };

  return (
    <Box component="form" onSubmit={handleSubmit(updateRoomHandler)}>
      <TextField
        label="Room name"
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <TextField
        label="Room description"
        {...register("description")}
        error={!!errors.description}
        helperText={errors.description?.message}
      />
      <LoadingButton isLoading={isLoading}>Update</LoadingButton>
    </Box>
  );
};

export default UpdateRoomForm;
