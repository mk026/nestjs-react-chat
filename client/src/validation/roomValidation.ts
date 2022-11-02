import * as yup from "yup";

export interface RoomFormValues {
  title: string;
  description: string;
}

export const roomValidationSchema = yup.object({
  title: yup.string().min(1).max(100).required(),
  description: yup.string().min(1).max(100).required(),
});
