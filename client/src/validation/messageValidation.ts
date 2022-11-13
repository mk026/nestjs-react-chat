import * as yup from "yup";

import { messageRules } from "./rules";

export interface MessageFormValues {
  content: string;
}

export const messageValidationSchema = yup.object({
  content: yup.string().max(messageRules.content.max).required(),
});
