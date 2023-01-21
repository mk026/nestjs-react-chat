import * as yup from "yup";

export interface SigninFormValues
  extends yup.InferType<typeof signinValidationSchema> {}

export const signinValidationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
