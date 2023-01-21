import * as yup from "yup";

import { userRules } from "./rules";

export interface PasswordFormValues
  extends yup.InferType<typeof passwordValidationSchema> {}

export const passwordValidationSchema = yup.object({
  oldPassword: yup.string().required(),
  newPassword: yup
    .string()
    .min(userRules.password.min)
    .max(userRules.password.max)
    .required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("newPassword")], "Passwords are not equal"),
});
