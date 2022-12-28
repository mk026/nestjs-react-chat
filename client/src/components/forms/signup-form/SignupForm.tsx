import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";
import { useSignupMutation } from "../../../store/api/authApi";
import { Paths } from "../../../routes";
import FormField from "../../form-field/FormField";
import LoadingButton from "../../loading-button/LoadingButton";

const SignupForm: FC = () => {
  const [signup, { isLoading, isSuccess }] = useSignupMutation();
  const methods = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      methods.reset();
      navigate(Paths.ROOMS);
    }
  }, [isSuccess, navigate, methods]);

  const signupHandler = (values: SignupFormValues) => {
    signup(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(signupHandler)}>
        <FormField label="Name" name="name" />
        <FormField label="Email" name="email" type="email" />
        <FormField label="Password" name="password" type="password" />
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

export default SignupForm;
