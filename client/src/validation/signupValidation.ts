import * as yup from "yup";

export interface SignupFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const signupValidationSchema = yup.object({
  name: yup.string().min(1).max(100).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(100).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords are not equal"),
});
