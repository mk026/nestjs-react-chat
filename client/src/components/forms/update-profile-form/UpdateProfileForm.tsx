import { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  UserFormValues,
  userValidationSchema,
} from "../../../validation/userValidation";
import { useUpdateUserMutation } from "../../../store/api/userApi";
import { IUser } from "../../../models/IUser";
import LoadingButton from "../../loading-button/LoadingButton";

interface UpdateProfileFormProps {
  user: IUser;
}

const UpdateProfileForm: FC<UpdateProfileFormProps> = ({ user }) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormValues>({
    mode: "onBlur",
    resolver: yupResolver(userValidationSchema),
  });

  const updateProfileHandler = async (values: UserFormValues) => {
    await updateUser({ ...user, ...values });
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(updateProfileHandler)}>
      <TextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
    </Box>
  );
};

export default UpdateProfileForm;
