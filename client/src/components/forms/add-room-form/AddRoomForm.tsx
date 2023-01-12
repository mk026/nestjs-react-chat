import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  RoomFormValues,
  roomValidationSchema,
} from "../../../validation/roomValidation";
import { useAddRoomMutation } from "../../../store/api/roomApi";
import FormField from "../../common/form-field/FormField";
import LoadingButton from "../../common/loading-button/LoadingButton";

const AddRoomForm: FC = () => {
  const [addRoom, { isLoading }] = useAddRoomMutation();
  const methods = useForm<RoomFormValues>({
    mode: "onBlur",
    resolver: yupResolver(roomValidationSchema),
  });

  const addRoomHandler = (values: RoomFormValues) => {
    addRoom(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(addRoomHandler)}>
        <FormField label="Room name" name="title" />
        <FormField label="Room description" name="description" />
        <LoadingButton isLoading={isLoading}>Save</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default AddRoomForm;
