import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  RoomFormValues,
  roomValidationSchema,
} from "../../../validation/roomValidation";
import { useUpdateRoomMutation } from "../../../store/api/roomApi";
import { IRoom } from "../../../models/IRoom";
import FormField from "../../common/form-field/FormField";
import LoadingButton from "../../common/loading-button/LoadingButton";

interface UpdateRoomFormProps {
  room: IRoom;
}

const UpdateRoomForm: FC<UpdateRoomFormProps> = ({ room }) => {
  const [updateRoom, { isLoading }] = useUpdateRoomMutation();
  const methods = useForm<RoomFormValues>({
    mode: "onBlur",
    resolver: yupResolver(roomValidationSchema),
  });

  const updateRoomHandler = (values: RoomFormValues) => {
    updateRoom({ ...room, ...values });
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(updateRoomHandler)}>
        <FormField label="Room name" name="title" />
        <FormField label="Room description" name="description" />
        <LoadingButton isLoading={isLoading}>Update</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default UpdateRoomForm;
