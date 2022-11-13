import * as yup from "yup";

import { userRules } from "./rules";

export interface UserFormValues {
  name: string;
  email: string;
}

export const userValidationSchema = yup.object({
  name: yup.string().min(userRules.name.min).max(userRules.name.max).required(),
  email: yup.string().email().required(),
});
