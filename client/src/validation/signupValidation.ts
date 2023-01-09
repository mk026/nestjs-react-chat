import * as yup from "yup";

import { userRules } from "./rules";

export interface SignupFormValues {
  name: string;
  bio?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signupValidationSchema = yup.object({
  name: yup.string().min(userRules.name.min).max(userRules.name.max).required(),
  bio: yup.string().min(userRules.bio.min).max(userRules.bio.max).optional(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(userRules.password.min)
    .max(userRules.password.max)
    .required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords are not equal"),
});
