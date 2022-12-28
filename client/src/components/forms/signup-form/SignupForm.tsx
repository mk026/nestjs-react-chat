import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, TextField } from "@mui/material";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";
import { useSignupMutation } from "../../../store/api/authApi";
import { Paths } from "../../../routes";
import LoadingButton from "../../loading-button/LoadingButton";

const SignupForm: FC = () => {
  const [signup, { isLoading, isSuccess }] = useSignupMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      reset();
      navigate(Paths.ROOMS);
    }
  }, [isSuccess, navigate, reset]);

  const signupHandler = (values: SignupFormValues) => {
    signup(values);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(signupHandler)}>
      <TextField
        label="Name"
        {...register("email")}
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
      <TextField
        label="Password"
        type="password"
        {...register("email")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm password"
        type="password"
        {...register("email")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword?.message}
      />
      <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
    </Box>
  );
};

export default SignupForm;
