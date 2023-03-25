import { FC } from "react";

import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";
import { useSigninForm } from "../../../hooks/useSigninForm";

const SigninForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useSigninForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Email" name="email" type="email" />
      <FormField label="Password" name="password" type="password" />
      <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
    </Form>
  );
};

export default SigninForm;
