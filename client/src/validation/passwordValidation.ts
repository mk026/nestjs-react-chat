import * as yup from "yup";

export interface PasswordFormValues {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export const passwordValidationSchema = yup.object({
  oldPassword: yup.string().required(),
  newPassword: yup.string().min(8).max(100).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("newPassword")], "Passwords are not equal"),
});
