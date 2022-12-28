import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type FormFieldProps = { name: string } & TextFieldProps;

const FormField: FC<FormFieldProps> = ({ name, label, ...textFieldProps }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      label={label}
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name]?.message as string}
      {...textFieldProps}
    />
  );
};

export default FormField;
