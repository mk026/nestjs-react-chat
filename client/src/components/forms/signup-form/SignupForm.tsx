import { Box, Button, TextField } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";

const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });

  const signupHandler = (values: SignupFormValues) => {
    console.log(values);
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
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default SignupForm;
