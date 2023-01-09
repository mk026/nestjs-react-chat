import * as yup from "yup";

import { userRules } from "./rules";

export interface UserFormValues {
  name?: string;
  bio?: string;
  email?: string;
}

export const userValidationSchema = yup.object({
  name: yup.string().min(userRules.name.min).max(userRules.name.max).optional(),
  bio: yup.string().min(userRules.bio.min).max(userRules.bio.max).optional(),
  email: yup.string().email().optional(),
});
