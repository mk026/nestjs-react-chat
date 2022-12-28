import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField } from "@mui/material";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../../../validation/signinValidation";
import { useSigninMutation } from "../../../store/api/authApi";
import { Paths } from "../../../routes";
import LoadingButton from "../../loading-button/LoadingButton";

const SigninForm: FC = () => {
  const [signin, { isLoading, isSuccess }] = useSigninMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      reset();
      navigate(Paths.ROOMS);
    }
  }, [isSuccess, navigate, reset]);

  const signinHandler = (values: SigninFormValues) => {
    signin(values);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(signinHandler)}>
      <TextField
        label="Email"
        type="email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
    </Box>
  );
};

export default SigninForm;
