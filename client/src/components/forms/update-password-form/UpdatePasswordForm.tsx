import { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  PasswordFormValues,
  passwordValidationSchema,
} from "../../../validation/passwordValidation";
import { useUpdatePasswordMutation } from "../../../store/api/userApi";
import LoadingButton from "../../loading-button/LoadingButton";

const UpdatePasswordForm: FC = () => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormValues>({
    mode: "onBlur",
    resolver: yupResolver(passwordValidationSchema),
  });

  const updatePasswordHandler = (values: PasswordFormValues) => {
    updatePassword(values);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(updatePasswordHandler)}>
      <TextField
        label="Old password"
        type="password"
        {...register("oldPassword")}
        error={!!errors.oldPassword}
        helperText={errors.oldPassword?.message}
      />
      <TextField
        label="New Password"
        type="password"
        {...register("newPassword")}
        error={!!errors.newPassword}
        helperText={errors.newPassword?.message}
      />
      <TextField
        label="Confirm password"
        type="password"
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
    </Box>
  );
};

export default UpdatePasswordForm;
