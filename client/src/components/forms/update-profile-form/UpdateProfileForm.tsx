import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  UserFormValues,
  userValidationSchema,
} from "../../../validation/userValidation";
import { useUpdateUserMutation } from "../../../store/api/userApi";
import { IUser } from "../../../models/user";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";

interface UpdateProfileFormProps {
  user: IUser;
}

const UpdateProfileForm: FC<UpdateProfileFormProps> = ({ user }) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const methods = useForm<UserFormValues>({
    mode: "onBlur",
    resolver: yupResolver(userValidationSchema),
  });

  const updateProfileHandler = async (values: UserFormValues) => {
    await updateUser({ ...user, ...values });
    methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(updateProfileHandler)}
      >
        <FormField label="Name" name="name" />
        <FormField label="About yorself" name="bio" multiline />
        <FormField label="Email" name="email" type="email" />
        <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default UpdateProfileForm;
