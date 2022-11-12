import * as yup from "yup";

export interface UserFormValues {
  name: string;
  email: string;
}

export const userValidationSchema = yup.object({
  name: yup.string().min(1).max(100).required(),
  email: yup.string().email().required(),
});
