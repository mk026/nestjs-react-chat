import * as yup from "yup";

export interface SigninFormValues {
  email: string;
  password: string;
}

export const signinValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
