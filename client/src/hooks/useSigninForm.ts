import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useSigninMutation } from "../store/api/authApi";
import {
  SigninFormValues,
  signinValidationSchema,
} from "../validation/signinValidation";
import { Paths } from "../routes";

export const useSigninForm = () => {
  const [signin, { isLoading, isSuccess }] = useSigninMutation();
  const formMethods = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      formMethods.reset();
      navigate(Paths.ROOMS);
    }
  }, [isSuccess, navigate, formMethods]);

  const signinHandler = useCallback(
    (values: SigninFormValues) => {
      signin(values);
    },
    [signin]
  );

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(signinHandler),
    isLoading,
  };
};
