import { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  RoomFormValues,
  roomValidationSchema,
} from "../../../validation/roomValidation";

const AddRoomForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RoomFormValues>({
    mode: "onBlur",
    resolver: yupResolver(roomValidationSchema),
  });

  const addRoomHandler = (values: RoomFormValues) => {
    console.log(values);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(addRoomHandler)}>
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
      <Button type="submit">Send</Button>
    </Box>
  );
};

export default AddRoomForm;
