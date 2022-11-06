import { Box, Button, CircularProgress, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";
import { useSignupMutation } from "../../../store/api/authApi";
import { Paths } from "../../../routes";

const SignupForm: FC = () => {
  const [signup, { isLoading }] = useSignupMutation();
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

  const signupHandler = async (values: SignupFormValues) => {
    await signup(values);
    reset();
    navigate(Paths.ROOMS);
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
      <Button
        type="submit"
        disabled={isLoading}
        endIcon={isLoading && <CircularProgress size="1rem" color="inherit" />}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SignupForm;
