import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { Box, BoxProps } from "@mui/material";

interface FormProps<T extends FieldValues> extends BoxProps {
  formMethods: UseFormReturn<T>;
  onSubmit: BoxProps["onSubmit"];
  children: BoxProps["children"];
}

const Form = <T extends FieldValues>({
  formMethods,
  onSubmit,
  children,
  ...props
}: FormProps<T>) => {
  return (
    <FormProvider {...formMethods}>
      <Box component="form" onSubmit={onSubmit} {...props}>
        {children}
      </Box>
    </FormProvider>
  );
};

export default Form;
