import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  PasswordFormValues,
  passwordValidationSchema,
} from "../../../validation/passwordValidation";
import { useUpdatePasswordMutation } from "../../../store/api/userApi";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";

const UpdatePasswordForm: FC = () => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const methods = useForm<PasswordFormValues>({
    mode: "onBlur",
    resolver: yupResolver(passwordValidationSchema),
  });

  const updatePasswordHandler = (values: PasswordFormValues) => {
    updatePassword(values);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(updatePasswordHandler)}
      >
        <FormField label="Old password" name="oldPassword" type="password" />
        <FormField label="New Password" name="newPassword" type="password" />
        <FormField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />
        <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default UpdatePasswordForm;
