import * as yup from "yup";

export interface EnvironmentVariables
  extends yup.InferType<typeof configValidationSchema> {}

export const configValidationSchema = yup.object({
  REACT_APP_API_BASE_URL: yup.string().required(),
  REACT_APP_API_SOCKET_URL: yup.string().required(),
  REACT_APP_API_SIGNUP_URL: yup.string().required(),
  REACT_APP_API_SIGNIN_URL: yup.string().required(),
  REACT_APP_API_CHECK_AUTH_URL: yup.string().required(),
  REACT_APP_API_USERS_URL: yup.string().required(),
  REACT_APP_API_PASSWORD_UPDATE_URL: yup.string().required(),
  REACT_APP_API_MESSAGES_URL: yup.string().required(),
  REACT_APP_API_ROOMS_URL: yup.string().required(),
});

export const validateConfig = () =>
  configValidationSchema.validateSync(process.env);
