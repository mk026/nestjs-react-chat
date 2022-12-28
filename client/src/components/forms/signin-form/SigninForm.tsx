import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../../../validation/signinValidation";
import { useSigninMutation } from "../../../store/api/authApi";
import { Paths } from "../../../routes";
import FormField from "../../form-field/FormField";
import LoadingButton from "../../loading-button/LoadingButton";

const SigninForm: FC = () => {
  const [signin, { isLoading, isSuccess }] = useSigninMutation();
  const methods = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      methods.reset();
      navigate(Paths.ROOMS);
    }
  }, [isSuccess, navigate, methods]);

  const signinHandler = (values: SigninFormValues) => {
    signin(values);
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(signinHandler)}>
        <FormField label="Email" name="email" type="email" />
        <FormField label="Password" name="password" type="password" />
        <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default SigninForm;
