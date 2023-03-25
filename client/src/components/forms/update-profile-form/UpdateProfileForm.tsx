import { FC } from "react";

import { IUser } from "../../../models/user";
import { useUpdateProfileForm } from "../../../hooks/useUpdateProfileForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

interface UpdateProfileFormProps {
  user: IUser;
}

const UpdateProfileForm: FC<UpdateProfileFormProps> = ({ user }) => {
  const { formMethods, onSubmit, isLoading } = useUpdateProfileForm(user);

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Name" name="name" />
      <FormField label="About yorself" name="bio" multiline />
      <FormField label="Email" name="email" type="email" />
      <LoadingButton isLoading={isLoading}>Submit</LoadingButton>
    </Form>
  );
};

export default UpdateProfileForm;
