import * as yup from "yup";

export interface MessageFormValues {
  content: string;
}

export const messageValidationSchema = yup.object({
  content: yup.string().max(500).required(),
});
