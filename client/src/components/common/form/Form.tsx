import { FC } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { Box, BoxProps } from "@mui/material";

interface FormProps extends BoxProps {
  formMethods: UseFormReturn;
  onSubmit: BoxProps["onSubmit"];
  children: BoxProps["children"];
}

const Form: FC<FormProps> = ({ formMethods, onSubmit, children, ...props }) => {
  return (
    <FormProvider {...formMethods}>
      <Box component="form" onSubmit={onSubmit} {...props}>
        {children}
      </Box>
    </FormProvider>
  );
};

export default Form;
