type EnvironmentVariables =
  import("./validation/configValidation").EnvironmentVariables;

declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {}
}
