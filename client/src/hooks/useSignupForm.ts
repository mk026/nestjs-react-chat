import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useSignupMutation } from "../store/api/authApi";
import {
  SignupFormValues,
  signupValidationSchema,
} from "../validation/signupValidation";
import { Paths } from "../routes";

export const useSignupForm = () => {
  const [signup, { isLoading, isSuccess }] = useSignupMutation();
  const formMethods = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      formMethods.reset();
      navigate(Paths.ROOMS);
    }
  }, [isSuccess, navigate, formMethods]);

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(signup),
    isLoading,
  };
};
