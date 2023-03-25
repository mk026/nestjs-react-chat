import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { IUser } from "../models/user";
import { useUpdateUserMutation } from "../store/api/userApi";
import {
  UserFormValues,
  userValidationSchema,
} from "../validation/userValidation";

export const useUpdateProfileForm = (user: IUser) => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const formMethods = useForm<UserFormValues>({
    mode: "onBlur",
    resolver: yupResolver(userValidationSchema),
  });

  const updateProfileHandler = async (values: UserFormValues) => {
    await updateUser({ ...user, ...values });
    formMethods.reset();
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(updateProfileHandler),
    isLoading,
  };
};
