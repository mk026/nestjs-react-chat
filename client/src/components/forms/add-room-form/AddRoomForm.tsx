import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  RoomFormValues,
  roomValidationSchema,
} from "../../../validation/roomValidation";
import FormField from "../../form-field/FormField";

const AddRoomForm: FC = () => {
  const methods = useForm<RoomFormValues>({
    mode: "onBlur",
    resolver: yupResolver(roomValidationSchema),
  });

  const addRoomHandler = (values: RoomFormValues) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(addRoomHandler)}>
        <FormField label="Room name" name="title" />
        <FormField label="Room description" name="description" />
        <Button type="submit">Send</Button>
      </Box>
    </FormProvider>
  );
};

export default AddRoomForm;
